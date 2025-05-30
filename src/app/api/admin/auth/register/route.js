
import { NextResponse } from 'next/server';
import AuthServices from '@/lib/services/admin/auth.services';
import UserServices from '@/lib/services/admin/user.services';
import { registerSchema } from '@/schema/user.schema';
import asyncHandler from '@/utils/asyncHandler';

const register =  async (req) => {

    // validation of form
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      const errorMsg = parsed.error.errors.map((e) => e.message).join(', ');
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const { username, email, password } = parsed.data;

    // is userExists
    const existingUser = await UserServices.findByUsernameOrEmail(username, email);
    if (existingUser?.data) {
      return NextResponse.json(
        { error: 'Username or email already exists' },
        { status: 409 }
      );
    }

    // create a new user
    const { data: createdUser, error: createError } = await UserServices.createUser({
      username,
      email,
      password,
    });

    if (createError || !createdUser) {
      console.error('User creation error:', createError);
      return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
    }

    const safeUser = createdUser.toSafeObject();
    const { data: token, error: tokenError } = await AuthServices.generateToken(safeUser);
    if (tokenError || !token) {
      return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
    }

    const response = NextResponse.json({
      message: 'User registered successfully',
      data: safeUser,
    });

    const { error: cookieError } = await AuthServices.setAuthCookie(token);
    if (cookieError) {
      return NextResponse.json({ error: 'Failed to set auth cookie' }, { status: 500 });
    }

    return response;
  }

  export const POST = asyncHandler(register);


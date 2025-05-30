// pages/api/auth/login.js
import { NextResponse } from 'next/server';
import AuthServices from '@/lib/services/admin/auth.services';
import UserServices from '@/lib/services/admin/user.services';
import { loginSchema } from '@/schema/user.schema';
import bcrypt from 'bcryptjs';
import asyncHandler from '@/utils/asyncHandler';

async function Login (req) {
    const body = await req.json();
    const parsedBody = loginSchema.safeParse(body);
    if (!parsedBody.success) {
      const errorMessage = parsedBody.error.errors.map((err) => err.message).join(', ');
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    const { username, password } = parsedBody.data;

    const verifyUsername = await UserServices.findByUsername(username);
    if (!verifyUsername) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    

    const isPasswordMatch = await bcrypt.compare(password, verifyUsername.password);
    if (!isPasswordMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    let safeUser = verifyUsername.toSafeObject();
    
    const { data: token, error: tokenError } = await AuthServices.generateToken(safeUser);
    
    if (tokenError || !token) {
      return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
    const response = NextResponse.json({
      status: 200,
      message: 'Login successful',
      data: safeUser,
    });

    const { error: cookieError } = await AuthServices.setAuthCookie(token);
    if (cookieError) {
      return NextResponse.json({ error: 'Failed to set auth cookie' }, { status: 500 });
    }

    return response;

}

export const POST = asyncHandler(Login);
import { NextResponse } from 'next/server';
import AuthServices from '@/lib/services/admin/auth.services';
export async function DELETE() {
  const response = NextResponse.json({ message: 'Logout successful' });

  AuthServices.removeAuthCookie(response);

  return response;
}

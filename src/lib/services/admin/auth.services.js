// lib/services/authServices.js

import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

class AuthServices {

    // generate token using jwt
  static async generateToken(user) {
    const result = {
      data: null,
      error: null,
    };
    try {
      if (!user) {
        throw new Error('User not found');
      }
      const token = await jwt.sign(
        { ...user},
        process.env.JWT_SECRET_KEY ,
        {
          expiresIn: process.env.JWT_EXPIRES_IN 
        }
      );
      result.data = token;
    } catch (error) {
      console.error('Error in generateToken:', error);
      result.error = error.message;
    }
    return result;
  }


  // set auth cookie

  static async setAuthCookie(token) {
    const result = {
      data: null,
      error: null,
    };
    try {
      const cookieStore = await cookies();
      cookieStore.set({
        name: 'auth_session',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 hour
      });
      result.data = true;
    } catch (error) {
      console.error('Error in setAuthCookie:', error);
      result.error = error.message;
    }
    return result;
  }

  // remove auth cookie
  static removeAuthCookie(response) {
    try {
      response.cookies.set('auth_session', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        expires: new Date(0),
      });
    } catch (error) {
      console.error('Error in removeAuthCookie:', error);
      throw error;
    }
  }
  
  


  // return cookie values
  static async getSession(){
    const result = {
        data : null,
        error : null,
    }
  try {
      const cookieStore = await cookies();
      const token = cookieStore.get('auth_session');

      if(!token){
          result.error = "Token not found";
          return result;
      }

      const decoded = await jwt.verify(token.value, process.env.JWT_SECRET_KEY);
      result.data = decoded;
      return result;

  } catch (error) {
      console.log("error in getSession", error);
      result.error = error.message;
      return result;
  }
 
}




}

export default AuthServices;
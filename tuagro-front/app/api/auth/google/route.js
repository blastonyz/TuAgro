import { NextResponse } from "next/server";
import {cookies} from 'next/headers'

export async function GET(request) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/auth/google`)
    const data = await response.json()
    const token = response.headers.get('set-cookie') 
    console.log('token: ',token);
    
      const nextResponse = NextResponse.json({
       user: data.user, 
       token: token 
   });

   // Configurar la cookie
   const cookiesStore = await cookies();
   cookiesStore.set("authToken", token, {
       httpOnly: true,
       secure: process.env.NODE_ENV === "production",
       sameSite: "strict",
       maxAge: 60 * 60 * 24 * 7, // 7 días
       path: "/",
   });
   return nextResponse
}

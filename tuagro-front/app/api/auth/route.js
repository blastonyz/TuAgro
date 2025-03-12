import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request){
    try {
        const requestBody = await request.json();
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
            credentials: 'include' 
        });
        
    
        if(!response.ok) {
            const errorData = await response.json()
            return new NextResponse(JSON.stringify(errorData),{
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
         })
      
        }
         const data = await response.json()
         const token = response.headers.get('set-cookie') 
         console.log('token: ',token);
         
           const nextResponse = NextResponse.json({
            user: data.user, 
            token: token 
        });

        // Configurar la cookie
        cookies().set("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 días
            path: "/",
        });

        return nextResponse

    } catch (error) {
        console.warn("Error en API /api/login:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to login" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
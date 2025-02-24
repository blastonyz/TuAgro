import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const requestBody = await request.json();
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody) 
        });
        
    
        if(!response.ok) throw new Error('error al loguearse')
         const data = response.json()
         const token = response.headers.get('Authorization') 
         console.log('authToken: ',token);
           
        return new NextResponse(JSON.stringify(data),{
            status: 200,
            headers:{ 'Content-Type': 'application/json',
                ...(token ? { "Authorization": token } : {})    
             }
        })   

    } catch (error) {
        console.error("Error en API /api/login:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to login" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
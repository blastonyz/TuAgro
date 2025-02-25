import { NextResponse } from "next/server";

export async function POST(request){
    const requestBody = await request.json();
    const response = await fetch('http://localhost:8080/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(requestBody)
    })
    if(!response.ok) throw new Error('API: error al registrarse')
        const data = await response.json()
    return new NextResponse(JSON.stringify(data),{
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}
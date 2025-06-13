import { NextResponse } from "next/server";

export async function POST(request) {
    const requestBody = await request.json();
    const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })
    if (!response.ok) {
        const errorData = await response.json();
        console.error('motivo: ',errorData);
        return new NextResponse(JSON.stringify({
            success: false,
            message: errorData || "Error al registrarte",
        }), {
            status: response.status, // Usa el código de estado de la respuesta
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        const data = await response.json()
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}
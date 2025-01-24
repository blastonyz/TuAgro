import { NextResponse } from "next/server";

export async function GET(request){
    try {
          const data = await fetch('http://localhost:8080/categories').then(response => response.json())
          return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
          {
            error: "No se pudo conectar al servidor. Verifica que está activo.",
            details: error.message,
          },
          { status: 500 } 
        );
    }
}
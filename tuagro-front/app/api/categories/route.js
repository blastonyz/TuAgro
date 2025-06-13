import { NextResponse } from "next/server";

export async function GET(request){
    try {
          const data = await fetch('http://localhost:8080/categories', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json' ,
              'Cache-Control': 'max-age=3600', 
              'Pragma': ''
            },
          }).then(response => response.json())
          return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: {   'Content-Type': 'application/json' ,
              'Cache-Control': 'max-age=3600', 
              'Pragma': ''}
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
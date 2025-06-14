import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const response = await data.json();
        console.log('categories handler: ', response);

        return new NextResponse(JSON.stringify(response), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store'
            }
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
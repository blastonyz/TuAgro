import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/cartlist`)
        if(!response.ok) {
            const errorData = await response.json()
            return new NextResponse(JSON.stringify(errorData), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            })
        }
        const data = await response.json()
        console.log('carts api: ',data);
        
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })        
    } catch (error) {
        
    }
}

export async function POST(request) {
    try {
        const requestBody = await request.json()
        console.log('api cart: ', requestBody);

        const response = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
            credentials: 'include'
        })

        if (!response.ok) {
            const errorData = await response.json()
            return new NextResponse(JSON.stringify(errorData), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const data = await response.json()
        return NextResponse.json({
            message: 'carrito guardado',
            data
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Error al guardar el carrito',
            error: error.message,
        }, { status: 500 });
    }
}

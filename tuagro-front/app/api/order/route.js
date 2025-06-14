import { NextResponse } from "next/server";

export async function PUT(request){
    try {
        const requestBody = await request.json()
        console.log('api order: ', requestBody);

        const response = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/cart/order`, {
            method: 'PUT',
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
            message: 'orden creada',
            data
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Error al guardar el carrito',
            error: error.message,
        }, { status: 500 });
    }
}
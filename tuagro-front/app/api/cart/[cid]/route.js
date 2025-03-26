import { NextResponse } from "next/server";


export async function GET(request,{params}) {
    const { cid } = await params
    console.log('cid api: ',cid);
    
    try {
        const response = await fetch(`http://localhost:8080/cart/${cid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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
        const simplifiedCart = data.products.map(p => ({
            ...p.productId,      
            quantity: p.quantity 
          }))

        return NextResponse.json(JSON.stringify(simplifiedCart), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }

        });
    } catch (error) {
        return NextResponse.json({
            message: 'Error al guardar el carrito',
            error: error.message,
        }, { status: 500 });
    }
}
import { NextResponse } from "next/server";

export async function GET(request){
  {
    try {
        const response = await fetch('http://localhost:8080/products',{cache:'force-cache'});
        if (!response.ok) throw new Error("Error al obtener productos");
        
        const data = await response.json();

        
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error en API /api/products:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to fetch products" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
}

export async function POST(request){
    const newProduct = await request.json()
    console.log('body de put: ',newProduct);
    
    
        try {
            const response = await fetch('http://localhost:8080/products/create',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(newProduct)
            });

            if (!response.ok){ 
                throw new Error("Error al crear producto");
            }
            const data = await response.json();
            return new NextResponse(JSON.stringify(data), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            console.error("Error en API /api/products:", error);
            return new NextResponse(JSON.stringify({ error: "Failed to fetch products" }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    
}
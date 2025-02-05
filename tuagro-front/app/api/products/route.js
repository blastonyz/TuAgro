import { NextResponse } from "next/server";

export async function GET(request){
  {
    try {
        const response = await fetch('http://localhost:8080/products');
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
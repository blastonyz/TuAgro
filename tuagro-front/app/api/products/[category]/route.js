import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const {category} =  await params
    try {
        
        const response = await fetch(`http://localhost:8080/products/${category}`);
        const data = await response.json();

        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
      
        console.error(error);
        return new NextResponse(JSON.stringify({ error: "Failed to fetch data" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
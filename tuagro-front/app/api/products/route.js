import { NextResponse } from "next/server";

export async function GET(request){
    const data = await fetch('http://localhost:8080/').then(response => response.json()).then(data => console.log(data));
    return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
}
import { NextResponse } from "next/server";
export async function GET(request) {
    try {
    
      const authToken = request.cookies.get('authToken')?.value;
  
      const response = await fetch('http://localhost:8080/protected', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `authToken=${authToken}`, // ⬅️ Envía la cookie al backend
        },
      });
  
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
  }
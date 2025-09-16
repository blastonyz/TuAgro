import { NextResponse } from "next/server";

export async function GET(request){
  console.log("api: ",process.env.NEXT_PUBLIC_RENDER_API_URL);
  
    try {
          const data = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/categories`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json' ,
              'Cache-Control': 'max-age=3600', 
              'Pragma': ''
            },
          })

          const response = await data.json();
          if (!data.ok) {
            return NextResponse.json(
              {
            error: "error fetch SS.",
            details: error.message,
          },
          { status: 500 })
        }

          console.log('categories handler: ',response);
          
          return new NextResponse(JSON.stringify(response), {
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
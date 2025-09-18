import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {

    // Si no hay email y password, verificar sesión en la cookie
    const authToken = (await cookies()).get("authToken")?.value;
    console.log('sesion verif tk next/api: ', authToken);

    if (!authToken) {
        return new NextResponse(JSON.stringify({ message: "No autenticado" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    // Enviar token al backend para validar sesión
    const response = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/verify-session`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `authToken=${authToken}`
        },
        credentials: "include",
    });


    if (!response.ok) {
        return new NextResponse(JSON.stringify({ message: "Sesión no válida" }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    }

    const data = await response.json();
    console.log('verify resp: ', data);

    // Crear una nueva respuesta con los datos del usuario
    const nextResponse = new NextResponse(JSON.stringify({ user: data.user }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });

    // Guardar cookie con el token (si es necesario)
    nextResponse.cookies.set("authToken", authToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    return nextResponse;


}
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {

   const cookieStore = await cookies();
    let authToken = cookieStore.get("authToken")?.value;

    // Si no vino cookie, intento sacar del header Authorization
    if (!authToken) {
        const authHeader = request.headers.get("authorization");
        if (authHeader && authHeader.startsWith("Bearer ")) {
            authToken = authHeader.split(" ")[1];
        }
    }

    console.log("sesion verif tk next/api: ", authToken);

    if (!authToken) {
        return new NextResponse(JSON.stringify({ message: "No autenticado" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    // Enviar token al backend para validar sesión
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_RENDER_API_URL}/verify-session`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`, // <- pasamos siempre por header
            },
        }
    );

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

    if (cookieStore.get("authToken")) {
        nextResponse.cookies.set("authToken", authToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
    }
    return nextResponse;


}
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {

    const authHeader = request.headers.get("authorization");
    console.log("authHeader:", authHeader);

    // O si querés seguir con cookie
    const authToken = (await cookies()).get("authToken")?.value;
    console.log("sesion verif tk next/api: ", authToken);

    if (!authToken && !authHeader) {
        return new NextResponse(
            JSON.stringify({ message: "No autenticado" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }

    // Enviar token al backend para validar sesión
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_RENDER_API_URL}/verify-session`,
        {
            method: "GET",
             headers: {
                "Content-Type": "application/json",
                ...(authToken
                    ? { Cookie: `authToken=${authToken}` }
                    : { Authorization: authHeader }),
            },
            credentials: "include",
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

    if (authToken) {
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
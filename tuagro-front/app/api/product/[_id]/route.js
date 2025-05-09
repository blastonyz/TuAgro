import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { _id } = await params
    console.log('id: ',_id);
    
    try {
        const response = await fetch(`http://localhost:8080/product/${_id}`)
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

export async function PUT(request,{params}){
    //actualizar
    const { _id } = await params
    console.log('id: ',_id);
    const requestBody = await request.json();
    try {
        const response = await fetch(`http://localhost:8080/product/edit/${_id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(requestBody),
            cache: 'no-store'
        })
        if(!response.ok){
            throw new Error('error en la api update put')
        }
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

export async function DELETE(request,{params}){
    const { _id } = await params
    console.log('id: ',_id);
    
    try {
        const response = await fetch(`http://localhost:8080/product/${_id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(!response.ok){
            throw new Error('error en la api delete')
        }
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
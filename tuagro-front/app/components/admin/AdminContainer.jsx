'use client'
import { useState,useEffect } from "react"
import ProductsTable from "./ProductsTable"

const AdminContainer = () => {
    const [products,setProducts] = useState([])

    const fetchProducts = async () =>{
        try {
            const response  = await fetch('/api/products')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error("Error fetching products:", error);
            
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <main className="adminMain">
        <ProductsTable products={products}/>
    </main>
  )
}

export  default AdminContainer
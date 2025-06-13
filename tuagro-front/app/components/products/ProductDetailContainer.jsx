'use client'
import ProductDetails from "./ProductDetails";
import { useState,useEffect } from "react"

const ProductDetailContainer = ({id}) =>{
    console.log('id link: ',id);
    
    const [productSelected, setProductSelected] = useState({})

    useEffect(()=>{
        const fetchProduct = async () => {
            try {
                    const response = await fetch(`/api/product/${id}`,{cache: 'no-store'})
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log('context fetch data:', data);
                    setProductSelected(data)
            } catch (error) {
                console.error("Error fetching product detail:", error);
            }
        }
        fetchProduct()
    },[id])

    return(
        <div>
           <ProductDetails productSelected={productSelected}/>
        </div>
    )
}

export default ProductDetailContainer
'use client'
import { useState, useEffect } from "react"
import ProductsCards from "./ProductsCards"
import './category.products.css'
import SectionTitle from "../ui/title/SectionTitle"

const CategoryProducts = ({ category }) => {
    console.log('category',category);
    
    const [productsFiltered, setProductsFiltered] = useState([])

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            const endpoint = (category === "all") ?
             "/api/products"
            : 
            `/api/products/${category}`
            console.log('endpo: ',endpoint);
            
            try {
                const response = await fetch(endpoint,{ cache: "no-store" });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('context fetch data:', data);
                setProductsFiltered(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchCategoryProducts()
    }, [category])

    return (
        <div className="mainProducts">
          
                <SectionTitle 
                text={category !== "all" ? productsFiltered[0]?.category : 'Productos'}
                size={26}
                />
            
           
        <ProductsCards products={productsFiltered}/>
        </div>
    )
}

export default CategoryProducts
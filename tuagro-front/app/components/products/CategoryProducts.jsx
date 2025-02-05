'use client'
import { useState, useEffect } from "react"

const CategoryProducts = ({ category }) => {
    const [productsFiltered, setProductsFiltered] = useState([])

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            const endpoint = (category === "all") ?
             "/api/products"
            : 
            `/api/products/${category}`
            console.log('endpo: ',endpoint);
            
            try {
                const response = await fetch(endpoint);
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
        <div>
        { productsFiltered.map((prods,index) => (
                    <div key={index}>
                    <h3>{prods.title}</h3>
                    <h3>{prods.price}</h3>
                    <h3>{prods.shortDescription}</h3>
                    <h3>{prods.brand}</h3>
                    </div>
                )
            )
        }
        </div>
    )
}

export default CategoryProducts
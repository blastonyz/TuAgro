'use client'
import { useState, useEffect, useLayoutEffect } from "react"
import ProductsCards from "./ProductsCards"
import './category.products.css'
import SectionTitle from "../ui/title/SectionTitle"
import SearchBar from "../search/SearchBar"

const CategoryProducts = ({ category }) => {

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, [category]);

    const [allProducts, setAllProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    useEffect(() => {

        const fetchCategoryProducts = async () => {

            const endpoint = (category === "all") ?
                "/api/products"
                :
                `/api/products/${category}`
            console.log('endpo: ', endpoint);

            try {
                const response = await fetch(endpoint, { cache: "no-store" });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('context fetch data:', data);
                setAllProducts(data)
                setProductsFiltered(data)
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchCategoryProducts()

    }, [category])

    const handleSearch = (term) => {
    if (!term) {
      setProductsFiltered(allProducts)
      return
    }

    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase()) ||
      product.brand.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase())
    )

    setProductsFiltered(filtered)
  }


    return (
        <div className="mainProducts">

            <SectionTitle
                text={category !== "all" ? productsFiltered[0]?.category : 'Productos'}
                size={26}
            />

            <SearchBar onSearch={handleSearch}/>
            <ProductsCards products={productsFiltered} />
        </div>
    )
}

export default CategoryProducts
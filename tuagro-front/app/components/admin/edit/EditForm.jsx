'use client'
import { useState } from "react";
import Button from "../../ui/button/Button";
import CustomInputs from "../../ui/form/CustomInputs"

const EditForm = ({ product }) => {
    const [productUpdate, setProductUpdate] = useState({
        brand: product.brand || "",
        category: product.category || "",
        image: product.image || "",
        longDescription: product.longDescription || "",
        price: product.price || "",
        shortDescription: product.shortDescription || "",
        stock: product.stock || "",
        tags: product.tags || "",
        title: product.title || ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProductUpdate((prev) => ({
          ...prev,
          [name]: value
        }))
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('body: ',productUpdate);
      
            try {
                const response = await fetch(`http://localhost:8080/product/edit/${product._id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(productUpdate)
                })
                if(!response.ok){
                    throw new Error('error en la api update put')
                }
                const data = await response.json();
                console.log('respuesta: ',data);
                
            } catch (error) {
                console.error(error);
            }
    }

    return (
        <form className="editForm">
            <CustomInputs
                onChange={handleChange}
                type={"text"}
                name={"title"}
                placeholder={"Título"}
                value={productUpdate.title}
            />

            <CustomInputs
                onChange={handleChange}
                type={"text"}
                name={"brand"}
                placeholder={"Marca"}
                value={productUpdate.brand}
            />

            <CustomInputs
                onChange={handleChange}
                type={"text"}
                name={"category"}
                placeholder = {"Categoría"}
                value = {productUpdate.category }
            />
            
            <CustomInputs
              onChange={handleChange}
              type={"number"}
              name={"price"}
              placeholder={"Precio"}
              value={productUpdate.price}
              />

            <CustomInputs
              onChange={handleChange}
              type={"number"}
              name={"stock"}
              placeholder={"Stock"}
              value={productUpdate.stock}
              />

            <textarea
              onChange={handleChange}
              name={"shortDescription"}
              placeholder={"Descripcion Corta"}
              value={productUpdate.shortDescription} 
              />

            <textarea
              onChange={handleChange}
              name={"longDescription"}
              placeholder={"Descripcion Corta"}
              value={productUpdate.longDescription} 
              />
    
           
            <Button type="submit" onClick={handleSubmit} text={'Actualizar'} />
        </form>
    )
}

export default EditForm;
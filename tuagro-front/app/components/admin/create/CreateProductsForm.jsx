'use client'
import './create.product.css'
import { CldUploadWidget } from 'next-cloudinary'
import { useState, useRef } from "react"
import CustomInputs from "../../ui/form/CustomInputs"
import Button from "../../ui/button/Button"

const CreateProductsForm = () => {

    const [products, setProducts] = useState({
        brand: '',
        category: '',
        image: '',
        longDescription: '',
        price: '',
        shortDescription: '',
        stock: '',
        title: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProducts((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products),
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error('error al crear prodcuto')
        }
        const data = await response.json()
        console.log('data: ', data);

    }

    const handleSuccess = (result) => {
        // Esto se ejecuta cuando sube exitosamente
        console.log('Resultado de Cloudinary:', result)

        const imageUrl = result?.info?.secure_url
        if (imageUrl) {
            setProducts(prev => ({
                ...prev,
                image: imageUrl
            }))
        }
    }

    

    return (
        <div className="createMain">
            <form className='createForm'>
                <CustomInputs
                    type={'text'}
                    name={'brand'}
                    value={products.brand}
                    onChange={handleChange}
                    placeholder={'Marca'}
                />
                <CustomInputs
                    type={'text'}
                    name={'category'}
                    value={products.category}
                    onChange={handleChange}
                    placeholder={'Categoria'}
                />
                <CustomInputs
                    type={'text'}
                    name={'longDescription'}
                    value={products.longDescription}
                    onChange={handleChange}
                    placeholder={'Descripcion Larga'}
                />
                <CustomInputs
                    type={'number'}
                    name={'price'}
                    value={products.price}
                    onChange={handleChange}
                    placeholder={'Precio'}
                />
                <CustomInputs
                    type={'text'}
                    name={'shortDescription'}
                    value={products.shortDescription}
                    onChange={handleChange}
                    placeholder={'Descripcion Corta'}
                />
                <CustomInputs
                    type={'number'}
                    name={'stock'}
                    value={products.stock}
                    onChange={handleChange}
                    placeholder={'Stock'}
                />
                <CustomInputs
                    type={'text'}
                    name={'title'}
                    value={products.title}
                    onChange={handleChange}
                    placeholder={'Titulo'}
                />

                <Button type={"submit"} text={'Crear'} onClick={handleSubmit} />
            </form>
         
            <CldUploadWidget
                uploadPreset="ProductImages"
                onSuccess={handleSuccess}
                options={{ multiple: false }}
            >
                {({ open }) => (
                    <Button type="button" onClick={() => open()} text={'Subir Imagen'}>
                        Subir Imagen
                    </Button>
                )}
            </CldUploadWidget>


            {products.image && (
                <img src={products.image} alt="Vista previa" width={200} />
            )}
        </div>
    )
}

export default CreateProductsForm
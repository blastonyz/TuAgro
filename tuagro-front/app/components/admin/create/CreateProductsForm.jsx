'use client'
import './create.product.css'
import { CldUploadWidget } from 'next-cloudinary'
import { useState } from "react"
import SectionTitle from '../../ui/title/SectionTitle'
import CustomInputs from "../../ui/form/CustomInputs"
import { useCategoriesContext } from '../../context/CategoriesContext'
import { toast, ToastContainer } from 'react-toastify'
import Button from "../../ui/button/Button"

const CreateProductsForm = () => {
    const { categories } = useCategoriesContext()

    const inputCategories = categories.map(cat => cat.title)
    console.log('categories en CreateProductsForm:', inputCategories)

    const initialState = {
        brand: '',
        category: '',
        image: '',
        longDescription: '',
        price: '',
        shortDescription: '',
        stock: '',
        title: ''
    }

    const [products, setProducts] = useState(initialState)

    const [uploadedImage, setUploadedImage] = useState(false)

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
            toast.error('Hubo un error al crear el producto ❌')
            console.error(error)
        }
        const data = await response.json()
        toast.success('Producto Agregado!')
        setProducts(initialState)
    }

    const handleSuccess = (result) => {

        console.log('Resultado de Cloudinary:', result)

        const imageUrl = result?.info?.secure_url
        if (imageUrl) {
            setProducts(prev => ({
                ...prev,
                image: imageUrl
            }))
            setUploadedImage(true)
        }
    }



    return (
        <div className="createMain">

            <SectionTitle text={'Crear Producto'} />

            <form className='createForm'>
                <label htmlFor='title' className='labels'>
                    Título
                </label>
                <CustomInputs
                    type={'text'}
                    name={'title'}
                    value={products.title}
                    onChange={handleChange}
                    placeholder={'Titulo'}
                    id={'title'}
                />
                <label htmlFor='brand' className='labels'>
                    Marca
                </label>
                <CustomInputs
                    type={'text'}
                    name={'brand'}
                    value={products.brand}
                    onChange={handleChange}
                    placeholder={'Marca'}
                    id={'brand'}
                />
                <label htmlFor='category' className='labels'>
                    Categoría
                </label>
              <CustomInputs
                    type="select"
                    name="category"
                    value={products.category}
                    onChange={handleChange}
                    options={inputCategories}
                    required={true}
                />

                <label htmlFor='longDescription' className='labels'>
                    Descripción larga
                </label>
                <CustomInputs
                    type={'text'}
                    name={'longDescription'}
                    value={products.longDescription}
                    onChange={handleChange}
                    placeholder={'Descripcion Larga'}
                    id={'longDescription'}
                />
                <label htmlFor='price' className='labels'>
                    Precio
                </label>
                <CustomInputs
                    type={'number'}
                    name={'price'}
                    value={products.price}
                    onChange={handleChange}
                    placeholder={'Precio'}
                    id={'price'}
                />
                <label htmlFor='shortDescription' className='labels'>
                    Descripción corta
                </label>
                <CustomInputs
                    type={'text'}
                    name={'shortDescription'}
                    value={products.shortDescription}
                    onChange={handleChange}
                    placeholder={'Descripcion Corta'}
                    id={'shortDescription'}
                />
                <label htmlFor='stock' className='labels'>
                    Stock
                </label>
                <CustomInputs
                    type={'number'}
                    name={'stock'}
                    value={products.stock}
                    onChange={handleChange}
                    placeholder={'Stock'}
                    id={'stock'}
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

            <div className='upImageContainer'>

                {!uploadedImage ?
                    <p>Todavia no suviste la imagen</p>
                    :
                    (
                        <img src={products.image || null} alt="Vista previa" width={200} height={200} />
                    )

                }
            </div>

            <ToastContainer autoClose={1200} />
        </div>
    )
}

export default CreateProductsForm
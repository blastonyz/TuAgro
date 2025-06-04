'use client'
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Button from "../../ui/button/Button";
import { ToastContainer, toast } from "react-toastify";
import CustomInputs from "../../ui/form/CustomInputs"
import SectionTitle from "../../ui/title/SectionTitle";

const EditForm = ({ product }) => {
    const initialState = {
         brand: product.brand || "",
        category: product.category || "",
        image: product.image || "",
        longDescription: product.longDescription || "",
        price: product.price || "",
        shortDescription: product.shortDescription || "",
        stock: product.stock || "",
        tags: product.tags || "",
        title: product.title || ""
    }

    const [productUpdate, setProductUpdate] = useState(initialState)

       const [uploadedImage, setUploadedImage] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setProductUpdate((prev) => ({
            ...prev,
            [name]: value
        }))
    }

     const handleSuccess = (result) => {

        console.log('Resultado de Cloudinary:', result)

        const imageUrl = result?.info?.secure_url
        if (imageUrl) {
            setProductUpdate(prev => ({
                ...prev,
                image: imageUrl
            }))
            setUploadedImage(imageUrl)
           
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('body: ', productUpdate);

        try {
            const response = await fetch(`http://localhost:8080/product/edit/${product._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productUpdate)
            })
            if (!response.ok) {
                throw new Error('error en la api update put')
            }
            const data = await response.json();
            console.log('respuesta: ', data);
            toast.success('Producto Actualizado')
            setProductUpdate(initialState)
        } catch (error) {
            toast.error('Fallo la Actualizacion del Producto')
            console.error(error);
        }
    }

    const titleShort = product.title.slice(0, 12)

    console.log('titulo: ', titleShort);

    return (
        <div className="editContainer">

            <div className="titleContianer">
                <SectionTitle text={`Editando ${titleShort}`} />
            </div>

            <form className="editForm">
             <div className="inputsContainer">
                  <div className="leftForm">
                        <label htmlFor='title' className='labels'>
                            Título
                        </label>
                        <CustomInputs
                            onChange={handleChange}
                            type={"text"}
                            name={"title"}
                            placeholder={"Título"}
                            value={productUpdate.title}
                            id={'title'}
                        />
                        <label htmlFor='brand' className='labels'>
                            Marca
                        </label>
                        <CustomInputs
                            onChange={handleChange}
                            type={"text"}
                            name={"brand"}
                            placeholder={"Marca"}
                            value={productUpdate.brand}
                            id={'brand'}
                        />
                        <label htmlFor='category' className='labels'>
                            Categoría
                        </label>
                        <CustomInputs
                            onChange={handleChange}
                            type={"text"}
                            name={"category"}
                            placeholder={"Categoría"}
                            value={productUpdate.category}
                            id={'category'}
                        />
                        <label htmlFor='price' className='labels'>
                            Precio
                        </label>
                        <CustomInputs
                            onChange={handleChange}
                            type={"number"}
                            name={"price"}
                            placeholder={"Precio"}
                            value={productUpdate.price}
                            id={'price'}
                        />
                        <label htmlFor='stock' className='labels'>
                            Stock
                        </label>
                        <CustomInputs
                            onChange={handleChange}
                            type={"number"}
                            name={"stock"}
                            placeholder={"Stock"}
                            value={productUpdate.stock}
                            id={'stock'}
                        />
                  </div>
                <div className="rightForm">
                        <label htmlFor='shortDescription' className='labels'>
                            Descripción corta
                        </label>
                        <textarea
                            onChange={handleChange}
                            name={"shortDescription"}
                            placeholder={productUpdate.shortDescription}
                            value={productUpdate.shortDescription}
                            id={'shortDescription'}
                            className="areaText"
                        />
                        <label htmlFor='longDescription' className='labels'>
                            Descripción Larga
                        </label>
                        <textarea
                            onChange={handleChange}
                            name={"longDescription"}
                            placeholder={productUpdate.longDescription}
                            value={productUpdate.longDescription}
                            id={'longDescription'}
                            className="areaText"
                        />
        
                </div>
                    <div className="imageSection">
                        <h3>Imagen</h3>
                        <img src={!uploadedImage ? productUpdate.image : uploadedImage} alt={`imagen de ${productUpdate.title}`} className="editImage"/>
                    </div>
             </div>
               <div className="editButtons"> 
                <Button type="submit" onClick={handleSubmit} text={'Actualizar'} />
                  <CldUploadWidget
                uploadPreset="ProductImages"
                onSuccess={handleSuccess}
                options={{ multiple: false }}
            >
                {({ open }) => (
                    <Button type="button" onClick={() => open()} text={'Nueva Imagen'}>
                        Subir Imagen
                    </Button>
                )}
            </CldUploadWidget>
                </div>
            </form>
                <ToastContainer autoClose={1200}/>
        </div>
    )
}

export default EditForm;
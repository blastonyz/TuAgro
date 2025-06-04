'use client'
import { CldImage } from "next-cloudinary"
import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { SectionLink } from "../ui/link/SectionLink"
import SearchBar from "../search/SearchBar"
import Garbage from "../ui/icons/Garbage"
import './admin.css'


const ProductsTable = () => {

    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products',{cache:'reload'})
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
            setProducts(data)
             setProductsFiltered(data)
        } catch (error) {
            console.error("Error fetching products:", error);

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const deleteProduct = async (_id) => {
        const response = await fetch(`/api/product/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        })
        if (!response.ok) {
            toast.error('Error al Borrar Producto')
            throw new Error('error al borrar producto')
        }
        const data = await response.json()
        toast.success('Producto borrado con Exito')
        fetchProducts()
        console.log('respuesta borrar: ', data);

    }

    const handleSearch = (term) => {
    if (!term) {
      setProductsFiltered(products)
      return
    }

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(term.toLowerCase()) ||
      product.brand.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase())
    )

    setProductsFiltered(filtered)
  }

    return (
        <div className="adminMain">
            <SearchBar onSearch={handleSearch}/>
            <div className="tableNav">
                <SectionLink href={'auth/create'} text={'Crear Producto'} />

                <SectionLink href={'auth/contact'} text={'Consultas'} />

                <SectionLink href={'auth/orders'} text={'Pedidos'} />

                <SectionLink href={'auth/carts'} text={'Carritos'} />

            </div>
            <table className="mainTable">
                <thead>
                    <tr className="mainTableHeader">
                        <th scope="col" className="tableHeader">Producto</th>
                        <th scope="col" className="tableHeader">Descripcion</th>
                        <th scope="col" className="tableHeader">Precio</th>
                        <th scope="col" className="tableHeader">Categoria</th>
                        <th scope="col" className="tableHeader">Stock</th>
                        <th scope="col" className="tableHeader">Imagen</th>
                        <th scope="col" className="tableHeader">Acciones</th>
                    </tr>

                </thead>
                <tbody className="tableBody">
                    {
                       (productsFiltered.length > 0 ? productsFiltered : products).map((product) => (
                            <tr key={product._id}>
                                <td className="tableCell nameCell" data-label="Producto">{product.title}</td>
                                <td className="tableCell" data-label="Descripcion">
                                    <div className="actions">
                                        <button>larga</button>
                                        <button>corta</button>
                                    </div>
                                </td>
                                <td className="tableCell" data-label="Precio">$ {product.price}</td>
                                <td className="tableCell" data-label="Categoria">{product.category}</td>
                                <td className="tableCell" data-label="Stock">{product.stock}</td>

                                <td className="tableCell" data-label="Imagen">

                                    <CldImage
                                        src={product.image}
                                        alt={product.title}
                                        width={80}
                                        height={80}
                                    />
                                </td>
                                <td className="tableCell" data-label="Acciones">
                                    <div className="actions">
                                        <SectionLink
                                            href={`auth/edit/${product._id}`}
                                            text={'Editar'}
                                        />

                                        <button onClick={() => deleteProduct(product._id)} >
                                            <Garbage size={'24px'} color={'red'} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>

            </table>

            <ToastContainer />
        </div>
    )
}

export default ProductsTable
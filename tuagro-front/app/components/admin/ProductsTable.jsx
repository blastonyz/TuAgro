'use client'
import { CldImage } from "next-cloudinary"
import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { SectionLink } from "../ui/link/SectionLink"
import SearchBar from "../search/SearchBar"
import Garbage from "../ui/icons/Garbage"
import './admin.css'


const ProductsTable = () => {

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([])
    const [showShortDescription, setShowShortDescription] = useState(null)
    const [showLongDescription, setShowLongDescription] = useState(null)
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const prodLong = products.find(prod => prod._id === showLongDescription);
    const prodShort = products.find(prod => prod._id === showShortDescription);

    const openLongDescription = (id, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setModalPosition({ top: window.scrollY, left: rect.left + window.scrollX });
        setShowLongDescription(id);
    };

    const openShortDescription = (id, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setModalPosition({ top: window.scrollY, left: rect.left + window.scrollX });
        setShowShortDescription(id);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const modalStyle = windowWidth < 768
        ? {
            position: 'absolute',
            top: modalPosition.top,
            left: 16,
            right: 16,
            width: 'auto',
            maxWidth: 'calc(100vw - 32px)',
            zIndex: 1000,
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }
        : {
            position: 'absolute',
            top: modalPosition.top,
            left: modalPosition.left,
            zIndex: 1000,
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        }

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products', {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store'
                }
            })
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
            <SearchBar onSearch={handleSearch} />
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
                                        <button className="showButtons" onClick={(e) => openLongDescription(product._id, e)}>larga</button>
                                        <button className="showButtons" onClick={(e) => openShortDescription(product._id, e)}>corta</button>
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


            {showLongDescription && (

                <div className="modalContainer" style={modalStyle}>
                    <h2>{prodLong.title}</h2>
                    <p>{prodLong.longDescription}</p>
                    <button onClick={() => setShowLongDescription(null)}>Cerrar</button>
                </div>
            )
            }

            {showShortDescription && (

                <div className="modalContainer" style={modalStyle}>
                    <h2>{prodShort.title}</h2>
                    <p>{prodShort.shortDescription}</p>
                    <button onClick={() => setShowShortDescription(null)}>Cerrar</button>
                </div>
            )
            }

            <ToastContainer />
        </div>
    )
}

export default ProductsTable
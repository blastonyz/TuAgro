'use client'
import { CldImage } from "next-cloudinary"
import Link from "next/link"
import SectionTitle from "../ui/title/SectionTitle"
import Garbage from "../ui/icons/Garbage"
import './admin.css'

const ProductsTable = ({products}) => {

   const deleteProduct = async (_id)=> {
    const response = await fetch(`/api/product/${_id}`,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json'
        },
        credentials:'include'
    })
    if(!response.ok){
        throw new Error('error al borrar producto')
    }
    const data = await response.json()
    console.log('respuesta borrar: ',data);
    
   } 

  return (
    <div className="adminMain">

           <div className="titleCont">
                <SectionTitle text={'Panel de Administracion'} size={26}/>
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
                            products.map((product) =>(
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
                                            <button className="bg-green-400">
                                                <Link href={`auth/edit/${product._id}`}>editar</Link>
                                            </button>
    
                                            <button onClick={()=>deleteProduct(product._id)} >
                                                <Garbage size={'24px'} color={'red'}/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))

                        }    
                    </tbody>   
 
            </table>


            <div className="tableFooter">
                <Link href={'auth/create'}>Crear
                </Link>
            </div>

            </div>
  )
}

export  default ProductsTable
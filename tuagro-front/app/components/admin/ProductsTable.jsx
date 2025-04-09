'use client'
import { CldImage } from "next-cloudinary"
import Link from "next/link"
import SectionTitle from "../ui/title/SectionTitle"
import Garbage from "../ui/icons/Garbage"

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
            <SectionTitle text={'Panel de Administracion'} size={26}/>

            <table className="w-full text-s text-left text-gray-600">
                <thead>
                    <tr>
                            <th scope="col" className="tableHeader">Nombre</th>
                            <th scope="col" className="tableHeader">Precio</th>
                            <th scope="col" className="tableHeader">Categoria</th>
                            <th scope="col" className="tableHeader">Stock</th>
                          
                            <th scope="col" className="tableHeader">Id</th>
                            <th scope="col" className="tableHeader">Imagen</th>
                            <th scope="col" className="tableHeader">Acciones</th>
                    </tr>

                </thead> 
                    <tbody>
                        {
                            products.map((product) =>(
                                <tr key={product._id}>
                                    <td className="p-2">{product.title}</td>
                                    <td className="p-2">$ {product.price}</td>
                                    <td className="p-2">{product.category}</td>
                                    <td className="p-2">{product.stock}</td>
                                    <td className="p-2">{product.description}</td>
                                    <td className="p-2">{product._id}</td>
                                    <td className="p-2">
                                        
                                     <CldImage
                                     src={product.image}
                                     alt={product.title}
                                     width={80}
                                     height={80}
                                     />
                                        </td>
                                    <td className="p-2">
                                        <button className="bg-green-400">
                                            <Link href={`auth/edit/${product._id}`}>editar</Link>
                                        </button>

                                        <button onClick={()=>deleteProduct(product._id)} >
                                            <Garbage size={'24px'} color={'red'}/>
                                        </button>
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
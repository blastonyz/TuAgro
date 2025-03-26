'use client'
import { CldImage } from "next-cloudinary"
import Link from "next/link"
import SectionTitle from "../ui/title/SectionTitle"
const ProductsTable = ({products}) => {
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
                            <th scope="col" className="tableHeader">Descripcion</th>
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
                                    <td className="p-2">{product.categoria}</td>
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
                                            <Link href={`auth/admin/edit/${product._id}`}>editar</Link>
                                        </button>
                                    </td>
                                </tr>
                            ))

                        }    
                    </tbody>   
 
            </table>
            </div>
  )
}

export  default ProductsTable
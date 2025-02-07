'use client'
import { useCategoriesContext } from '../context/CategoriesContext'
import { CldImage } from 'next-cloudinary'
import './categories.css'
import Link from 'next/link'

 const CategorieCard = () => {
    const { loading, categories } = useCategoriesContext();

  return (
    <div className='categoriesContainer'>
    {categories && categories.map(cat => {
        return (

          <div key={cat._id} className='categorieCard'>

         <Link href={`/productos/${cat.title}`}>
            { cat.image?
             <CldImage
                width="300"
                height="300"
                src={cat.image}
                alt="Description of my image"
                className='categorieImage'
              />
            :null
            }
         </Link>

          </div>
        )
      })
    }
    </div>
    )

}


export default CategorieCard

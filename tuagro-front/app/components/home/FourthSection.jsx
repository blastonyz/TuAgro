'use client'
import { useCategoriesContext } from "../context/CategoriesContext";
import { CldImage } from "next-cloudinary";



const FourthSection = () => {
  const { loading, categories } = useCategoriesContext();


  return (
    <div>
      {categories && categories.map(cat => {
        return (

          <div key={cat._id}><h3>{cat.title}</h3>

          { cat.image?
           <CldImage
              width="300"
              height="300"
              src={cat.image}
              alt="Description of my image"
            />
          :null
          }
          </div>
        )
      })}

    </div>
  );
}

export default FourthSection
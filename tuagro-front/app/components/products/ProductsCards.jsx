
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import './products.cards.css'

 const ProductsCards = ({products}) => {
  console.log('products:', products);
  
  return (
    <div className="productsList">
      
      { products.map((prods,index) => (
          <div key={index} className="productCard">
          <Link href={`/producto/${prods._id}`} className="productsLinks">
          <h3>{prods.title}</h3>
          <h3>{prods.price}</h3>
           { prods.image?
              <CldImage
                          width="250"
                          height="250"
                          src={prods.image}
                          alt="Description of my image"
                          className='categorieImage'
                        />
          :
          null            
                      }
          <h3>{prods.shortDescription}</h3>
          <h3>{prods.brand}</h3>
          </Link>
          </div>
      )
  )
  }
    </div>

  )
}

export default ProductsCards;


import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { SectionLink } from "../ui/link/SectionLink";
import './products.cards.css'

const ProductsCards = ({ products }) => {
  console.log('products:', products);

  return (
    <div className="productsList">

      {products.map((prods, index) => (
        <div key={index} className="productCard">

          <h3 className="productTitle">{prods.title.length > 21 ? prods.title.slice(0, 21) + '...' : prods.title}</h3>
          <h2 className="brand">{prods.brand}</h2>

          {prods.image ?
            <CldImage
              width="250"
              height="250"
              src={prods.image}
              alt="Description of my image"
              className='productImage'
            />
            :
            null
          }

          <div className="priceContainer">
            <p className="precio">Precio</p>

            <div className="priceBox">
              <h4 className="price">U$D {prods.price}
              </h4>
            </div>
          </div>

       
            <SectionLink 
            href={`/producto/${prods._id}`} 
            text={'Ver Mas'}
            size={18}
            /> 
         
        </div>
      )
      )
      }
    </div>

  )
}

export default ProductsCards;

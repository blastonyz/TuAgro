import { CldImage } from "next-cloudinary";
import { SectionLink } from "../ui/link/SectionLink";
import './products.cards.css'

const ProductsCards = ({ products }) => {
  console.log('products:', products);

  return (
    <div className="productsList">

      {products.map((prods, index) => (
        <div key={index} className="productCard">
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

          <div className="brandContainer">
            <h3 className="productTitle">{prods.title.length > 21 ? prods.title.slice(0, 21) + '...' : prods.title}</h3>
            <h2 className="brand">{prods.brand}</h2>
          </div>

          <div className="categoryContainer">
            <h4 className="productTitle">{prods.category}</h4>
            <div className="sizes">
              {
              prods && prods.size.map((s, i) => (
                <span key={i} className="size">
                  <p className="sizeTag"> {s} lts </p>
                </span>
              ))
            }
            </div>
            
          </div>

          <div className="linkCard">
            <SectionLink
              href={`/producto/${prods._id}`}
              text={'Ver Mas'}
              size={18}
            />

          </div>

        </div>
      )
      )
      }
    </div>

  )
}

export default ProductsCards;

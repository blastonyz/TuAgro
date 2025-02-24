import { CldImage } from "next-cloudinary"
import './product.details.css'
import AddCart from "../ui/addcart/AddCart"

const ProductDetails = ({ productSelected }) => {

  return (
    <div className="productDetailsMain">

      <div className="prodData">
   
        <div className="dataContainer">
          <h2>   {productSelected.brand}</h2>
          <h3>{productSelected.title}</h3>
          <h4>{productSelected.price}</h4>
          <h5>{productSelected.category}</h5>
          <AddCart item={productSelected}/>
          
        </div>


        <div className="imageContainer">
          {productSelected.image ? <CldImage
            width="350"
            height="350"
            src={productSelected.image}
            alt="Description of my image"
            className='productDetailImage'
          />
            :
            null
          }
        </div>

      </div >

      <div className="descriptionContainer">
        <p>{productSelected.shortDecription}</p>
        <p>{productSelected.longDescription}</p>
      </div>
    </div>
  )
}

export default ProductDetails
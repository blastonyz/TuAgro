import { CldImage } from "next-cloudinary"
import './product.details.css'
import AddCart from "../addcart/AddCart"

const ProductDetails = ({ productSelected }) => {

  return (
    <div className="productDetailsMain">
      <div className="detailsContainer">
        <div className="top">
          <div className="imageContainer">
            {productSelected.image ? <CldImage
              width="350"
              height="350"
              priority="true"
              src={productSelected.image}
              alt="Description of my image"
              className='productDetailImage'
            />
              :
              null
            }
          </div>
          <div className="prodData">

            <div className="dataContainer">
              <h3 className="detailCat">
                {productSelected.category}</h3>
              <h2 className="detailTitle">
                {productSelected.title}
              </h2>

              <div className="priceCont">
                <h4 className="priceText">Precio:</h4>
                <h4 className="detailPrice">
                  U$D {productSelected.price}
                </h4>
              </div>
              <h5 className="detailBrand">
                {productSelected.brand}
              </h5>
            </div>

          </div >

        </div>

        <div className="controlsContainer">
          <AddCart item={productSelected} />
        </div>
      </div>
      
      <div className="descriptionContainer">
        <h2 className="descriptionTitle">Descripcion del Producto</h2>
        <p>{productSelected.shortDecription}</p>
        <p>{productSelected.longDescription}</p>
      </div>
    </div>
  )
}

export default ProductDetails
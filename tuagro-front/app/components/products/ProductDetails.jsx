import { CldImage } from "next-cloudinary"
import './product.details.css'
import AddCart from "../addcart/AddCart"


const ProductDetails = ({ productSelected }) => {
  return (
    <div className="productDetailsMain">
      <div className="detailsGrid">

        <div className="imageWrapper">
          {productSelected.image && (
            <CldImage
              width="500"
              height="500"
              priority
              src={productSelected.image}
              alt={productSelected.title}
              className="productImage"
            />
          )}
        </div>

       
        <div className="infoWrapper">
          <p className="breadcrumb">
            Products / {productSelected.category}
          </p>
          <h1 className="productTitle">{productSelected.title}</h1>
          

          <div className="techCard">
            <div>
              <span className="label">Marca</span>
              <p>{productSelected.brand}</p>
            </div>
            <div>
              <span className="label">Categoria</span>
              <p>{productSelected.category}</p>
            </div>
          
          </div>

          <div className="descriptionBlock">
            <h2>Descripcion</h2>
            <p>{productSelected.shortDescription}</p>
            <p>{productSelected.longDescription}</p>
          </div>

          <div className="presentationsBlock">
            <h3>Presentaciones</h3>
            <div className="pills">
              {productSelected.size?.map((pres, idx) => (
                <button key={idx} className="pill">
                  {pres} lts
                </button>
              ))} 
            </div>
          </div> 
          <p className="stock">
            <span className="dot"></span> Disponible
          </p>
        </div>

    
        <div className="footerBlock">
         
          <div className="cartBtnContainer">
            <AddCart item={productSelected} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
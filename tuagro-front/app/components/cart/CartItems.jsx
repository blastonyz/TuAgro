import { CldImage } from "next-cloudinary"
import './cart.items.css'

const CartItems = ({ cart, removeFromCart }) => {

    return (
        <div className="cartMainList">
            <h2>Tienes {cart.length} Productos</h2>
            <div className="cartItemsList">

                {cart && cart.map(product => {
                    return (
                        <div key={product._id} className='cartItem'>
                            <div className="cartImageContainer">
                                {product.image ?
                                    <CldImage
                                        width="216"
                                        height="216"
                                        src={product.image}
                                        alt="Description of my image"
                                        className='cartImage'
                                    />
                                    : null
                                }
                            </div>
                            <div className="itemData">

                                <h3 className="itemTitle">{product.title}</h3>
                                <div className="itemsFields">
                                    <h3>precio: </h3>
                                    <h3>{product.price}</h3>
                                </div>
                                <div className="itemsFields">
                                    <h3>stock: </h3>
                                    <h3>{product.stock}</h3>
                                </div>
                                <div className="itemsFields">
                                    <h3>cantidad: </h3>
                                    <h3>{product.quantity}</h3>
                                </div>
                                <div className="itemsFields">
                                    <h4>subtotal: </h4>
                                    <h4>{product.quantity * product.price}</h4>
                                </div>
                            </div>
                            <div className="cartButtons">
                                <button 
                                onClick={() => {
                                    console.log("Eliminando producto:", product._id); 
                                    removeFromCart(product._id);
                                  }}
                                className="removeButton">
                                   Eliminar
                                </button>
                            </div>

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CartItems
'use client'
import { useCartContext } from "../context/CartContext"
import { CldImage } from 'next-cloudinary'

 const CartContainer = () => {
    const {cart,removeFromCart,clearCart} = useCartContext()

    console.log('carrito: ',cart);
    


  return (
    <div className="cartContainer">
           {cart && cart.map(product => {
        return (

          <div key={product._id} className='categorieCard'>

            <h3>{product.title}</h3>
            <h3>precio: {product.price}</h3>
            <h3>stock: {product.stock}</h3>
            <h3>cantidad{product.quantity}</h3>
            <h4>subtotal: </h4>
            { product.image?
             <CldImage
                width="240"
                height="350"
                src={product.image}
                alt="Description of my image"
                className='categorieImage'
              />
            :null
            }
       

          </div>
        )
      })
    }
        </div>
  )
}

export default CartContainer
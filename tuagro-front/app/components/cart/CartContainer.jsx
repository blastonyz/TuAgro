'use client'
import { useCartContext } from "../context/CartContext"
import SectionTitle from "../ui/title/SectionTitle"
import CartItems from "./CartItems"


 const CartContainer = () => {
    const {cart,removeFromCart,clearCart,total,updateQuantity } = useCartContext()

    console.log('carrito: ',cart);
    


  return (
    <div className="cartContainer">
      <SectionTitle text={'Tu Pedido'} size={26} />

         <CartItems 
         cart={cart} 
         removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity}
         />
         <p>{total(cart)}</p>
         <button onClick={()=>clearCart()}>
          Borrar
         </button>
        </div>
  )
}

export default CartContainer
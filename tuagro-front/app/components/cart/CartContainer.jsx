'use client'
import { useCartContext } from "../context/CartContext"
import SectionTitle from "../ui/title/SectionTitle"
import CartItems from "./CartItems"


 const CartContainer = () => {
    const {cart,removeFromCart,clearCart,total} = useCartContext()

    console.log('carrito: ',cart);
    


  return (
    <div className="cartContainer">
      <SectionTitle text={'Tu Pedido'} size={26} />

         <CartItems cart={cart} />
         <p>{total(cart)}</p>
        </div>
  )
}

export default CartContainer
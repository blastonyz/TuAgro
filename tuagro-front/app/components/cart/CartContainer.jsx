'use client'
import { useEffect, useState } from "react"
import { useCartContext } from "../context/CartContext"
import SectionTitle from "../ui/title/SectionTitle"
import CartItems from "./CartItems"


const CartContainer = () => {
  const { cart, removeFromCart, clearCart, total, updateQuantity,saveCart } = useCartContext()

  const [isSave,setIsSave] = useState(false)

  console.log('carrito: ', cart);
  
  useEffect(() => {
    if (cart.length > 0 && !isSave) {
      saveCart(cart).then(() => setIsSave(true)); 
    }
  }, [cart, isSave]); 
  
 

  return (
    <div className="cartContainer">
      <SectionTitle text={'Tu Pedido'} size={26} />

      <CartItems
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      <div className="cartButtonsFooter">
        <p>{total(cart)}</p>
        <button onClick={() => clearCart()}>
          Borrar
        </button>
        <button>Guardar</button>
        <button>Realizar Pedido</button>
      </div>
    </div>
  )
}

export default CartContainer
'use client'
import { useEffect, useState } from "react"
import { useCartContext } from "../context/CartContext"
import { useAuthContext } from "../context/AuthContext"
import SectionTitle from "../ui/title/SectionTitle"
import CartItems from "./CartItems"
import Button from "../ui/button/Button"
import Garbage from "../ui/icons/Garbage"


const CartContainer = () => {
  const { cart, removeFromCart, clearCart, total, updateQuantity, saveCart } = useCartContext()

  const { user } = useAuthContext()


  const [isSave, setIsSave] = useState(false)

  console.log('carrito: ', cart);

  useEffect(() => {
    if (cart.length > 0 && !isSave) {
      saveCart(cart).then(() => setIsSave(true));
    }
  }, [cart, isSave]);

  const makeOrder = async () => {
    const parsedCart = cart.map(prod => {
      return {
        title: prod.title,
        _id: prod._id,
        quantity: prod.quantity,
        subtotal: prod.price * prod.quantity
      }
    })
    const totalPrice = total(cart)
    const order = { products: parsedCart, totalPrice: totalPrice, client: user.email }

    console.log('orden: ', order);

    const response = await fetch('/api/order', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order),
    })
    if (!response.ok) {
      console.error('error al crear la orden')
    }

    const data = await response.json()
    console.log('order data: ', data);

  }

  return (
    <div className="cartContainer">
      <SectionTitle text={'Tu Pedido'} size={26} />

      <CartItems
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />

      <div className="cartButtonsFooter">

        <button onClick={() => clearCart()} className="deleteCart">
         <Garbage size={'24px'} color={'red'}/>
        </button>

        <Button text={'Realizar Pedido'}
          onClick={makeOrder} />

        <h3 className="total">Total: {total(cart)}</h3>

      </div>
    </div>
  )
}

export default CartContainer
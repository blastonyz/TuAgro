'use client'
import { useState, useEffect } from "react"
import SectionTitle from "../../ui/title/SectionTitle"
import './cart.list.css'

const CartList = () => {
    const [cartList, setCartList] = useState([])


    useEffect(() => {
        const getCarts = async () => {
            try {
                const response = await fetch('/api/cart')
                if (!response.ok) {
                    const errorData = await response.json()
                    console.error(errorData)
                }
                const data = await response.json()

                setCartList(data)
                console.log(data);

            } catch (error) {
                console.error(error);

            }

        }
        getCarts()

    }, [])


    return (
        <div className="cartListMain">
            <SectionTitle text={'Carritos de Compras'} />

            <div className="cartList">
                {cartList && cartList.map((cart, i) => {
                    return (
                        <div className="cartCard" key={cart._id}>

                            <p> Cliente: {cart.email}</p>
                            <p>Ultima visita: {cart.updatedAt}</p>
                            <p>Productos</p>
                            {cart.products && cart.products.map(prod => {
                                return (

                                    <div className="cartProductsList" key={`${cart._id}-${prod.productId._id}-${i}`}>
                                        <p>{prod.productId.title}</p>
                                        <p>Precio: {prod.productId.price}</p>
                                        <p >Cantidad: {prod.quantity}</p>
                                        <p>Subtotal: {prod.productId.price * prod.quantity}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartList
'use client'
import { useState, useEffect } from "react"
import SectionTitle from "../../ui/title/SectionTitle"

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
        </div>
    )
}

export default CartList
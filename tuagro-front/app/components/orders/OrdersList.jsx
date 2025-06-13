'use client'
import './order.list.css'
import { useState, useEffect } from "react"
import SectionTitle from "../ui/title/SectionTitle"

const OrdersList = () => {
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        try {
            const response = await fetch('http://localhost:8080/orders')
            if (!response.ok) throw new Error("Error al obtener Pedidos");
            const data = await response.json();
            console.log('respuesta ordenes: ', data);

            setOrders(data)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        getOrders()
    }, [])


    return (
        <div className="ordersMain">
            <SectionTitle text={'Pedidos'} />

            <div className="orderList">

                {orders && orders.map(order => {
                    return (
                        <div className="orderCard"  key={order._id}>
                            <h2>{order.client}</h2>
                            <div>
                                {order.products && order.products.map(prod => {
                                    return (
                                        <div className="orderProductsList" key={prod._id}>
                                            <p>{prod.title}</p>
                                            <p>Cantidad: {prod.quantity}</p>
                                            <p>Subtotal: {prod.subtotal}</p>

                                        </div>
                                    )
                                })

                                }
                            </div>
                            <h4>{order.totalPrice}</h4>

                            <p>Entregado: {order.isDelivered ? 'Si' : 'No'}</p>

                            <p>Total: {order.totalPrice}</p>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default OrdersList
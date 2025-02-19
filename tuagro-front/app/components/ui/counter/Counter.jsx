'use client'
import'./counter.css'
import { useCartContext } from '../../context/CartContext'
import { useState } from "react"

const Counter = ({item}) => {
    const {addToCart} = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        setQuantity(prev => prev+1)  
    }    

    const decrease = () => {
        setQuantity(
            prev => (prev > 0? prev-1 : 0))   
            console.log(quantity);
    }    

    const addHandler = () => {
      
        addToCart({ ...item, quantity })
    }

    return (
        <div className="counterContainer">
            <button onClick={decrease}>-</button>
            <p>{quantity}</p>
            <button onClick={increase}>+</button>
            <button onClick={addHandler} >Agregar</button>
        </div>
    )
}

export default Counter
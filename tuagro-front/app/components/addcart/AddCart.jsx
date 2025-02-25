'use client'
import'./counter.css'
import { useAuthContext } from '../context/AuthContext'
import { useCartContext } from '../context/CartContext'
import { useState } from "react"

const AddCart = ({item}) => {
    const {user} = useAuthContext()
    const {addToCart} = useCartContext()

    const [quantity, setQuantity] = useState(1)
    const [modalOpen,setModalOpen] = useState(false)
    const [addMessage,setAddMessage] = useState(false)
    const increase = () => {
        setQuantity(prev => prev+1)  
    }    

    const decrease = () => {
        setQuantity(
            prev => (prev > 0? prev-1 : 0))   
            console.log(quantity);
    }    

    const addHandler = () => {
        console.log('user: ',user);
        
      if(!user.email){setModalOpen(!modalOpen)

      }else{
       
       addToCart({ ...item, quantity })
       setAddMessage(!addMessage)
      }
    }

    return (
        <>
        {modalOpen? <p>Registrese</p>:null}
        {addMessage? <p>Agregado!</p>:null}
        <div className="counterContainer">
            <button onClick={decrease}>-</button>
            <p>{quantity}</p>
            <button onClick={increase}>+</button>
            <button onClick={addHandler} >Agregar</button>
        </div>
        </>
    )
}

export default AddCart
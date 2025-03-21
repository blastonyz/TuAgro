'use client'
import { useEffect } from "react"

const AddModal = ({ onCloseModal,addMessage,setAddMessage}) => {
 

    useEffect(() => {
     onCloseModal(addMessage) 
    }, [addMessage,setAddMessage])
    

  return (

    <div className="addModal">

       <div className="closeButton"> 
        <button onClick={() => onCloseModal(false)}>X</button>
        </div>
        <p>Producto Agregado!</p>
    </div>
  )
}

export  default AddModal
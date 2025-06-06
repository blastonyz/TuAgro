'use client'
import { useEffect } from "react"


const AddModal = ({ onCloseModal,addMessage,setAddMessage}) => {
 

    useEffect(() => {
     onCloseModal(addMessage) 
    }, [addMessage,setAddMessage])
    

  return (

    <div className="addModal">
       <div className="closeButton"> 
        <button
         onClick={() => onCloseModal(false)}
          className="close">
            <p className="x">X</p>
          </button>
        </div>
       <h3 className="addText">Producto Agregado!</h3>
    </div>
  )
}

export  default AddModal
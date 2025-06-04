'use client'
import { useEffect } from "react"
import SectionTitle from "../title/SectionTitle"

const AddModal = ({ onCloseModal,addMessage,setAddMessage}) => {
 

    useEffect(() => {
     onCloseModal(addMessage) 
    }, [addMessage,setAddMessage])
    

  return (

    <div className="addModal">
       <div className="closeButton"> 
        <button onClick={() => onCloseModal(false)}>X</button>
        </div>
       <SectionTitle text={'Producto Agregado!'}/>
    </div>
  )
}

export  default AddModal
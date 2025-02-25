'use client'
import './contact.form.css'
import { useState } from 'react'
import Button from '../ui/button/Button'
import SectionTitle from '../ui/title/SectionTitle'

const ContactForm = () => {
    const [data,setData] = useState({
        firstName:"",
        email:"",
        phone:"",
        consult:""
    })

    const handleContact = (e) => {
      const{name,value} = e.target;
        setData({
            ...data,
            [name] : value
        })
        console.log(data);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
 
        <div className="contactContainer">
            <SectionTitle text={'Contactanos'} size={26}/>
          <form className="genericForm">
                <input onChange={handleContact} type="text" name="firstName" placeholder="Nombre" value={data.firstName} className='inputsFields'/>
                <input onChange={handleContact} type="email" name="email" placeholder="E-mail" value={data.email} className='inputsFields'/>
                <input onChange={handleContact} type="number" name="phone" placeholder="Telefono" value={data.phone} className='inputsFields'/>
                <textarea onChange={handleContact} name="consult" value={data.consult} className='inputsArea' placeholder='Dejanos tu Consulta'></textarea>
                <Button text={'Enviar'} type={'submit'} />
                
          </form>

        </div>
        

  )
}

export  default ContactForm
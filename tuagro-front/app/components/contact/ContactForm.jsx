'use client'
import './contact.form.css'
import { useState } from 'react'
import FormContainer from '../ui/form/FormContainer'
import CustomInputs from '../ui/form/CustomInputs'
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
          <FormContainer >
                <CustomInputs
                 onChange={handleContact}
                  type={"text"} 
                  name={"firstName" }
                  placeholder={"Nombre"}
                   value={data.firstName} />

                <CustomInputs
                 onChange={handleContact} type={"email"} 
                 name={"email"} placeholder={"E-mail"} 
                 value={data.email} />

                <CustomInputs 
                onChange={handleContact} type={"number"} 
                name={"phone"} placeholder={"Telefono"} 
                value={data.phone} />

                <textarea onChange={handleContact} name="consult" value={data.consult} className='inputsArea' placeholder='Dejanos tu Consulta'></textarea>
                <Button text={'Enviar'} type={'submit'} />
                
          </FormContainer>

        </div>
        

  )
}

export  default ContactForm
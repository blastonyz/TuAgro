'use client'
import './contact.form.css'
import { useState } from 'react'
import FormContainer from '../ui/form/FormContainer'
import CustomInputs from '../ui/form/CustomInputs'
import Button from '../ui/button/Button'
import SectionTitle from '../ui/title/SectionTitle'
import VideoSection from '../ui/video/VideoSection'

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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/consult',{
          method:'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        })
        if(!response.ok){
           console.error('error al realizar consutla');
        }
        const responseData= await response.json()
        console.log('data: ',responseData)
    }


  return (
 
     <>
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
                  <Button text={'Enviar'} type={'submit'} onClick={handleSubmit}/>
                  
            </FormContainer>
  
          </div>
          <VideoSection/>
     </>

  )
}

export  default ContactForm
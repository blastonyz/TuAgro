'use client'
import './contact.form.css'
import { useState } from 'react'
import FormContainer from '../ui/form/FormContainer'
import CustomInputs from '../ui/form/CustomInputs'
import Button from '../ui/button/Button'
import SectionTitle from '../ui/title/SectionTitle'
import VideoSection from '../ui/video/VideoSection'
import { ToastContainer, toast } from 'react-toastify'
import { contactSchema } from '../shcemas/ContactSchema'

const ContactForm = () => {
  const initialState = {
    firstName: "",
    email: "",
    phone: "",
    consult: ""
  }

  const [data, setData] = useState(initialState)

  const handleContact = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(data)

     if (!result.success) {
        console.log("Errores de validación: ", result.error.issues)
       toast.error("Formulario inválido. Por favor revisá los campos.");
        return;
    }

    const response = await fetch('/api/consult', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      console.log('error al realizar consutla');
    }
    const responseData = await response.json()

    console.log('data: ', responseData)
    toast.success('Consulta enviada ☝')
    setData(initialState)
  }


  return (

    <>
      <div className="contactContainer">
        <SectionTitle text={'Contactanos'} size={26} />
        <FormContainer >
          <CustomInputs
            onChange={handleContact}
            type={"text"}
            name={"firstName"}
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
          <Button text={'Enviar'} type={'submit'} onClick={handleSubmit} />

        </FormContainer>

        <ToastContainer/>

      </div>
      <VideoSection />
    </>

  )
}

export default ContactForm
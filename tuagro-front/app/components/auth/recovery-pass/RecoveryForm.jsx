'use client'
import './recovery.section.css'
import { useState } from "react"
import FormContainer from "../../ui/form/FormContainer"
import CustomInputs from "../../ui/form/CustomInputs"
import Button from "../../ui/button/Button";
import VideoSection from '../../ui/video/VideoSection'

const RecoveryForm = () => {
    const [emailUser,setEmailUser] = useState({email:''})

    const handleChange = (e) => {
        const {name,value} = e.target
    setEmailUser((prev)=>({
        ...prev,
        [name]:value
    }))
    }

    const handleSUbmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/recovery-link',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(emailUser)
        })
        if(!response.ok){
            throw new Error('errroe al solicitar recuperar password')
        }
        const data = await response.json()
        console.log('data: ',data);
        
    }

  return (
<div className='recoveryMain'>
        <div className="recoveryFormSection">
           <FormContainer>
            <CustomInputs
            type={'email'}
            placeholder={'E-mail'}
            name={'email'}
            value={emailUser.email}
            onChange={handleChange}
            />
            <Button
            type={"submit"}
            text={"Enviar"}
            onClick={handleSUbmit}
            />
           </FormContainer>
         </div>
        <VideoSection/>
</div>
  )
}

export default RecoveryForm

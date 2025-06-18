'use client'
import './recovery.section.css'
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import FormContainer from "../../ui/form/FormContainer"
import CustomInputs from "../../ui/form/CustomInputs"
import Button from "../../ui/button/Button"
import VideoSection from '../../ui/video/VideoSection'
import SectionTitle from '../../ui/title/SectionTitle'
import { toast } from "react-toastify"

const RecoveryPass = () => {
   const searchParams = useSearchParams()
   const token = searchParams.get("token");
   console.log("Token recibido:", token); 

    const [data,setData] = useState({
        password:'',
        repeatPassword:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e);
        const response = await fetch(`${process.env.NEXT_PUBLIC_RENDER_API_URL}/recovery-password/${token}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
             return toast.error('Error al recuperar contraseña');
        }
        const resposneData = await response.json()
        console.log('resp: ',resposneData);
        
    }
 
  return (
<>
        <div className="recoverySection">

            <SectionTitle text={'Recuperar Pass'}/>

            <FormContainer>
            <CustomInputs
            type="password"
            name={"password"}
            value={data.password}
            required={true}
            placeholder={'Password'}
            onChange={handleChange}
            />
            <CustomInputs
            type="password"
            name={"repeatPassword"}
            value={data.repeatPassword}
            required={true}
            placeholder={'Repite Password'}
            onChange={handleChange}
            />
    
            <Button 
            type="submit"
            text={"Enviar"}
            onClick={handleSubmit}
            />
    
            </FormContainer> 
    
        </div>
        <VideoSection/>
</>
  )
}

export  default RecoveryPass
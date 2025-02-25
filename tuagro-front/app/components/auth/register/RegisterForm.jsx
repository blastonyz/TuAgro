'use client'
import './register.css'
import { useState } from "react"
import Button from "../../ui/button/Button"
import SectionTitle from "../../ui/title/SectionTitle"

const RegisterForm = () => {

    const [userData,setUserData] = useState({
        first_name:'',
        last_name:'',
        address:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [error,setError] = useState(false)

    const handleChange = (e) => {
        const{name,value} = e.target
        setUserData((prev) =>({
            ...prev,
            [name]: value
        }))
        if (name === 'password' && name === 'confirmPassword') {
            if (userData.password !== userData.confirmPassword) {
              setError(true);
            } else {
              setError(false);
            }
          }
        console.log(userData);
          
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {confirmPassword,...user} = userData
        if (user.password !== confirmPassword) {
            setError(true);
            return; 
          }
          const response = await fetch('/api/auth/register',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
          
          body: JSON.stringify(user),
         })
         if(!response.ok) throw new Error("Error al registrarte");
         const data =  response.json()
         console.log('reg data: ',data);
         

    }

  return (
    <div className="registerContainer">
            <SectionTitle text={'Registrate'} size={26} />
          <form className="genericForm"> 
            <input 
            onChange={handleChange}
            type="text" 
            name="first_name" 
            placeholder="Nombre" 
            value={userData.first_name} className="inputsFields2"/>
            <input 
            onChange={handleChange}
            type="text" 
            name="last_name" 
            placeholder="Apellido" 
            value={userData.last_name} 
            className="inputsFields2"/>
            <input 
            onChange={handleChange}
            type="text" 
            name="address" 
            placeholder="Direccion" 
            value={userData.address} 
            className="inputsFields2"/>
            <input 
            onChange={handleChange}
            type="email" 
            name="email" 
            placeholder="Email" 
            value={userData.email} 
            className="inputsFields2"/>
            <input 
            onChange={handleChange}
            type="password" 
            name="password" 
            placeholder="Password" 
            value={userData.password} 
            className="inputsFields2"/>
            <input 
            onChange={handleChange}
            type="password" 
            name="confirmPassword" 
            placeholder="Repite Password" 
            value={userData.confirmPassword} className="inputsFields2"/>

           <div className="errorContainer"> {error && <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>}</div>
            <Button type="submit" onClick={handleSubmit} text={'Registrarte'}/>
           
        </form>

    </div>
  )
}

export default RegisterForm
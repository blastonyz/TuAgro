'use client'
import './login.css'
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import SectionTitle from "../../ui/title/SectionTitle"
import Button from "../../ui/button/Button"
import Link from 'next/link'

const LoginForm = () => {
    const {getUser} = useAuthContext()

    const [userData,setUserData] = useState({
        email:'',
        password:''
    })

    const fetchToProtected = async () =>{
        const response = await fetch('/api/prueba',{
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }})
        if(!response.ok)throw new Error('fallo fecth a ruta prot')
        const data = await response.json()    
        
    
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(userData);
        
    }

    const handleLogin = (e) => {
        e.preventDefault()
        getUser(userData)
        setUserData({  
            email:'',
            password:''
        })
    }

  return (
  
    <div className="loginContainer">
        <SectionTitle size={26} text={'Inicia Sesion'}/>
        <form className="loginForm">
            <input onChange={handleChange} type="email" name="email" placeholder="Email" value={userData.email} className="inputsFields"/>
            <input onChange={handleChange} type="password" name="password" placeholder="Password" value={userData.password} className="inputsFields"/>
            <Button type="submit" onClick={handleLogin} text={'Iniciar Sesion'}/>
        </form>
        <div className='registerLink'>
            <p className='registerText'>No te registraste aun?</p>

           <Link href={'/auth/register'}> <p>Registrate</p></Link>
        </div>
    <button onClick={fetchToProtected}>
        Probar
    </button>
    </div>
  )
}

export default LoginForm
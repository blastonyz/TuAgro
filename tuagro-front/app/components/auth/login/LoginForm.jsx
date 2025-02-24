'use client'
import { useState,useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"
import SectionTitle from "../../ui/title/SectionTitle"
const LoginForm = () => {
    const {getUser} = useAuthContext()

    const [userData,setUserData] = useState({
        email:'',
        password:''
    })

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
    }

  return (
  
    <div className="loginMain">
        <SectionTitle size={26} text={'Inicia Sesion'}/>
        <form className="loginForm">
            <input onChange={handleChange} type="email" name="email" placeholder="Email" value={userData.email}/>
            <input onChange={handleChange} type="text" name="password" placeholder="Password" value={userData.password}/>
            <button type="submit" onClick={handleLogin}>Iniciar Sesion</button>
        </form>

    </div>
  )
}

export default LoginForm
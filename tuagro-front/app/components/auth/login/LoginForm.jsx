'use client'
import './login.css'
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import SectionTitle from "../../ui/title/SectionTitle"
import Button from "../../ui/button/Button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'

const LoginForm = () => {
    const router = useRouter()

    const { getUser, user } = useAuthContext()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const notify = (message, onCloseCallback) => {
        toast(message, {
            onClose: onCloseCallback,
        });
    };

    const fetchToProtected = async () => {
        const response = await fetch('/api/prueba', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })


        if (!response.ok) throw new Error('fallo fecth a ruta prot')
        console.log('response: ', response);

        const data = await response.json()
        console.log(data);


    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(userData);

    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (!userData.email || !userData.password) {
            toast.error('Por favor, completa todos los campos')
            return
        }
        try {
            const result = await getUser(userData); 

            setUserData({
                email: '',
                password: ''
            });
    
            if (result.success) {
                notify('Sesión Iniciada', () => {
                    router.push('/');
                });
            } 

             if(!result.user || result.user.email == '')   {
                toast.error(result.message || 'Correo o Contraseña inválidos');
            }
            
    
        } catch (error) {
            toast.error('Error al iniciar sesión');
            console.error(error);
        }

    }

    return (

        <div className="loginContainer">
            <SectionTitle size={26} text={'Inicia Sesion'} />
            <form className="loginForm">
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    className="inputsFields"
                    required={true}
                />
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userData.password}
                    className="inputsFields"
                    required={true}
                />

                <Button type="submit" onClick={handleLogin} text={'Iniciar Sesion'} />
            </form>
            <div className='registerLink'>
                <p className='registerText'>No te registraste aun?</p>

                <Link href={'/auth/register'}> <p>Registrate</p></Link>
            </div>
            <button onClick={fetchToProtected}>
                Probar
            </button>

            <ToastContainer autoClose={1200} />
        </div>
    )
}

export default LoginForm
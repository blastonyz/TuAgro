'use client'
import './login.css'
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import SectionTitle from "../../ui/title/SectionTitle"
import FormContainer from '../../ui/form/FormContainer'
import CustomInputs from '../../ui/form/CustomInputs'
import Button from "../../ui/button/Button"
import Link from 'next/link'
import VideoSection from '../../ui/video/VideoSection'

const LoginForm = () => {

    const { getUser, user, verifyUser } = useAuthContext()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
        ;

    const googleOAuth = async () => {
        window.location.href = "http://localhost:8080/auth/google"
        setTimeout(async () => {
            await verifyUser();
        }, 2000);
    }

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

        try {
            const result = await getUser(userData);
            setUserData({
                email: '',
                password: ''
            });
            return result
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className="loginContainer">
                <SectionTitle size={26} text={'Inicia Sesion'} />
                <FormContainer>
                    <CustomInputs
                        onChange={handleChange}
                        type={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        value={userData.email}
                        required={true}
                    />
                    <CustomInputs
                        onChange={handleChange}
                        type={"password"}
                        name={"password"}
                        placeholder={"Password"}
                        value={userData.password}
                        required={true}
                    />

                    <Button type="submit" onClick={handleLogin} text={'Iniciar Sesion'} />

                    <button onClick={googleOAuth} className='googleButton' >
                        <img src="./google-icon.png" alt="google button" className='googleButtonImg' />
                    </button>
                    
                </FormContainer>
                <div className='registerLink'>
                    <p className='registerText'>No te registraste aun?</p>

                    <Link href={'/auth/register'}> <p>Registrate</p></Link>
                </div>
                <button onClick={fetchToProtected}>
                    Probar
                </button>



                <Link href={'/auth/recovery-form'}>
                    Recuperar Contraseña
                </Link>
            </div>
            <VideoSection />
        </>
    )
}

export default LoginForm
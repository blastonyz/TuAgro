'use client'
import './login.css'
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import FormContainer from '../../ui/form/FormContainer'
import CustomInputs from '../../ui/form/CustomInputs'
import Button from "../../ui/button/Button"
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { useRouter } from 'next/navigation'

const LoginForm = ({ onClose, setFormType }) => {

    const router = useRouter()

    const { getUser, user, verifyUser } = useAuthContext()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleRegister = () => {
      if (setFormType) {
        setFormType('register')
    } else {
        // redirige a la página de registro
        router.push('/auth/register')
    }
    }


    const googleOAuth = async () => {
        window.location.href = `${process.env.NEXT_PUBLIC_RENDER_API_URL}/auth/google`
        setTimeout(async () => {
            await verifyUser();
        }, 2000);
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

        <div className="loginContainer">
         
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
                
                 <Link href={'/auth/recovery-form'}>
                    Recuperar Contraseña  
                 </Link>

                <button
                    onClick={googleOAuth} className='googleButton'
                    type='button'
                >
                    <CldImage src="https://res.cloudinary.com/doatjpkkh/image/upload/v1748873423/google-icon_pm9hvd.png" alt="google button" className='googleButtonImg' width={120} height={40} />
                </button>

                <div className='registerLink'>
                    <p className='registerText'>No te registraste aun?</p>

                    <button 
                    onClick={handleRegister}
                    type='button'
                        >Registrate
                        </button>
                </div>


                
            </FormContainer>

        </div>

    )
}

export default LoginForm
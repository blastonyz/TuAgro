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

    const handleMessage = async (event) => {
        if (event.data === "authSuccess") {
            const result = await verifyUser()
            if (result.success) {
                router.push("/")
            } else {
                console.warn("Usuario no verificado")
            }
        }
    }

    useEffect(() => {
        window.addEventListener("message", handleMessage)

        return () => {
            window.removeEventListener("message", handleMessage)
        }
    }, [])


    const googleOAuth = async () => {
        /*window.location.href = `${process.env.NEXT_PUBLIC_RENDER_API_URL}/auth/google`*/
        const popup = window.open(
            `${process.env.NEXT_PUBLIC_RENDER_API_URL}/auth/google`,
            "_blank",
            "width=500,height=600"
        )

        const pollInterval = setInterval(() => {
            if (!popup || popup.closed) {
                clearInterval(pollInterval)
            }
        }, 1000)

    }

    useEffect(() => {
        return () => window.removeEventListener("message", () => { }) // Cleanup on unmount
    }, [])

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

                <Link href={'/auth/recovery-form'}
                    className='recoverLink'
                >
                    Recuperar Contraseña
                </Link>


                <Button type="submit" onClick={handleLogin} text={'Iniciar Sesion'} />

                <button
                    onClick={googleOAuth} className='googleButton'
                    type='button'
                >
                    <CldImage src="https://res.cloudinary.com/doatjpkkh/image/upload/v1748873423/google-icon_pm9hvd.png" alt="google button" className='googleButtonImg' width={120} height={40} />
                </button>

                <div className='registerLink'>
                    <p className='registerText'>No te registraste aun?</p>

                    <Button
                        onClick={handleRegister}
                        type='button'
                        text={'Registrate'}
                    />
                </div>



            </FormContainer>

        </div>

    )
}

export default LoginForm
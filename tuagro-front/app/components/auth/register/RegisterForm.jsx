'use client'
import './register.css'
import { useState } from "react"
import Button from "../../ui/button/Button"
import SectionTitle from "../../ui/title/SectionTitle"
import FormContainer from '../../ui/form/FormContainer'
import CustomInputs from '../../ui/form/CustomInputs'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {

   const router = useRouter()

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const notify = (message, onCloseCallback) => {
    toast(message, {
      onClose: onCloseCallback,
    });
  };

  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { confirmPassword, ...user } = userData
    if (user.password !== confirmPassword) {
      setError(true);
      return;
    }
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(user),
    })

    const data = await response.json()
    if (!response.ok) {
      return toast.error('Error al Registrarte');
    } else {
      notify('Te Registraste!', () => {
        router.push('/auth');
      });
      console.log('reg data: ', data);
      setUserData({ first_name: '', last_name: '', address: '', email: '', password: '', confirmPassword: '' })
    }

  }

  return (
    <div className="registerContainer">
      <SectionTitle text={'Registrate'} size={26} />
      <FormContainer >
        <CustomInputs
          onChange={handleChange}
          type={"text"}
          name={"first_name"}
          placeholder={"Nombre"}
          value={userData.first_name} 
          required={true}
          />
        <CustomInputs
          onChange={handleChange}
          type={"text"}
          name={"last_name"}
          placeholder={"Apellido"}
          value={userData.last_name}
          required={true}
          />
        <CustomInputs
          onChange={handleChange}
          type={"text"}
          name={"address"}
          placeholder={"Direccion"}
          value={userData.address}
          />
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
        <CustomInputs
          onChange={handleChange}
          type={"password"}
          name={"confirmPassword"}
          placeholder={"Repite Password"}
          value={userData.confirmPassword} 
          required={true}
          />

        <div className="errorContainer"> {error && <p style={{ color: 'red' }}>Las contraseñas no coinciden.</p>}</div>
        <Button type="submit" onClick={handleSubmit} text={'Registrarte'} />

      </FormContainer>
      <ToastContainer autoClose={1200} />
    </div>
  )
}

export default RegisterForm
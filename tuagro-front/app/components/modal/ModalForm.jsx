'use client'
import RegisterForm from '../auth/register/RegisterForm'
import LoginForm from '../auth/login/LoginForm'
import { useState } from 'react'
import './modal.css'

const ModalForm = ({ onClose }) => {
  const [formType, setFormType] = useState('login') 
  const renderForm = () => {
    switch (formType) {
      case 'login':
        return <LoginForm setFormType={setFormType} onClose={onClose} />
      case 'register':
        return <RegisterForm setFormType={setFormType} onClose={onClose} />
      default:
        return null
    }
  }

  return (
    <>
      <div className="modalContainer">
        <div className='modalFormContainer'>
          <div className='modalSection'>
            <div className='butonContainer'>
              <button onClick={onClose} className='closeModal'>X</button>
            </div>
            {renderForm()}
          </div>
        </div>
      </div>
      <div className='filterModal'></div>
    </>
  )
}
export default ModalForm
'use client'
import RegisterForm from '../auth/register/RegisterForm'
import './modal.css'

const ModalForm = ({ onClose }) => {
  return (<>

    <div className="modalContainer">
      <div className='modalFormContainer'>
        <div className='modalSection'>
          <div className='butonContainer'>
            <button onClick={onClose} className='closeModal'>X</button>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
    <div className='filterModal'>
    </div>
  </>
  )
}

export default ModalForm
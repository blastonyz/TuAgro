'use client'
import RegisterForm from '../auth/register/RegisterForm'
import './modal.css'

const ModalForm = ({onClose}) => {
  return (<>
 
        <div className="modalContainer">
                <div className='modalFormContainer'>
                <p>soy el modal</p>
                <RegisterForm/>
                <button onClick={onClose} className='closeModal'>X</button>
                </div>
            </div>
        <div className='filterModal'>
        </div>    
  </>
  )
}

export default ModalForm
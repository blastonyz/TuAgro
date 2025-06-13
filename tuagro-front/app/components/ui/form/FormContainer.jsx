import './form.css'
import Image from 'next/image'

const FormContainer = ({children}) => {
  return (
    <div className="formContainer">
        <Image 
        src="/main-logoNew.png" 
        alt="tuagro logo" 
        width={250}
        height={80}
        className='mainLogo'
        />
        <form className="genericForm">
            {children}
        </form>
    </div>
  )
}

export default FormContainer

import './inputs.css'

const CustomInputs = ({type = 'text',name,value,placeholder,onChange,required}) => {
  return (
   <input 
   type={type}
   name={name}
   value={value}
   placeholder={placeholder}
   onChange={onChange}
   required={required}
   className="genericInput"/>
  )
}

export default CustomInputs
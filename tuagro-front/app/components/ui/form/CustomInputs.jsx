import './inputs.css'

const CustomInputs = ({type = 'text',name,value,placeholder,onChange,id,required}) => {
  return (
   <input 
   type={type}
   name={name}
   value={value}
   placeholder={placeholder}
   onChange={onChange}
   required={required}
   id={id}   className="genericInput"/>
  )
}

export default CustomInputs
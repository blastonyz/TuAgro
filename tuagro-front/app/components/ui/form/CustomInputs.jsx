import './inputs.css'

const CustomInputs = ({type = 'text',name,value,placeholder,onChange,id,required,options}) => {
      if (type === 'select') {
    return (
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="genericSelect"
      >
        <option value="" disabled>Seleccioná una opción</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    )
  }


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
import './button.css'

const Button = ({text,type = "button",onClick, disabled=false}) => {
  return (
    <button className='formButton' type={type} onClick={onClick} disabled={disabled}>
    <p className="textButton">{text}</p>
    </button>
  )
}
export  default Button
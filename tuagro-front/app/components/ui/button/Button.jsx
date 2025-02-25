import './button.css'

const Button = ({text,type = "button",onClick}) => {
  return (
    <button className='formButton' type={type} onClick={onClick}>
    <p className="textButton">{text}</p>
    </button>
  )
}
export  default Button
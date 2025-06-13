import Link from "next/link"
import './link.css'

export const SectionLink = ({text,href,size=26}) => {
  return (

  
        <Link href={href} className="link"  >  <div className="linkContainer">
            <p 
            className="linkText"
            style={{fontSize:`${size}`}}>
              {text}
              </p>  </div>
        </Link>
  
  )
}

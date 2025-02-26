import Link from "next/link"
import './link.css'

export const SectionLink = ({text,href,size=26}) => {
  return (

    <div className="linkContainer">
        <Link href={href} className="link"  >
            <p 
            className="linkText"
            style={{fontSize:`${size}`}}>
              {text}
              </p>
        </Link>
    </div>
  )
}

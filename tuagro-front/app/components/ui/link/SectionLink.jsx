import Link from "next/link"
import './link.css'

export const SectionLink = ({text,href,size}) => {
  return (

    <div className="linkContainer">
        <Link href={href} className="link" style={{fontSize:`${size}`}} >
            {text}
        </Link>
    </div>
  )
}

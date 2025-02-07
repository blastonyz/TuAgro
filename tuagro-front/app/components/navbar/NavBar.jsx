'use client'
import { useState } from "react"
import Link from "next/link"
import { links } from "../links/links"
import MenuIcon from "../ui/icons/MenuIcon";
import './navbar.css'
import { colors } from "../ui/colors";

const NavBar = () => {
    const [menuOpen,setMenuOpen] = useState(false)

    const collapse = () => {
      setMenuOpen(!menuOpen)
    }

  return (
    <nav className="navbar">
      
        <div className="navContainer">
          <aside className={menuOpen?'linksContainer':'linksCollapse'}>   
             {links.map((link)=>{
            return(
                <Link
                key={link.label}
                href={link.href}
                onClick={()=>setMenuOpen(!menuOpen)}
                className="links"
                >{link.label}</Link>
            )
        })}
        </aside>
         <div className="menu" onClick={collapse}>
       
          <MenuIcon color={colors.green} size="50px" />
         </div> 
       
        </div>
    </nav>
  )
}

export default NavBar

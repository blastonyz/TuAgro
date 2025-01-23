'use client'
import { useState } from "react"
import Link from "next/link"
import { links } from "../links/links"
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import Header from "../header/Header";

const NavBar = () => {
    const [menuOpen,setMenuOpen] = useState(false)

    const collapse = () => {
      setMenuOpen(!menuOpen)
      console.log(menuOpen);
      
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
                className="links"
                >{link.label}</Link>
            )
        })}
        </aside>
    
        <MenuIcon className="menu" fontSize="50" onClick={collapse}/>
        </div>
    </nav>
  )
}

export default NavBar

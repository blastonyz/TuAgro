'use client'
import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import Link from "next/link"
import { links } from "../links/links"
import MenuIcon from "../ui/icons/MenuIcon";
import './navbar.css'
import { colors } from "../ui/colors";
import CartIcon from "../ui/icons/CartIcon";
import Image from "next/image";

const NavBar = () => {
  const { cart } = useCartContext()
  const [menuOpen, setMenuOpen] = useState(false)

  const collapse = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">

      <div className="navContainer">
        <div className="logoContainer">
          <Image
            className="logoImg"
            src={'/logo-verde.png'}
            width={170}
            height={50}
            alt="Logo Tu Agro Servicios e Insumos"
          />
        </div>

        <aside className={menuOpen ? 'linksContainer' : 'linksCollapse'}>
          {links.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(!menuOpen)}
                className="links"
              >{link.label}</Link>
            )
          })}
        </aside>

        {cart && cart.length > 0 &&
          (<div className={cart.length > 0 ? "cartIconContainer" : "cartClose"}>
            <Link href={'/carrito'}>
              <CartIcon size={40} color={'green'} />
            </Link>
            <p>{cart.length}</p>
          </div>)}

        <div className="menu" onClick={collapse}>

          <MenuIcon color={colors.green} size="50px" />
        </div>

      </div>
    </nav>
  )
}

export default NavBar

import './checkout.css'
import { SectionLink } from '../ui/link/SectionLink'

const CartCheckout = () => {
  return (
    <div className="cartCheckoutMain">
        <h2 className="heroCheck">Muchas Gracias por su Pedido</h2>

        <h3 className='textCheck'>Nuestro equipo va a comunicarse a la brevedad para continuar con la compra</h3>

        <div className='checkoutLinks'>
          <SectionLink text={'Inicio'} href={'/'}/>
          <SectionLink text={'Productos'} href={'/productos'}/>
          <SectionLink text={'Contacto'} href={'/contacto'}/>
        </div>
    </div>
  )
}

export  default CartCheckout
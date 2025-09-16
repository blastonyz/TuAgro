import './styles/bloemen.section.css'
import BloemenSlider from "../slider/BloemenSlider"
import { SectionLink } from '../ui/link/SectionLink'

const BloemenSection = () => {
  return (
    <div className="mainBloemen">
      <div className='firstTitleContainer'>
         <h2 className='firstTitle'>Representates Oficiales de</h2>
         <img src="./logobloemen-1.svg" alt="" className='bloemenLogo'/>
      </div>
      
        <BloemenSlider />
        <div className='seeProductsBtn'>
           <SectionLink
          href={'/productos'}
          text={'Ver Productos'}
          size={26}
        />
        </div>
       
    </div>
  )
}

export  default BloemenSection
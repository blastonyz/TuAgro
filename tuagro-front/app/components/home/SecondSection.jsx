import './styles/second.css'
import Image from 'next/image'
import CheckCircle from '../ui/check-circle/CheckCircle'
import SectionTitle from '../ui/title/SectionTitle'

const SecondSection = () => {

  return (

    <div className="secondMain">
     
      <div className='imagesContainer'>
        <div className='circle'>
          <div className='textBox'>
          </div>
        </div>
        <div className='img2section'>
         <Image src={'/agricultor.webp'} width={250} height={400} alt='fotografia de agricutor en su siembra' style={{borderRadius: '25% 10%'}}/>
         
        </div>
      </div>

      <div className='textsMain'>
        <div className='mainTitleContainer'>
          <SectionTitle size={'35px'} text={'Nuestros Servicios'} />
        </div>

        <div className='mainItems'>
          <CheckCircle />
          <h3 className='secondText'>Venta de insumos</h3>
        </div>

        <div className='mainItems'>
          <CheckCircle />
          <h3 className='secondText'>Gestion de Comercio Exterior</h3>
        </div>
        <div className='mainItems'>
          <CheckCircle />
          <h3 className='secondText'>Asesoramiento Profesional sin costo</h3>
        </div>
      </div>

    
 </div>
   


  )
}

export default SecondSection
import './styles/second.css'
import CheckCircle from '../ui/check-circle/CheckCircle'
import SectionTitle from '../ui/title/SectionTitle'

const SecondSection = () => {

  return (


    <div className="secondMain">
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

      <img src="./section2-3.jpg" alt="granja estilo trazos blanco y negro" className="secondImage" />
    </div>


  )
}

export default SecondSection
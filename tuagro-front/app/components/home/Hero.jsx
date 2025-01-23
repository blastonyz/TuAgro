import './styles/hero.css'

import  {SectionLink}  from '../ui/link/SectionLink'

 const Hero = () => {
  return (
    <section className='heroMain'>
      <div className="heroBackground"></div>
       <div className='heroTextsContainer'>

         <h2 className='welcome'>Bienvenido a TuAgro</h2>
        <div className='hero1'> 
           <h1 className='mainText'>Comercializadora de productos y soluciones para el Agro</h1>
        </div>
          <SectionLink text={'Sobre Nosotros'} href={'/'} size={'24px'}/>
       </div>
    </section>
  )
}

export default Hero

/*   <SectionTitle size={'35px'} text={'Bienvenido a TuAgro'}/>*/
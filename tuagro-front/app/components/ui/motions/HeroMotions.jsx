'use client'
import { motion } from 'motion/react'
import { SectionLink } from "../link/SectionLink"

 const HeroMotions = ({duration1 = 2,duration2=2,duration3=3}) => {
  return (
    <>
    <motion.div
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ transition: {duration1}, stiffness: 100  }}
  > <h2 className='welcome'>Bienvenido a TuAgro</h2>
  </motion.div>
  <div className='hero1'>

    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ transition: {duration2}, stiffness: 100,}}
      >
      <h1 className='mainText'>Comercializadora de productos y soluciones para el Agro</h1></motion.div>
  </div>
  
  <motion.div
      initial={{ y: 250 }}
      animate={{ y: 0 }}
      transition={{ transition: {duration3}, stiffness: 100}}
      >
  <SectionLink text={'Sobre Nosotros'} href={'/'} size={'24px'} />
  </motion.div>
  </>
  )
}

export default HeroMotions
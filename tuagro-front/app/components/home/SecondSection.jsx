'use client'
import './styles/second.css'
import Image from 'next/image'
import CheckCircle from '../ui/check-circle/CheckCircle'
import SectionTitle from '../ui/title/SectionTitle'
import  {motion, useScroll, useTransform,useSpring} from 'motion/react';
import { useRef } from 'react';


const SecondSection = () => {

  const sectionRef= useRef(null)
  const {scrollY} = useScroll({
    target:sectionRef,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollY, [0,  1], [-100, 0]);
  const opacity = useTransform(scrollY, [0,  1], [0, 1]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 50 });

  const x2 = useTransform(scrollY, [0.4, 1], [100, 0]); 
  const scale = useTransform(scrollY, [0.4, 1], [0.9, 1]);
  const opacityText = useTransform(scrollY, [0.4, 1], [0.5, 1]); 
  
  const smoothX2 = useSpring(x2, { stiffness: 100, damping: 50 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 50 });
  const smoothOpacityText = useSpring(opacityText, { stiffness: 100, damping: 50 });
  
   

  return (
    <motion.div ref={sectionRef} layout='position' >
    <div className="secondMain">
     
      <motion.div 
      layout='position'
      style={{ opacity, x: smoothX,position:'relative'}} 
      className='imagesContainer'>
        <div className='circle'>
          <div className='textBox'>
          </div>
        </div>
        <div className='img2section'>
         <Image src={'/agricultor.webp'} fill alt='fotografia de agricutor en su siembra' style={{borderRadius: '25% 10%'}}/>
         
        </div>
      </motion.div>

      <motion.div 
      layout='position'
      style={{ x: smoothX2, opacity: smoothOpacityText, scale: smoothScale,position:'relative' }} 
      className='textsMain'>
        <motion.div className='mainTitleContainer' 
        layout='position'
        style={{ x: smoothX2, opacity: smoothOpacityText, scale: smoothScale,position:'relative' }} >
          <SectionTitle size={'clamp(20px, 5vw, 26px)'} text={'Nuestros Servicios'} />
        </motion.div>

        <motion.div  className='mainItems' layout='position'>
          <CheckCircle />
          <h3 className='secondText'>Venta de insumos</h3>
        </motion.div>

        <motion.div  className='mainItems' layout='position'>
          <CheckCircle />
          <h3 className='secondText'>Gestion de Comercio Exterior</h3>
        </motion.div>
        <motion.div className='mainItems' layout='position'>
          <CheckCircle />
          <h3 className='secondText'>Asesoramiento Profesional sin costo</h3>
        </motion.div>
      </motion.div>

    
 </div>
 </motion.div>


  )
}

export default SecondSection
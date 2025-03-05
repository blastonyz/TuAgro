'use client'
import './styles/third.section.css'
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';


const ThirdSection = () => {
  const thirdSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: thirdSectionRef,
    offset: ["start end", "end start"]
  });

  // Definimos las animaciones para cada uno de los textos, ahora con distintos "offsets"
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const y2 = useTransform(scrollYProgress, [ 0.2, 0.3], [50, 0]);
  const scale2 = useTransform(scrollYProgress, [ 0.2, 0.3], [0.8, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

  const y3 = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);
  const scale3 = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.4], [0.8, 1]);

  const y4 = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  const scale4 = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

  // Hacemos que el movimiento sea más suave
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 50 });
  const smoothScale1 = useSpring(scale1, { stiffness: 100, damping: 30 });
  const smoothOpacity1 = useSpring(opacity1, { stiffness: 100, damping: 30 });

  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 50 });
  const smoothScale2 = useSpring(scale2, { stiffness: 100, damping: 30 });
  const smoothOpacity2 = useSpring(opacity2, { stiffness: 100, damping: 30 });

  const smoothY3 = useSpring(y3, { stiffness: 100, damping: 50 });
  const smoothScale3 = useSpring(scale3, { stiffness: 100, damping: 30 });
  const smoothOpacity3 = useSpring(opacity3, { stiffness: 100, damping: 50 });

  const smoothY4 = useSpring(y4, { stiffness: 100, damping: 50 });
  const smoothScale4 = useSpring(scale4, { stiffness: 100, damping: 30 });
  const smoothOpacity4 = useSpring(opacity4, { stiffness: 100, damping: 50 });

  return (
    <section className='thirdMain' ref={thirdSectionRef}>
      <div className="filterOverlay"></div>    
      <article className='thirdTextContainer'>
   
        <motion.h4 
          className='thirdText' 
          style={{ y: smoothY1, scale: smoothScale1, opacity: smoothOpacity1,position:'relative' }}
        >
          Buscas el Producto Perfecto?
        </motion.h4>

        <motion.h5 
          className='thirdText' 
          style={{ y: smoothY2, scale: smoothScale2, opacity: smoothOpacity2,position:'relative' }}
        >
          Te ofrecemos Asesoramiento
        </motion.h5>

        <motion.h6 
          className='thirdText charge' 
        style={{ y: smoothY3, scale: smoothScale3, opacity: smoothOpacity3,position:'relative' }}
        >
          SIN CARGO
        </motion.h6>

        <motion.h4 
          className='thirdText last' 
          style={{ y: smoothY4, scale: smoothScale4, opacity: smoothOpacity4,position:'relative' }}
        >
          Estas a unos pasos de adquirir los productos perfectos para Tu Empresa
        </motion.h4>
      </article>
    </section>
  )
}

export default ThirdSection



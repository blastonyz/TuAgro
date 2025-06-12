'use client'
import './styles/hero.css'
import HeroMotions from '../ui/motions/HeroMotions'
import { useRef } from 'react'

const Hero = () => {
  const firstRef = useRef(null)

  return (
    <section className='heroMain' ref={firstRef}>
      <div className="heroBackground"></div>
      <div className='heroTextsContainer'>
         <HeroMotions duration1={1} duration3={3} />
     
      </div>
    </section>
  )
}

export default Hero


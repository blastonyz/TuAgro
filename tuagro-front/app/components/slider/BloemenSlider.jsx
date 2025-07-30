'use client'
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";

const images = [
  "/bloemen-aminoFe.png",
  "/bloemen-aminoK.png",
  "/bloemen-amino-ZN_MN.png"
];

const BloemenSlider = ({ time = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [direction, setDirection] = useState(1);
  const isFirstRender = useRef(true);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering) next();
    }, time);
    return () => clearInterval(interval);
  }, [hovering]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // Índices laterales
  const leftIndex = (index - 1 + images.length) % images.length;
  const rightIndex = (index + 1) % images.length;

  return (
    <div
      className="mainSlider"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="sliderTrack">

        {/* Imagen izquierda animada */}
        <motion.img
          key={`left-${leftIndex}-${direction}`}
          src={images[leftIndex]}
          className="sliderImg sideImg"
          initial={{ opacity: 0, x: "-30%", y: 0, scale: 0.8 }}
          animate={{
            opacity: 0.4,
            x: direction === -1 ? "-20px" : "30px",
            y: direction === -1 ? -30 : 0,
            scale: 0.85
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
        />

        {/* Imagen central */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={images[index]}
            src={images[index]}
            className="sliderImg centerImg"
            initial={
              isFirstRender.current
                ? false
                : {
                    x: direction > 0 ? 300 : -300,
                    opacity: 0,
                    scale: 0.85
                  }
            }
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{
              x: direction > 0 ? -300 : 300,
              opacity: 0,
              scale: 0.85
            }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Imagen derecha animada */}
        <motion.img
          key={`right-${rightIndex}-${direction}`}
          src={images[rightIndex]}
          className="sliderImg sideImg"
          initial={{ opacity: 0, x: "30%", y: 0, scale: 0.8 }}
          animate={{
            opacity: 0.4,
            x: direction === 1 ? "20px" : "30px",
            y: direction === 1 ? 30 : 0,
            scale: 0.85
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
        />
      </div>

      {/* Botones */}
      <button onClick={prev} className="sliderButton Left">←</button>
      <button onClick={next} className="sliderButton Right">→</button>
    </div>
  );
};

export default BloemenSlider;
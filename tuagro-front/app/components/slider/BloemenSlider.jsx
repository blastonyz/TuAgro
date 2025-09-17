'use client'
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./slider.css";


const BloemenSlider = ({ time = 3000, category = 'Fertilizantes' }) => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [direction, setDirection] = useState(1);
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/${category}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const validImages = data
          .map((p) => p.image)
          .filter((img) => typeof img === "string" && img.trim() !== "");

        setProducts(data);
        setImages(validImages);
        console.log('Fetched products for slider:', data);
        console.log('Valid images for slider:', validImages);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);


  const next = () => {
    setDirection(1);
    setIndex((i) => {
      const max = products.length;
      return max > 0 ? (i + 1) % max : 0;
    });
  };


  const prev = () => {
    setDirection(-1);
    setIndex((i) => {
      const max = products.length;
      return max > 0 ? (i - 1 + max) % max : 0;
    });
  };


useEffect(() => {
  if (products.length === 0) return;

  const interval = setInterval(() => {
    if (!hovering) next();
  }, time);

  return () => clearInterval(interval);
}, [hovering, products.length]);




  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  // Índices laterales
  if (images.length === 0) {
    return (
      <div >
        <img src={'/leaf.webp'} alt="hoja creciendo" style={{ width: '200px', height: '200px' }} />
      </div>)
  }

  const leftIndex = (index - 1 + images.length) % images.length;
  const rightIndex = (index + 1) % images.length;
  const currentProduct = products[index];

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
          className="sliderImg sideImg leftImg"
          initial={{ opacity: 0.1, x: 0, y: 0, scale: 0.8 }}
          animate={{
            opacity: 0.6,
            x: direction === -1 ? "-20px" : "30px",
            scale: 0.85
          }}
          transition={{ duration: 1, delay: 0.15 }}
        />

        {/* Imagen central */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`center-${index}-${direction}`}
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
            className="sliderImgContainer centerImg"
          >
            <Link href={`/producto/${currentProduct?._id}`}>
              <img src={images[index]} alt="Producto" className="sliderImg" />
            </Link>
          </motion.div>
        </AnimatePresence>


        {/* Imagen derecha animada */}
        <motion.img
          key={`right-${rightIndex}-${direction}`}
          src={images[rightIndex]}
          className="sliderImg sideImg rightImg"
          initial={{ opacity: 0.1, x: 0, y: 0, scale: 0.8 }}
          animate={{
            opacity: 0.6,
            x: direction === 1 ? "-20px" : "30px",
            scale: 0.85
          }}
          transition={{ duration: 1, delay: 0.15 }}
        />
      </div>

      {/* Botones */}
      <button onClick={prev} className="sliderButton Left"><p className="btnText">{'<'}</p></button>
      <button onClick={next} className="sliderButton Right"><p className="btnText">{'>'}</p></button>
    </div>
  );
};

export default BloemenSlider;
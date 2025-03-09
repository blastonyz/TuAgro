'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const CategorieCardItem = ({ cat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px'});

  return (
    <motion.div
      ref={ref}
      className='categorieCard'
      initial={{ opacity: 0.5, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Link href={`/productos/${cat.title}`}>
        {cat.image ? (
          <CldImage
            width="240"
            height="350"
            src={cat.image}
            alt="Description of my image"
            className='categorieImage'
          />
        ) : null}
      </Link>
    </motion.div>
  );
};

export default CategorieCardItem;
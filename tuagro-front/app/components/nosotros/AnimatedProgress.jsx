"use client";
import {motion} from 'framer-motion'

const AnimatedProgress = ({value, color}) => {
  return (
    

      <div
        style={{
          background: "#eee",
          borderRadius: "8px",
          overflow: "hidden",
          height: "12px",
          width: "50%",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            height: "100%",
            backgroundColor: color,
          }}
        />
      </div>
  
  )
}

export default AnimatedProgress
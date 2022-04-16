import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import classes from './ImageCard.module.css';

const ImageCard = (props) => {
    
 

  return (
    <motion.div
    
    initial={{
      opacity:0,
    }}
    animate={{
      opacity:1
    }}
    transition={{
      duration:1,
      delay:.5
    }}
    whileHover={{
    opacity:0.7,
    transition: { duration: .1,
      delay:0 },
  }}
     className={classes.image} 
    onClick={()=>{
      console.log('im selected' , props.src)
      props.setSelectedImage(props.src)}}

     
    style={{
      backgroundImage:`url(${props.src})`,
      backgroundSize:'cover'
    }}
    >
    
 
        
       
</motion.div>
  )
}

export default ImageCard
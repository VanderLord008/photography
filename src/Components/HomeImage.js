import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import classes from './HomeImage.module.css';

const HomeImage = (props) => {
  return (
 
    <motion.div
    className={classes.image}
    key='homeImage'
      initial={
      {
       opacity:0,
      
      }
      }


      animate={{
        opacity:1,
        
      }}
      transition={{
        duration:1,
        delay:-1.5
      }}
      exit={{
       opacity:0
      }}


      >

      <img src={props.src} key={props.src} alt="" />
    </motion.div>
  

        
     

  )
}

export default HomeImage
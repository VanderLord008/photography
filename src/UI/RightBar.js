import React from 'react'
import classes from './RightBar.module.css';
import { AnimatePresence, motion } from "framer-motion";


const RightBar = () => {
  return (
    <motion.div className={classes.rightBar}
     key='rightBar'
        initial={{
          x: '100vw',
        }}
        animate={
           {
                x: "0",
              
              }
            
        }
        transition={{
          duration: 2,
        }}
        >right</motion.div>
  )
}

export default RightBar
import React from 'react'
import ContactContainer from '../Components/ContactContainer';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import classes from './Contact.module.css';
import { AnimatePresence, motion } from "framer-motion";


const pageVariants={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{duration:1.5}
  },
  exit:{
    opacity:0,
    transition:{ease:'easeInOut'}
  }
}

const Contact = () => {
  return (
    <motion.div className={classes.container}
     variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
<div className={classes.gridItem1}>

<Header />
</div>
<motion.div className={classes.gridItem2}
  key='contact'
        initial={{
          opacity:0
        }}
        animate={
           {
                opacity: 1,
              }
            
        }
        transition={{
          duration: 2,
        }}>
  <ContactContainer />
</motion.div>
<div className={classes.gridItem3}>

<Footer />
</div>




    </motion.div>
  )
}

export default Contact
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import classes from './Gallary.module.css'
import ImageContainer from '../Components/ImageContainer'
import SearchBar from '../Components/SearchBar'
import Modal from '../UI/Modal'
import { motion } from 'framer-motion';




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



const Gallary = () => {
  const [selectedImage,setSelectedImage]=useState(null)
  return (
    <motion.div className={classes.container}
     variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <Header />
        
        <SearchBar />
        <ImageContainer setSelectedImage={setSelectedImage} />
        <Footer />
       {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={ setSelectedImage }/>}
    </motion.div>
  )
}

export default Gallary


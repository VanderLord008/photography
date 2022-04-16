import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Menu.module.css';

const Menu = () => {
  // const as= useSelector((state) => state.menu.isVisible);

  const menuVariants={
    hidden:{
      x:'10em',
      
      

    },
    visible:{
      x:0,
      
    
    }
  }

  return (
    
  
    <motion.div 
    key="menu"
    variants={ menuVariants}
    initial='hidden'
    animate='visible'
    exit = {{
      x:'10em'
    }}
    transition={{
      duration:.5
    }}
    className={classes.container} 
    >

    <div className={classes.title}>
    <Link to="/" className="item" 
    style={{
      textDecoration:'none',
      color:'white'
    }}
    >
    <span>Home</span></Link>
    </div>
    
    <div className={classes.title}>
      <p>
      <Link to="/gallary" className="item"
      style={{
      textDecoration:'none',
      color:'white'
    }}
      >
      <span>Gallary</span></Link>
      </p> 
   
     
    </div>
    
    <div className={classes.title}>
    <p>
    <Link to="/contact" className="item"
    style={{
      textDecoration:'none',
      color:'white'
    }}
    ><span>Contact</span></Link>
      </p> 
     
    </div>
   
   

    
    
    
    </motion.div>
  
    
  )
}

export default Menu
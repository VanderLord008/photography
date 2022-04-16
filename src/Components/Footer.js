import { motion } from 'framer-motion';
import React from 'react'
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <motion.footer 
    initial={{
      y:'100vh'
    }}
    animate={{
      y:0
    }}
    transition={{
      duration:2
    }}

    >Created @2022</motion.footer>
  )
}

export default Footer
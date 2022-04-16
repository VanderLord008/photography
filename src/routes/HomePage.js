import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Lander from "../Components/Lander";
import classes from "./Homepage.module.css";
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


const HomePage = () => {
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
    <div className={classes.gridItem1}>
<Lander />
    </div>
    <div className={classes.gridItem1}>
<Footer />
    </div>
</motion.div>   
   
  );
};

export default HomePage;

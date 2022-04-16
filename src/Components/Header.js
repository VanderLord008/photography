import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";
import { useDispatch,useSelector } from "react-redux";
import { menuActions } from "../app/menuSlice";
import { Link } from "react-router-dom";



const Header = () => {

  const dispatch=useDispatch()

  const menu= useSelector((state) => state.menu.menuIsVisible);



const menuSelectorHandler=()=>{


    dispatch(menuActions.setMenuIsVisible(!menu))
 
    console.log('menu clicked');
  
  
}



  return (
    <>
      <motion.header className={classes.header} 
       initial={{
      opacity:0,
      y: '-100vh'
    }}
    animate={{
      opacity:1,
      y:0
    }}
    transition={{
      duration:2
    }}

 >
    <Link to="/" className={classes.item}
    style={{ textDecoration: 'none'   }}
    ><p>FRAMES</p></Link>

        
        <span onClick={menuSelectorHandler}>
        <span>Menu</span>
        <FontAwesomeIcon icon={faBars}  /> 
        </span>
      </motion.header>
    </>
  );
};

export default Header;

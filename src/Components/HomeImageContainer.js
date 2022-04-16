import React, { useEffect, useState } from "react";
import classes from "./HomeImageContainer.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { homeImageActions } from "../app/homeImageSlice";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";
import { menuActions } from "../app/menuSlice";
import HomeImage from "./HomeImage";
import rect from "./rect.svg";
import ana2 from '../Images/ana2-anna-evreva.jpg'



const HomeImageContainer = (props) => {
  const dispatch = useDispatch();

  




  const menuIsVisible = useSelector((state) => state.menu.menuIsVisible);




  return (
    <div>
      <motion.div
        className={classes.mainArea}
        key="imagessssss"
        initial={{
          x: 0,
        }}
        animate={
          menuIsVisible
            ? {
                x: "-10em",
                zIndex: 0,
              }
            : {}
        }
        transition={{
          duration: 0.5,
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <HomeImage
            src={props.selectedHomeImage}
            key={props.selectedHomeImage}
          />
          <div className={classes.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="00 00 700 200"
           
            >
              <motion.rect
                stroke="rgb(255, 255, 255)"
                fill="none"
                strokeWidth="42px"
                x='0'
                y='0'
                width='100%'
                height='100%'


initial={{
  pathLength:0
}}
animate={{
  pathLength:1,
  
}}
transition={{
  duration:5
}}

              />
            </svg>
            <span>FRAMES</span>
          </div>
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>{menuIsVisible && <Menu />}</AnimatePresence>
    </div>
  );
};

export default HomeImageContainer;

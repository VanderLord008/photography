import React from "react";
import classes from "./ModalBackground.module.css";
import { AnimatePresence, motion } from "framer-motion";

const ModalBackground = (props) => {
  return (
    <motion.div
      className={classes.container}
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
      }}
      onClick={() => props.setIsModalActive(false)}
    >
      <div
        className={classes.modal}
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          opacity: 1,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.info}>I will contact you soon. Thankyou.</div>
        <div className={classes.button}>
          <button 
          onClick={() => props.setIsModalActive(false)}>Go back</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalBackground;

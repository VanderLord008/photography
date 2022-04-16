import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { homeImageActions } from "../app/homeImageSlice";
import classes from "./LeftBar.module.css";
import store from "../app/store";
import { AnimatePresence, motion } from "framer-motion";

const LeftBar = (props) => {
  const dispatch = useDispatch();

  const imageFetcherDown = () => {
    const currentImageNumber = props.selectedHomeImageNumber;
    if (currentImageNumber < 4 && currentImageNumber >= 0) {
      props.setSelectedHomeImageNumber(currentImageNumber + 1);
      props.setSelectedHomeImage(props.homeImages[currentImageNumber + 1]);

      dispatch(homeImageActions.setSelectedImage(props.homeImages[currentImageNumber + 1]));
      dispatch(homeImageActions.setCurrentImageNumber(currentImageNumber + 1));
    }

    if (currentImageNumber === 4) {
      props.setSelectedHomeImageNumber(0);
      props.setSelectedHomeImage(props.homeImages[0]);
      dispatch(homeImageActions.setSelectedImage(props.homeImages[0]));
      dispatch(homeImageActions.setCurrentImageNumber(0));
    }
  };

  const imageFetcherUp = () => {
    const currentImageNumber = props.selectedHomeImageNumber;

    if (currentImageNumber > 0 && currentImageNumber <= 4) {
      props.setSelectedHomeImageNumber(currentImageNumber - 1);
      props.setSelectedHomeImage(props.homeImages[currentImageNumber - 1]);
      dispatch(
        homeImageActions.setSelectedImage(
          props.homeImages[currentImageNumber - 1]
        )
      );
      dispatch(homeImageActions.setCurrentImageNumber(currentImageNumber - 1));
    }
    if (currentImageNumber === 0) {
      props.setSelectedHomeImageNumber(4);
      props.setSelectedHomeImage(props.homeImages[4]);
      dispatch(homeImageActions.setSelectedImage(props.homeImages[4]));
      dispatch(homeImageActions.setCurrentImageNumber(4));
    }
  };

  return (
    <motion.div
      className={classes.leftBar}
      key="leftBar"
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: "0",
      }}
      transition={{
        duration: 2,
      }}
    >
      <div className={classes.up}>
        <FontAwesomeIcon icon={faAngleUp} onClick={imageFetcherUp} />
      </div>
      <div className={classes.down} onClick={imageFetcherDown}>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </motion.div>
  );
};

export default LeftBar;

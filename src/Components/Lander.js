import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../app/menuSlice";
import LeftBar from "../UI/LeftBar";
import RightBar from "../UI/RightBar";
import HomeImageContainer from "./HomeImageContainer";
import classes from "./Lander.module.css";
import Menu from "./Menu";
import ana2 from '../Images/ana2-anna-evreva.jpg'
import anastasia from '../Images/anastasia-anna-evreva.jpg'
import waterfall from '../Images/big-waterfall-dario-428.jpg'
import crane from '../Images/crowned-crane-721.jpg'
import king from '../Images/king-of-richmond.jpg'
import { homeImageActions } from "../app/homeImageSlice";


const Lander = () => {
  const dispatch = useDispatch();

  const offlineImages=[ana2,anastasia,waterfall,crane,king];


  const [homeImages, setHomeImages] = useState([]);
  const [selectedHomeImage, setSelectedHomeImage] = useState(null);
  const [selectedHomeImageNumber, setSelectedHomeImageNumber] = useState(0);

  const fetchImages = async () => {
    // const ab = await axios.get(
    //   `https://api.unsplash.com/photos/random?client_id=IsEWcxRXjoehAh5HAFgAlm0i1NMsEBKa44UmU2i0_4I&count=20&query=nature&page=1&per_page=10`
    // );
    // console.log("ab is ", ab);
    // const urls = ab.data;

    offlineImages.forEach(element => {
      setHomeImages((prev)=> [...prev,element]);
      dispatch(homeImageActions.setImageURLs(element));
    });
   
const randomNumber=Math.floor(Math.random() * 4);
console.log(randomNumber);
console.log(offlineImages[randomNumber]);
    setSelectedHomeImage(offlineImages[randomNumber]);
    console.log('selectedhomeimage is ' + selectedHomeImage);
    setSelectedHomeImageNumber(randomNumber)
    dispatch(homeImageActions.setSelectedImage(offlineImages[randomNumber]));
    dispatch(homeImageActions.setCurrentImageNumber(randomNumber));
  };

  useEffect(() => {
    dispatch(menuActions.setMenuIsVisible(false));

    fetchImages();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.gridItem1}>
        <LeftBar
          selectedHomeImage={selectedHomeImage}
          setSelectedHomeImage={setSelectedHomeImage}
          homeImages={homeImages}
          selectedHomeImageNumber={selectedHomeImageNumber}
          setSelectedHomeImageNumber={setSelectedHomeImageNumber}
        />
      </div>

      <div className={classes.gridItem2}>
        <HomeImageContainer selectedHomeImage={selectedHomeImage} />
      </div>

      <div className={classes.gridItem3}>
        {" "}
        <RightBar />
      </div>
    </div>
  );
};

export default Lander;

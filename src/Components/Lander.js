import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../app/menuSlice";
import LeftBar from "../UI/LeftBar";
import RightBar from "../UI/RightBar";
import HomeImageContainer from "./HomeImageContainer";
import classes from "./Lander.module.css";
import Menu from "./Menu";

const Lander = () => {
  const dispatch = useDispatch();

const [homeImages,setHomeImages]=useState([])
const [selectedHomeImage,setSelectedHomeImage]=useState(null)
const [selectedHomeImageNumber,setSelectedHomeImageNumber]=useState(0);


  const fetchImages = async () => {
    const ab = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=IsEWcxRXjoehAh5HAFgAlm0i1NMsEBKa44UmU2i0_4I&count=20&query=nature&page=1&per_page=10`
    );
    console.log("ab is ", ab);
    const urls = ab.data;
   
    setHomeImages(urls.map(url=>(
     [url.urls.full]
   )))

    setSelectedHomeImage(urls[2].urls.full)
  };


  useEffect(() => {
    dispatch(menuActions.setMenuIsVisible(false))

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
               setSelectedHomeImageNumber={ setSelectedHomeImageNumber} />
          </div>


    <div className={classes.gridItem2}> 
    <HomeImageContainer 
     selectedHomeImage={selectedHomeImage} 
             

                />
        </div>


    <div className={classes.gridItem3}> <RightBar /></div>

     
     
    </div>
  );
};

export default Lander;

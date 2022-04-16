
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../app/menuSlice";
import ImageCard from "./ImageCard";
import classes from "./ImageContainer.module.css";
import { AnimatePresence, motion } from 'framer-motion';
import Menu from "./Menu";


const ImageContainer = (props) => {
  const [images, setImages] = useState([]);
  const searchTerm = useSelector((state) => state.menu.searchTerm);
  const [loading, setLoading] = useState([false]);
  const isMounted = useRef(false);
  const menuIsVisible = useSelector((state) => state.menu.menuIsVisible);

  const dispatch=useDispatch()
  const fetchImages = async () => {
    await axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=IsEWcxRXjoehAh5HAFgAlm0i1NMsEBKa44UmU2i0_4I&count=20&query=${searchTerm}&page=1&per_page=10`
      )
      .then((res) => {
        setImages([...images, ...res.data]);
      });
  };

  useEffect(() => {

    dispatch(menuActions.setMenuIsVisible(false))

    fetchImages();
  }, []);

  const fetchNewImages=async()=>{
    console.log('i got new images');


    await axios
    .get(
      `https://api.unsplash.com/photos/random?client_id=IsEWcxRXjoehAh5HAFgAlm0i1NMsEBKa44UmU2i0_4I&count=20&query=${searchTerm}&page=1&per_page=10`
    )
    .then((res) => {
      setImages([...res.data]);
    });

  }


  useEffect(() => {
    if (isMounted.current) {
      fetchNewImages();
    } else {
      isMounted.current = true;
    }
  }, [searchTerm])



  return (
    <div className={classes.imageContainer} id="container">
      <div className={classes.gridItem1}>1</div>

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        scrollableTarget={"container"}
        
      >
        <motion.div 
        className={classes.gridItem2}
        key='imagess'
        initial={{
          x: 0,
        }}
        animate={
          menuIsVisible
            ? {
                x: "-10em",
                zIndex:0
              }
            : {
                
              }
        }
        transition={{
          duration: .5,
        }}
  
        >
          {images.map((image) => (
            <ImageCard 
            setSelectedImage={props.setSelectedImage}
            
             src={image.urls.regular} key={image.urls.regular} />
          ))}
        
        </motion.div>
         
 
        </InfiniteScroll>

        <AnimatePresence>
     {menuIsVisible &&( 
      <Menu />
    
     
       )
     }
        </AnimatePresence>

      
    


      <div className={classes.gridItem3}></div>
    </div>
  );
};

export default ImageContainer;

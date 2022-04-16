import React, { useEffect, useState } from "react";
import LeftBar from "../UI/LeftBar";
import RightBar from "../UI/RightBar";
import classes from "./ContactContainer.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { menuActions } from "../app/menuSlice";
import db from '../firebase'
import ModalBackground from "../UI/ModalBackground";

const ContactContainer = () => {
    const dispatch=useDispatch();
  const menuIsVisible = useSelector((state) => state.menu.menuIsVisible);
  useEffect(() => {

    dispatch(menuActions.setMenuIsVisible(false))

  }, []);



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const [isModalActive, setIsModalActive] = useState(false);


  const formSubmissionHandler=(e)=>{
    e.preventDefault();
    setIsModalActive(true)
 

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        
        setIsModalActive(true)
      })
      .catch((error) => {
        alert(error.message);
       
      });

    setName("");
    setEmail("");
    setMessage("");


  }

  return (
    <>
    <AnimatePresence>
{isModalActive && <ModalBackground setIsModalActive={setIsModalActive} />}
</AnimatePresence>
    <div className={classes.container}>
    
      <div className={classes.gridItem1}>
     
      </div>
      <motion.div
        className={classes.gridItem2}
        key="contact"
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
    
        <div className={classes.photo}>
          <img src="https://wallpaperaccess.com/full/32048.jpg" alt="" />
        </div>
        <div className={classes.info}>
          <div className={classes.wrapper}>
            <div className={classes.heading}> Contact </div>
            <hr />
            <div className={classes.information}>
              Now, as you were able to get a picture of who I am, how I work and
              what I can do for you and your brand, it is up to you to contact
              me and lay the foundation for a new and successful business
              relationship.
            </div>

            <div className={classes.personalInfo}>
              <div className={classes.name}>
                <div className={classes.author}>VAIBHAB TIWARI</div>
                <div className={classes.email}>vaibhabtiwari707@gmail.com</div>
                <div className={classes.number}>9680804614</div>
              </div>
              <div className={classes.add}>
                  NC-5 ,chandigarh university,Punjab
              </div>
            </div>

            <hr />

            <div className={classes.question}>Want to work with me?</div>

            <div className={classes.form}>
            <form onSubmit={formSubmissionHandler}>
                <input type="text" placeholder="Your name"  value={name}
        onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" 
                   value={email}
        onChange={(e) => setEmail(e.target.value)}

                />
                <input type="text" placeholder="Message"
                 value={message}
        onChange={(e) => setMessage(e.target.value)}
         />

                <button type="submit"
            style={{ background: isModalActive ? "#409eff80" : " rgb(2, 2, 110)" }}
            disabled={isModalActive?true:false}

                 >Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>{menuIsVisible && <Menu />}</AnimatePresence>

      <div className={classes.gridItem3}>
       
      </div>
    </div>

    </>
  );
};

export default ContactContainer;

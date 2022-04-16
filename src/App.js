import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Router, Routes ,useLocation} from "react-router-dom";
import "./App.css";
import Contact from "./routes/Contact";
import Gallary from "./routes/Gallary";
import HomePage from "./routes/HomePage";

function App() {
  const location =useLocation();
  return (
    <div className="App">
    <AnimatePresence exitBeforeEnter>
      <Routes location ={location} key={location.key}>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/gallary" element={<Gallary></Gallary>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDtqAXvd9zhHnEGPE8Z03h8RSnR9zbEkqA",
//     authDomain: "discord-7e548.firebaseapp.com",
//     projectId: "discord-7e548",
//     storageBucket: "discord-7e548.appspot.com",
//     messagingSenderId: "145541039818",
//     appId: "1:145541039818:web:d5d0d73c77d031b70dd633",
//     measurementId: "G-1Z2YQRD247"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyCdpFjMtcTzcBT7e3y23Svl9hGOWlzyDYE",
    authDomain: "photography-1e1cd.firebaseapp.com",
    projectId: "photography-1e1cd",
    storageBucket: "photography-1e1cd.appspot.com",
    messagingSenderId: "874345357652",
    appId: "1:874345357652:web:e57732aea67fe1448468c1",
    measurementId: "G-HM2YLJ80SC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

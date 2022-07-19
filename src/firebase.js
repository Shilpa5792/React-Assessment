
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDRTiwxrB2E6n4r32MIw3rSJ1-MvqQaCL8",
  authDomain: "react-authentication-4e6e7.firebaseapp.com",
  projectId: "react-authentication-4e6e7",
  storageBucket: "react-authentication-4e6e7.appspot.com",
  messagingSenderId: "347484240185",
  appId: "1:347484240185:web:fab47cd565882ee6ab10e8",
  measurementId: "G-MT1R9F7MQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
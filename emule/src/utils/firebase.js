// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2bbQyCx4RIiF09P9wqCMVsZdOFXX8EQc",
  authDomain: "react-shop-emuletor.firebaseapp.com",
  projectId: "react-shop-emuletor",
  storageBucket: "react-shop-emuletor.appspot.com",
  messagingSenderId: "83366110049",
  appId: "1:83366110049:web:267874b6b70a9ce9069b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Database
export const db = getFirestore(app)
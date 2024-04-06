// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyC2hb64sfbw-3jtJc7fWBv4Mt0pO6PtLtc",
  authDomain: "filmyverse-39ad2.firebaseapp.com",
  projectId: "filmyverse-39ad2",
  storageBucket: "filmyverse-39ad2.appspot.com",
  messagingSenderId: "23497195435",
  appId: "1:23497195435:web:a9bbe77ff658693e421cee",
  measurementId: "G-QHVM7H41Z1"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewsRef=collection(db,"reviews")
export const usersRef = collection(db, "users");

export default app
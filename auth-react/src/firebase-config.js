// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API,
  authDomain: process.env.REACT_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.REACT_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
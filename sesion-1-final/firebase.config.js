// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6PX1djRvIY2frtKUAhdbsWV877ONRKgU",
  authDomain: "proyecto-pi-7422b.firebaseapp.com",
  projectId: "proyecto-pi-7422b",
  storageBucket: "proyecto-pi-7422b.firebasestorage.app",
  messagingSenderId: "920627370593",
  appId: "1:920627370593:web:b98f889e4bb2884379a820",
  measurementId: "G-0EGY0JZLCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

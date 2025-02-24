// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getApps } from "firebase/app";

console.log("Firebase Apps:", getApps()); // Esto debería imprimir al menos 1 app

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB5NRgwaNln7LZdueO0_7ZgQFH4QHBH3s",
  authDomain: "proyecto-integrador-gr4.firebaseapp.com",
  projectId: "proyecto-integrador-gr4",
  storageBucket: "proyecto-integrador-gr4.firebasestorage.app",
  messagingSenderId: "183946161011",
  appId: "1:183946161011:web:c1ea1a1b39a0a57f0a7306",
  measurementId: "G-4CHWQ7S2C3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAhQCNKvu61WpfEbKuVFFAOejRPpPB4OSY",
  authDomain: "react-firebase-cedb6.firebaseapp.com",
  projectId: "react-firebase-cedb6",
  storageBucket: "react-firebase-cedb6.appspot.com",
  messagingSenderId: "76467063584",
  appId: "1:76467063584:web:376b98541923ce1388a545",
  measurementId: "G-P8ZN7D0H28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

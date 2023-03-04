// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVP6bcx0rGKznHCN2mPU9YCML5FqAUqFM",
  authDomain: "house-app-63557.firebaseapp.com",
  projectId: "house-app-63557",
  storageBucket: "house-app-63557.appspot.com",
  messagingSenderId: "264200941175",
  appId: "1:264200941175:web:978ed2f14eeb679d40a072"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
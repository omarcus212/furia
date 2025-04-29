// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3lRysUyLcHlbg7CeBAizTAksSGXMFQas",
  authDomain: "minhasimgfuria.firebaseapp.com",
  projectId: "minhasimgfuria",
  storageBucket: "minhasimgfuria.firebasestorage.app",
  messagingSenderId: "1068352214374",
  appId: "1:1068352214374:web:541de96c29ddd4bc1e24a7",
  measurementId: "G-W36TZKWYC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
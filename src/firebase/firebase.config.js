// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hoLbj0JkMmg03_7B_su2nEkFtZjIoOQ",
  authDomain: "agromart-30625.firebaseapp.com",
  projectId: "agromart-30625",
  storageBucket: "agromart-30625.appspot.com",
  messagingSenderId: "983725622031",
  appId: "1:983725622031:web:f76dc8a627e7c96369b47a",
  measurementId: "G-FGG3B31WQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
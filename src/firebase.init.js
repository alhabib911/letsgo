// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRAMUyg8DeG32Si_PjkT_206y782wSq0c",
  authDomain: "lets-go-56604.firebaseapp.com",
  projectId: "lets-go-56604",
  storageBucket: "lets-go-56604.appspot.com",
  messagingSenderId: "386504685602",
  appId: "1:386504685602:web:c6b93b94df0ac5c909327b",
  measurementId: "G-YYY6VBES62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app)
export default auth;
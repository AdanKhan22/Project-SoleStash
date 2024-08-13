// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs7lk3uFkyOaYBv6ny92C5eu1Nf1TkD_I",
  authDomain: "project-solestash.firebaseapp.com",
  projectId: "project-solestash",
  storageBucket: "project-solestash.appspot.com",
  messagingSenderId: "301382532127",
  appId: "1:301382532127:web:058c2130083615edd0a92a",
  measurementId: "G-5L9WX37DJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);


export {app , auth};
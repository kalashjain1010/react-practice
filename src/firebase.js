// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5v_nlNnJfJcwfIKUFfRZxQmBbUbUCdjQ",
  authDomain: "prac-fffa6.firebaseapp.com",
  projectId: "prac-fffa6",
  storageBucket: "prac-fffa6.appspot.com",
  messagingSenderId: "579618316235",
  appId: "1:579618316235:web:70081fa96548b7a7d0a04e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


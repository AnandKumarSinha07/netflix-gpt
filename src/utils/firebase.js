// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIt7oZ4WM_8dYCXbgy83qgrm_ZxxruvD4",
  authDomain: "netflixgpt-7a32c.firebaseapp.com",
  projectId: "netflixgpt-7a32c",
  storageBucket: "netflixgpt-7a32c.appspot.com",
  messagingSenderId: "253709929099",
  appId: "1:253709929099:web:a9b3cb4930bf716e0de28e",
  measurementId: "G-R583R5CP8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA54BKK9YGmy1mnE_yUkEuv6QS0-V8Ad0A",
  authDomain: "bistro-boss-restaurant-ada31.firebaseapp.com",
  projectId: "bistro-boss-restaurant-ada31",
  storageBucket: "bistro-boss-restaurant-ada31.appspot.com",
  messagingSenderId: "1064096312807",
  appId: "1:1064096312807:web:66531d4ddcee7224d4e142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

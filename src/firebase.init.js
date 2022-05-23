// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4MZUtgCbplHJkQ1DU_Ozb4Hil11A8yKY",
  authDomain: "manufacturing-industry-d2077.firebaseapp.com",
  projectId: "manufacturing-industry-d2077",
  storageBucket: "manufacturing-industry-d2077.appspot.com",
  messagingSenderId: "658225371192",
  appId: "1:658225371192:web:3d9895e0e19789f5606ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
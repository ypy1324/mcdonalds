// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const config = require("../../server/config/key.js");

const firebaseConfig = {
  apiKey: "AIzaSyAusJvnXLRyxmqAiq0EB1GXMZSoyV0nFNQ",
  authDomain: "mcdonalds-52a7b.firebaseapp.com",
  projectId: "mcdonalds-52a7b",
  storageBucket: "mcdonalds-52a7b.firebasestorage.app",
  messagingSenderId: "425240561574",
  appId: "1:425240561574:web:f16a87c298eded20b97167",
  measurementId: "G-6W00ZB341T",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

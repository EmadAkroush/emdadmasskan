// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzz96gKn_2t8IHeeNLk51bdbes_fSrbts",
  authDomain: "masskanet-13941.firebaseapp.com",
  databaseURL: "https://masskanet-13941-default-rtdb.firebaseio.com",
  projectId: "masskanet-13941",
  storageBucket: "masskanet-13941.appspot.com",
  messagingSenderId: "641826880052",
  appId: "1:641826880052:web:9cf82d9832a1735159a861",
  measurementId: "G-CST7L4P7HE"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db;
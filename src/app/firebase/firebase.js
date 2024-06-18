// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore



const db = firebase.firestore(); // Get a reference to Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAgNOM_CzTmFP6vvu74YZgydk9AM4OFzto",
  authDomain: "sir-web-d4b2a.firebaseapp.com",
  projectId: "sir-web-d4b2a",
  storageBucket: "sir-web-d4b2a.appspot.com",
  messagingSenderId: "107150404910",
  appId: "1:107150404910:web:929733be88efc9c7c2debf"
};

const app = initializeApp(firebaseConfig);



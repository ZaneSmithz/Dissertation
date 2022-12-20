// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXmIDHUSpGvZ1147meoS3of7iv_PrninY",
  authDomain: "dissproject-e975e.firebaseapp.com",
  projectId: "dissproject-e975e",
  storageBucket: "dissproject-e975e.appspot.com",
  messagingSenderId: "224691092754",
  appId: "1:224691092754:web:fe15e7df3a0d40cac7c7cb",
  measurementId: "G-PQ0SECL8VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
//import firebase from 'firebase/compat/db'
// import React from 'react'
import  firebase from "firebase/compat/app" 
import "firebase/compat/auth"
import "firebase/compat/firestore"
// abdirahman 

const FirebaseConfig = {
    apiKey: "AIzaSyABG8QVi8dpEugVHlYLEG_LvM368tu5HM8",
    authDomain: "linkedin-clone-f82eb.firebaseapp.com",
    projectId: "linkedin-clone-f82eb",
    storageBucket: "linkedin-clone-f82eb.appspot.com",
    messagingSenderId: "824583091065",
    appId: "1:824583091065:web:a53ef7c505f74cc27875a8"
  };
  firebase.initializeApp(FirebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db , auth};
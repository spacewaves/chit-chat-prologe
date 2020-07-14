import { StatusBar } from "expo-status-bar";
import React from "react";
import Providers from "./src/navigation/index.js";
import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// import * as firebase from 'firebase'
// auth().signInWithEmailAndPassword -> firebase.auth().signInWithEmailAndPassword

// token and url of our firebase database
const firebaseConfig = {
  apiKey: "AIzaSyBbj37yTnVrDxFbQaM67AJZUqFMYSZqpyo",
  authDomain: "chatapp-8bb50.firebaseapp.com",
  databaseURL: "https://chatapp-8bb50.firebaseio.com",
  projectId: "chatapp-8bb50",
  storageBucket: "chatapp-8bb50.appspot.com",
  messagingSenderId: "295295042711",
  appId: "1:295295042711:web:dd179eb413715c407695d2",
  measurementId: "G-1WT7CZFMLB",
};

// launch firebase so it can be used later in the app
firebase.initializeApp(firebaseConfig);

export default function App() {
  return <Providers />;
}

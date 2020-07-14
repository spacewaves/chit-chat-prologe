import { StatusBar } from "expo-status-bar";
import React from "react";
import Providers from "./src/navigation/index.js";

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

export default function App() {
  return <Providers />;
}

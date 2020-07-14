import { StatusBar } from "expo-status-bar";
import React from "react";
import Providers from "./src/navigation/index.js";

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBbj37yTnVrDxFbQaM67AJZUqFMYSZqpyo",
    authDomain: "chatapp-8bb50.firebaseapp.com",
    databaseURL: "https://chatapp-8bb50.firebaseio.com",
    projectId: "chatapp-8bb50",
    storageBucket: "chatapp-8bb50.appspot.com",
    messagingSenderId: "295295042711",
    appId: "1:295295042711:web:dd179eb413715c407695d2",
    measurementId: "G-1WT7CZFMLB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

export default function App() {
  return <Providers />;
}

import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
//import auth from "@react-native-firebase/auth";
import * as firebase from "firebase";
import "firebase/auth";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { AuthContext } from "./AuthProvider";
import Loading from "../components/Loading";

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);


  firebase.auth().onAuthStateChanged(function(user) {
    setUser(user);
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });


  firebase.auth().onAuthStateChanged(setUser(user) {
    if (initializing) { setInitializing(false);
      setLoading(false)
    }  
  });
  //Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

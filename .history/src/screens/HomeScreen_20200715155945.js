import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { List, Divider } from "react-native-paper";
import * as firebase from "firebase";
import "firebase/firestore";

import Loading from "../components/Loading";

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
      <Title>All chat rooms will be listed here</Title>
      <Title>{user.uid}</Title>
      <FormButton
        modeValue="contained"
        title="Logout"
        onPress={() => logout()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

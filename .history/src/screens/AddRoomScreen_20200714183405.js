import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Title } from "react-native-paper";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

export default function AddRoomScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create a new chat room</Text>
      <FormButton
        mode="contained"
        title="Close Modal"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

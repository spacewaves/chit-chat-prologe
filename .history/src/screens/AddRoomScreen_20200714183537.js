import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Title } from "react-native-paper";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

export default function AddRoomScreen({ navigation }) {
  const [roomName, setRoomName] = useState("");
  // ... Firestore query will come here later

  return (
    <View style={styles.rootContainer}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon="close-circle"
          size={36}
          color="#6646ee"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.innerContainer}>
        <Title style={styles.title}>Create a new chat room</Title>
        <FormInput
          labelName="Room Name"
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          clearButtonMode="while-editing"
        />
        <FormButton
          title="Create"
          modeValue="contained"
          labelStyle={styles.buttonLabel}
          onPress={() => handleButtonPress()}
          disabled={roomName.length === 0}
        />
      </View>
    </View>
  );
}

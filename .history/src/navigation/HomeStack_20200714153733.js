import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AddRoomScreen from "../screens/AddRoomScreen";

const ChatAppStack = createStackNavigator();
const ModalStack = createStackNavigator();
const Stack = createStackNavigator();

function ChatApp() {
  return (
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6646ee",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontSize: 22,
        },
      }}
    >
      <ChatAppStack.Screen name="Home" component={HomeScreen} />
    </ChatAppStack.Navigator>
  );
}

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6646ee",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontSize: 22,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

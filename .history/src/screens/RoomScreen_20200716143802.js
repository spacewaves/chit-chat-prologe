import React, { useState } from "react";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { IconButton } from "react-native-paper";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";

export default function RoomScreen({ route }) {
  const { user } = useContext(AuthContext);
  const currentUser = user.toJSON();
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "Henlo!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
      },
    },
  ]);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  }

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: "#6646ee",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#6646ee" />
      </View>
    );
  }
  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => handleSend(newMessage)}
      user={{ _id: 1 }}
      renderBubble={renderBubble}
      placeholder="Type your message here..."
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomComponentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

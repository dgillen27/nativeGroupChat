import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { getMessages, postMessage } from "../services/messages";

export default function MessageBoard({ user, socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("new message", async () => {
      const resp = await getMessages();
      setMessages(resp);
    });
  }, [socket]);

  useEffect(() => {
    async function getData() {
      const data = await getMessages();
      setMessages(data);
    }
    getData();
  }, []);

  return (
    <View style={styles.messageBoard}>
      <MessageList user={user} messages={messages} />
      {/* <MessageBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  messageBoard: {
    flex: 7,
    backgroundColor: "white"
  },
  userText: {
    backgroundColor: "blue"
  },
  text: {}
});

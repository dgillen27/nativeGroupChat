import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import MessageBoard from "./components/MessageBoard";
import socketIOClient from "socket.io-client";

export default function App() {
  const [user, setUser] = useState("");
  const endpoint = "https://dans-chat-app.herokuapp.com/";
  const socket = socketIOClient(endpoint);
  return (
    <View style={styles.container}>
      <NavBar user={user} setUser={setUser} />
      {!user && <Login user={user} setUser={setUser} />}
      {!!user && <MessageBoard user={user} socket={socket} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
});

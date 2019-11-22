import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MessageBoard({ user }) {
  return <View style={styles.messageBoard}></View>;
}

const styles = StyleSheet.create({
  messageBoard: {
    flex: 7,
    backgroundColor: "white"
  }
});

import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function MessageBar() {
  return (
    <View style={styles.messageList}>
      <TextInput value="chan" />
      <Button title="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  messageList: {
    flex: 5,
    backgroundColor: "green",
    position: "absolute",
    bottom: 0
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  }
});

import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function MessageList({ messages, user }) {
  return (
    <ScrollView>
      {!!messages.message &&
        messages.message.map((m, i) => (
          <View key={i}>
            <View style={styles.space}></View>
            {m.userName === user ? (
              <Text style={styles.userText}>{m.content}</Text>
            ) : (
              <Text style={styles.text}>
                {m.userName}: {m.content}
              </Text>
            )}
            <View style={styles.space}></View>
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messageList: {
    flex: 5
  },
  userText: {
    backgroundColor: "#1b89f5",
    color: "white",
    borderRadius: 25,
    padding: 10,
    maxWidth: 200,
    alignSelf: "flex-end"
  },
  text: {
    backgroundColor: "lightgrey",
    borderRadius: 25,
    padding: 10,
    maxWidth: 200
  },
  space: {
    height: 5,
    width: 10
  }
});

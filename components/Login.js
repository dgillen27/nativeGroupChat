import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login({ user, setUser }) {
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = e => {
    e.preventDefault();
    setInputValue(e.nativeEvent.text);
  };
  const login = e => {
    if (inputValue !== "") {
      e.preventDefault();
      setUser(inputValue);
      setInputValue("");
    } else {
      alert("Please enter your name to log in!");
    }
  };

  return (
    <View style={styles.login}>
      <Text>Welcome to the groupchat!</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChange={changeInputValue}
      />
      <Button onPress={login} title="Press me" />
      <Text>{user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 7,
    backgroundColor: "white"
    // justifyContent: "center",
    // alignItems: "center"
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    width: 100,
    height: 20
  }
});

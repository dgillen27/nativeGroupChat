import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function NavBar({ user, setUser }) {
  const logout = () => {
    setUser("");
  };
  return (
    <View style={styles.navBar}>
      <Text>{!!user ? `Welcome ${user}!` : "Please Sign In!"}</Text>
      {!!user && <Button title="Log Out" onPress={logout} />}
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    alignItems: "flex-end",
    justifyContent: "space-between"
  }
});

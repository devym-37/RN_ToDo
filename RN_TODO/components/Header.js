import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> React Native TODO APP </Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center"
  },
  title: {
    color: "#607D8B",
    fontSize: 26,
    fontWeight: "600",
    marginTop: 60,
    marginBottom: 60
  }
});

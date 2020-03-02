import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./components/Todo/Todo";

export default function App() {
  return <Todo />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

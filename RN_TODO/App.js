import React from "react";
import { StyleSheet } from "react-native";
import Todo from "./components/Todo/Todo";
import MainNavigation from "./components/navigation/MainNavigation";

export default function App() {
  return (
    // <Todo />
    <MainNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

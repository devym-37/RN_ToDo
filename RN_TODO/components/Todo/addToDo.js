import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const AddToDo = ({ newTask, inputTask, addTodo }) => (
  <View style={styles.container}>
    <View style={styles.todoBox}>
      <TextInput
        style={styles.input}
        placeholder={"Enter todo"}
        value={newTask}
        onChangeText={inputTask}
      />
      <TouchableOpacity onPress={() => addTodo()}>
        <FontAwesome
          name="plus-circle"
          size={38}
          color="#212121"
          style={styles.deleted}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default AddToDo;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  todoBox: {
    width: width - 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#607D8B",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  input: {
    width: width - 90,
    fontSize: 24,
    padding: 8,
    alignItems: "center"
  },
  deleted: {
    padding: 3,
    marginLeft: 3,
    backgroundColor: "#607D8B"
  }
});

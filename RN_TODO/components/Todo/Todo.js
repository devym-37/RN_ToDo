import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";
import TodoCard from "./TodoCard";

const { height, width } = Dimensions.get("window");

export class Todo extends Component {
  state = {
    newTask: ""
  };

  addNewTask = task => {
    this.setState({
      newTask: task
    });
  };

  render() {
    const { newTask } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}> React Native TODO APP </Text>
        <View style={styles.todoBox}>
          <TextInput
            style={styles.input}
            placeholder={"Enter todo"}
            value={newTask}
            onChangeText={this.addNewTask}
          />
        </View>
        <View style={styles.todoCard}>
          <ScrollView>
            <TodoCard />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  title: {
    color: "#607D8B",
    fontSize: 26,
    fontWeight: "600",
    marginTop: 60,
    marginBottom: 60
  },
  todoBox: {
    width: width - 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#607D8B",
    borderRadius: 5
  },
  input: {
    fontSize: 24,
    padding: 8,
    alignItems: "center"
  },
  todoCard: {
    width: width - 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#607D8B",
    borderRadius: 5
  }
});

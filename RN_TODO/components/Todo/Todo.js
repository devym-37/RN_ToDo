import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  Alert
} from "react-native";
import TodoCard from "./TodoCard";
import Header from "../Header";
import AddToDo from "./addToDo";
// import { todoApi } from "../../API";

const { height, width } = Dimensions.get("window");

const id = 0;

export class Todo extends Component {
  state = {
    newTask: ""
  };

  inputTask = task => {
    this.setState({
      newTask: task
    });
  };

  addTodo = () => {
    const { newTask } = this.state;
    if (newTask.length === 0) return Alert.alert("알림", "내용을 입력해주세요");
    const Task = {
      id: id++,
      content: newTask,
      complete: false,
      createAt: Date.now()
    };
    const newAddToDo = [...taskList, Task];
    this.setState({
      taskList: newAddToDo,
      newTask: ""
    });
  };

  // componentDidMount = async () => {};

  render() {
    const { newTask } = this.state;
    const { navigation } = this.props;
    const { inputTask, addTodo } = this;
    console.log("props1", this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <AddToDo newTask={newTask} inputTask={inputTask} addTodo={addTodo} />
        <View style={styles.todoCard}>
          <TodoCard text={"test text"} navigation={navigation} />
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

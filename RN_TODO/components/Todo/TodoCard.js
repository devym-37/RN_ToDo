import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

class TodoCard extends Component {
  state = {
    taskCompleted: false,
    taskDelet: false
  };

  toggleCompletedTask = () => {
    this.setState(prevState => {
      return {
        taskCompleted: !prevState.taskCompleted
      };
    });
  };

  render() {
    const { taskCompleted } = this.state;
    const { text, navigation } = this.props;
    console.log("props", this.props);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleCompletedTask}>
          {taskCompleted ? (
            <MaterialCommunityIcons
              name="check-circle-outline"
              size={24}
              color="green"
              style={styles.icon}
            />
          ) : (
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={24}
              color="#607D8B"
              style={styles.icon}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ToDoDetail")}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="trash-o"
            size={26}
            color="#E91E63"
            style={styles.deleted}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon: {
    marginLeft: 10
  },
  text: {
    width: width - 120,
    fontSize: 24,
    padding: 10,
    fontWeight: "400",
    backgroundColor: "red"
  },
  deleted: {
    marginRight: 15
  }
});

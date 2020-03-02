import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

class TodoCard extends Component {
  state = {
    Completed: false
  };

  toggleCompletedTask = () => {
    this.setState(prevState => {
      return {
        Completed: !prevState.Completed
      };
    });
  };

  render() {
    const { Completed } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleCompletedTask}>
          <View
            style={[
              styles.circle,
              Completed ? styles.completedCircle : styles.uncompletedCircle
            ]}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Test Todo Card</Text>
      </View>
    );
  }
}

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 3,
    marginLeft: 10
  },
  completedCircle: {
    borderColor: "red"
  },
  uncompletedCircle: {
    borderColor: "#607D8B"
  },

  text: {
    fontSize: 20,
    padding: 10,
    fontWeight: "400"
  }
});

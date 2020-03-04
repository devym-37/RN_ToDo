import React from "react";
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

const TodoCardDetail = () => (
  <View style={styles.container}>
    <Text>ToDo Card Detail</Text>
  </View>
);

export default TodoCardDetail;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center"
  }
});

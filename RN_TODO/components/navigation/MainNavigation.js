import * as React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Todo";
import ToDoDetail from "../Todo/TodoCardDetail";

const Stack = createStackNavigator();

export default MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        options={{
          headerShown: false
        }}
        component={Home}
      />
      <Stack.Screen
        name="ToDoDetail"
        options={{
          headerShown: false
        }}
        component={ToDoDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

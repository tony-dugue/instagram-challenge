import React from "react"

import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";
import LoginScreen from "../screens/LoginScreen";

const SignedInStack = () => {

  const Stack = createStackNavigator()
  const screenOptions = { headerShown: false }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LoginScreen} screenOptions={screenOptions}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack

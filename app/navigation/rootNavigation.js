import React from "react"

import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";

const SignedInStack = () => {

  const Stack = createStackNavigator()
  const screenOptions = { headerShown: false }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeScreen} screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack

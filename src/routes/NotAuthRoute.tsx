import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import StartScreen from "../screens/StartScreen";
import ForgotPassword from "../screens/ForgotPassword";
import ContactUsScreen from "../screens/ContactUs";

const Stack = createStackNavigator();

const NotAuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ContactUs" component={ContactUsScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default NotAuthRoutes;

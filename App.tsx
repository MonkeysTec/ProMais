import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import News from "./src/screens/News";
import Bipador from "./src/screens/Bipador";
import QRCodeScreen from "./src/screens/QRCodeScreen";
import ProfileScreen from "./src/screens/Profile";
import SplashScreenComponent from "./src/screens/Splash";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import Forgot from "./src/screens/Forgot";
import { Ionicons } from "@expo/vector-icons";
import Routes from "./src/routes/index";
import { AuthProvider } from "./src/context/LoginContext";
import HomeScreen from "./src/screens/Home";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const App: React.FC = () => {
  return (
    <NavigationContainer>
      {/* //@ts-ignore */}
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;

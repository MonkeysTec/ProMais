import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./src/routes/index";
import { AuthProvider } from "./src/context/LoginContext";
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

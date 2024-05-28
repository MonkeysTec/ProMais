import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import QRCodeScreen from './src/screens/QRCodeScreen';
import ProfileScreen from './src/screens/Profile';
import SplashScreenComponent from './src/screens/Splash';
import StartScreen from './src/screens/StartScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Forgot from './src/screens/Forgot';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'QRCode') {
          iconName = 'camera';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }

        size = focused ? size + 4 : size;

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#85d151',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" options={{ headerShown: false }}   component={HomeScreen} />
    <Tab.Screen name="QRCode" component={QRCodeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreenComponent} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

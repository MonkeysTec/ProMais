import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/Home';
import News from '../screens/News';
import Bipador from '../screens/Bipador';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QRCodeScreen from '../screens/QRCodeScreen';
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
    <Tab.Screen name="QRCode" options={{ headerShown: false }}   component={QRCodeScreen} />
    <Tab.Screen name="Profile" options={{ headerShown: false }}   component={HomeScreen} />


  </Tab.Navigator>
);
const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        headerShown:false,
        headerBackTitleVisible: false,
      
        cardStyle: { backgroundColor: 'white' },
        
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="TotalEnergies" component={News} />
      <Stack.Screen name="Bipador" component={Bipador} />
      <Stack.Screen name="News" component={News} />






    </Stack.Navigator>
  );
};

export default AuthRoutes;

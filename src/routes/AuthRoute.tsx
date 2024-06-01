import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/Home';
import News from '../screens/News';
import Bipador from '../screens/Bipador';
import QRCodeScreen from '../screens/QRCodeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for other screens
const StackNavigator: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'white' },
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TotalEnergies" component={News} />
    <Stack.Screen name="Bipador" component={Bipador} />
    <Stack.Screen name="News" component={News} />
  </Stack.Navigator>
);

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
    <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
    <Tab.Screen name="QRCode" component={QRCodeScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={HomeScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const AuthRoutes: React.FC = () => {
  return <TabNavigator />;
};

export default AuthRoutes;

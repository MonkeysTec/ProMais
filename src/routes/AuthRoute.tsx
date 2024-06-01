import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/Home';
import News from '../screens/News';
import Bipador from '../screens/Bipador';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/Profile';
import FAQScreen from '../screens/FAQ';
import TermsScreen from '../screens/Terms';
import RulesScreen from '../screens/Regras';
import ContactUsScreen from '../screens/ContactUs';
import ProfileConfigScreen from '../screens/ProfileConfig';

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
    <Tab.Screen name="Profile" options={{ headerShown: false }}   component={ProfileScreen} />
    <Tab.Screen name="FAQ" options={{ headerShown: false }}   component={FAQScreen} />
    <Tab.Screen name="Terms" options={{ headerShown: false }}   component={TermsScreen} />
    <Tab.Screen name="Rules" options={{ headerShown: false }}   component={RulesScreen} />
    <Tab.Screen name="ContactUs" options={{ headerShown: false }}   component={ContactUsScreen} />
    <Tab.Screen name="ProfileConfig" options={{ headerShown: false }}   component={ProfileConfigScreen} />

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
      <Stack.Screen name="FAQ"  component={TabNavigator} />
      <Stack.Screen name="Terms"  component={TabNavigator} />
      <Stack.Screen name="Rules"  component={TabNavigator} />
      <Stack.Screen name="ContactUs"  component={TabNavigator} />
      <Stack.Screen name="ProfileConfig" component={ProfileConfigScreen} />




    </Stack.Navigator>
  );
};

export default AuthRoutes;

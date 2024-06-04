import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/Home';
import News from '../screens/News';
import Bipador from '../screens/Bipador';
import ProfileScreen from '../screens/Profile';
import FAQScreen from '../screens/FAQ';
import TermsScreen from '../screens/Terms';
import RulesScreen from '../screens/Regras';
import ContactUsScreen from '../screens/ContactUs';
import ProfileConfigScreen from '../screens/ProfileConfig';

import QRCodeScreen from '../screens/QRCodeScreen';

const Stack = createStackNavigator();

import DistributorsScreen from '../screens/Distributors';
import ProductsScreen from '../screens/Products';
import { Redeem } from '../screens/Redeem';
import ChangePassword from '../screens/ChangePassword';

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
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="ProfileConfig" component={ProfileConfigScreen} />
    <Stack.Screen name="FAQ" component={FAQScreen} />
    <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    <Stack.Screen name="Rules" component={RulesScreen} />
    <Stack.Screen name="Terms" component={TermsScreen} />
    <Stack.Screen name="Products" component={ProductsScreen} />
    <Stack.Screen name="Distributors" component={DistributorsScreen} />
    <Stack.Screen name="Redeem" component={Redeem} />
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
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
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

const AuthRoutes: React.FC = () => {
  return <TabNavigator />;
};

export default AuthRoutes;

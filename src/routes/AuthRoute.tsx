import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/Home';
import News from '../screens/News';
import Bipador from '../screens/Bipador';

const Stack = createStackNavigator();

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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TotalEnergies" component={News} />
      <Stack.Screen name="Bipador" component={Bipador} />
      <Stack.Screen name="News" component={News} />






    </Stack.Navigator>
  );
};

export default AuthRoutes;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const NotAuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      
      screenOptions={{
       
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: 'white' },
        
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={SignUp} />

      



    </Stack.Navigator>
  );
};

export default NotAuthRoutes;

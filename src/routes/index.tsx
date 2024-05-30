import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/LoginContext';
import NotAuthRoutes from './NotAuthRoute';
import AuthRoutes from './AuthRoute';

const Stack = createStackNavigator();

const Routes = () => {
const { user, login, logout } = useAuth();

  return (
   <>
    {
      user?(
        <AuthRoutes/>
      ):(
        <NotAuthRoutes/>
      )
    }
   </>
  );
};

export default Routes;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context/LoginContext";
import NotAuthRoutes from "./NotAuthRoute";
import AuthRoutes from "./AuthRoute";



const Routes = () => {
  const { user } = useAuth();

  return <>{!user ? <AuthRoutes /> : <NotAuthRoutes />}</>;
};

export default Routes;

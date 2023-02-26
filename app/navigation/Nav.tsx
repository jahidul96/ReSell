import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "./BottomNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleProductDetails from "../screens/SingleProductDetails";
import Explore from "../screens/Explore";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="ProductDetails" component={SingleProductDetails} />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

export default Nav;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "./BottomNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleProductDetails from "../screens/SingleProductDetails";

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="ProductDetails" component={SingleProductDetails} />
    </Stack.Navigator>
  );
};

export default Nav;

const styles = StyleSheet.create({});

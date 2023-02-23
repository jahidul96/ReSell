import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SingleProductDetails from "./app/screens/SingleProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./app/navigation/BottomNav";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Main"
          component={gestureHandlerRootHOC(BottomNav)}
        />
        <Drawer.Screen
          name="Details"
          component={gestureHandlerRootHOC(SingleProductDetails)}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

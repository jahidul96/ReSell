import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Nav from "./app/navigation/Nav";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Main" component={gestureHandlerRootHOC(Nav)} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

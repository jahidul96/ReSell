import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Animated, TouchableNativeFeedback } from "react-native";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AntDesign, Fontisto, Ionicons } from "../utils/Icons";
import { AppColor } from "../utils/AppColors";
import Home from "../screens/Home";
import Search from "../screens/Search";
import CreatePost from "../screens/CreatePost";
import Favorite from "../screens/Favorite";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const navigation = useNavigation<any>();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name == "Home")
            return (
              <Ionicons
                name="home"
                size={focused ? 25 : 20}
                color={focused ? AppColor.navyBlue : AppColor.gray}
              />
            );

          if (route.name == "CreatePost") {
            return (
              <Animated.View style={styles.btnCircle}>
                <TouchableNativeFeedback
                  style={styles.qrWrapper}
                  onPress={() => navigation.navigate("CreatePost")}
                >
                  <AntDesign
                    name="pluscircle"
                    size={focused ? 25 : 20}
                    color={focused ? AppColor.navyBlue : AppColor.gray}
                  />
                </TouchableNativeFeedback>
              </Animated.View>
            );
          }
          if (route.name == "Search")
            return (
              <Ionicons
                name="search"
                size={focused ? 25 : 20}
                color={focused ? AppColor.navyBlue : AppColor.gray}
              />
            );
          if (route.name == "Favorite")
            return (
              <Fontisto
                name="favorite"
                size={focused ? 25 : 20}
                color={focused ? AppColor.navyBlue : AppColor.gray}
              />
            );
          if (route.name == "Profile")
            return (
              <Ionicons
                name="person"
                size={focused ? 25 : 20}
                color={focused ? AppColor.navyBlue : AppColor.gray}
              />
            );
        },

        headerShown: false,
        tabBarActiveTintColor: AppColor.navyBlue,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 10,
          marginTop: -6,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
    bottom: 25,
  },
  qrWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  qrIconStyle: {
    width: 30,
    height: 30,
  },
});

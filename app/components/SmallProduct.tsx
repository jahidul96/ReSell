import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColors";
import { TextComp } from "./Reuseable";
import { AntDesign, FontAwesome5 } from "../utils/Icons";
import { useNavigation } from "@react-navigation/native";

const img = "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg";

const SmallProduct = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <Image source={{ uri: img }} style={styles.imgStyle} />
      <View style={styles.bottomContainer}>
        <TextComp text={"Asus ZeeBook"} extraStyle={styles.name} />
        <View style={[styles.locationWraper, { marginVertical: 5 }]}>
          <FontAwesome5 name="map-marker-alt" size={13} color={AppColor.gray} />
          <TextComp text="Dhaka" extraStyle={styles.location} />
        </View>
        <View style={[styles.locationWraper]}>
          <AntDesign name="tags" size={13} color={AppColor.gray} />
          <TextComp text="20,999" extraStyle={styles.location} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SmallProduct;

const styles = StyleSheet.create({
  container: {
    width: "49%",

    backgroundColor: AppColor.white,
    borderRadius: 10,
    // marginBottom: 2,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    paddingBottom: 15,
  },
  imgStyle: {
    width: "100%",
    height: 80,
  },
  bottomContainer: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  locationWraper: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: "bold",
  },
});

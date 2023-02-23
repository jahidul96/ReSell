import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColors";
import { TextComp } from "./Reuseable";
import { AntDesign, FontAwesome5, Fontisto } from "../utils/Icons";
import { useNavigation } from "@react-navigation/native";

const img = "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg";

const ProductItem = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details")}
    >
      {/* add to fav comp */}
      <View style={styles.addToFav}>
        <Fontisto name="favorite" color={AppColor.white} size={20} />
      </View>

      <View style={styles.imgWrapper}>
        <Image source={{ uri: img }} style={styles.imgStyle} />
      </View>
      <View
        style={{
          marginLeft: 10,
        }}
      >
        <TextComp text="Asus GXR12993" extraStyle={styles.nameStyle} />
        <View style={[styles.locationWraper, { marginVertical: 6 }]}>
          <AntDesign name="tags" size={16} color="red" />
          <TextComp text="20,999" extraStyle={styles.price} />
        </View>

        <View style={styles.locationWraper}>
          <FontAwesome5 name="map-marker-alt" size={16} color="red" />
          <TextComp text="Dhaka" extraStyle={styles.location} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: AppColor.white,
    borderWidth: 1,
    borderColor: AppColor.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  imgWrapper: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: "100%",
    height: "60%",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  locationWraper: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: 6,
  },
  addToFav: {
    position: "absolute",
    width: 35,
    height: 35,
    backgroundColor: AppColor.navyBlue,
    right: 10,
    top: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

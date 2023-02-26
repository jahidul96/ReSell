import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { HEIGHT } from "../utils/AppDimension";
import { AppColor } from "../utils/AppColors";
import { TextComp } from "./Reuseable";
import { Ionicons, MaterialCommunityIcons } from "../utils/Icons";
import { useNavigation } from "@react-navigation/native";

const img = "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg";

const FavItem = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <Image source={{ uri: img }} style={styles.imgStyle} />

      <View style={styles.detailsContainer}>
        <View>
          <TextComp
            text={"Asus latop for sale"}
            extraStyle={{ fontWeight: "bold", fontSize: 14, marginBottom: 2 }}
          />

          <TextComp
            text={"20,000.00"}
            extraStyle={{ fontWeight: "bold", fontSize: 17 }}
          />
          <View style={styles.dateWrapper}>
            <Ionicons name="time-outline" size={16} color={AppColor.gray} />
            <TextComp
              text={"20/12/33"}
              extraStyle={{ fontSize: 12, color: AppColor.gray, marginLeft: 5 }}
            />
          </View>
        </View>

        <Pressable
          style={{
            width: 40,
            height: 40,
            backgroundColor: AppColor.darkGray,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="delete" size={20} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default FavItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: HEIGHT / 3.3,
    backgroundColor: AppColor.white,
    borderRadius: 10,

    marginBottom: 10,
    paddingBottom: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  imgStyle: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    width: "100%",
    height: "40%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";
import { AppColor } from "../utils/AppColors";
import { Fontisto, Ionicons } from "../utils/Icons";

interface textInterFace {
  text: any;
  extraStyle?: any;
}

export const TextComp: FC<textInterFace> = ({ text, extraStyle }) => (
  <Text style={[styles.textStyle, extraStyle]}>{text}</Text>
);

export const SearchPlaceHolder = () => (
  <TouchableOpacity style={styles.searchContainer}>
    <Text
      style={{
        color: AppColor.gray,
      }}
    >
      search
    </Text>
    <Ionicons name="search" size={16} color={AppColor.gray} />
  </TouchableOpacity>
);

interface phoneProps {
  number: any;
}

export const PhoneComp: FC<phoneProps> = ({ number }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    }}
  >
    <View
      style={{
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColor.navyBlue,
        borderRadius: 100,
      }}
    >
      <Fontisto name="phone" size={12} color={AppColor.white} />
    </View>
    <TextComp
      text={number}
      extraStyle={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}
    />
  </View>
);

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: AppColor.black,
  },
  searchContainer: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: AppColor.white,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
});

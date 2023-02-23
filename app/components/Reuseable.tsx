import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import { AppColor } from "../utils/AppColors";
import { Ionicons } from "../utils/Icons";

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

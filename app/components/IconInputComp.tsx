import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Ionicons } from "../utils/Icons";
import InputComp from "./InputComp";
import { AppColor } from "../utils/AppColors";

interface Props {
  placeholder: string;
  icon: any;
}

const IconInputComp: FC<Props> = ({ placeholder, icon }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: AppColor.darkGray,
        borderBottomWidth: 1,
        paddingHorizontal: 15,
      }}
    >
      {icon}

      <InputComp placeholder={placeholder} extraStyle={{ width: "90%" }} />
    </View>
  );
};

export default IconInputComp;

const styles = StyleSheet.create({});

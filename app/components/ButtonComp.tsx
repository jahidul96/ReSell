import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { FC } from "react";
import { AppColor } from "../utils/AppColors";

interface Props {
  text: string;
  onPress: any;
}
const ButtonComp: FC<Props> = ({ text, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColor.yellow,
  },

  text: {
    color: AppColor.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

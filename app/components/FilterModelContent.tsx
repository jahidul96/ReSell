import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { FC } from "react";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { AppColor } from "../utils/AppColors";
import { TextComp } from "./Reuseable";

interface Props {
  onPress: any;
}

const FilterModelContent: FC<Props> = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.contentWrapper}>
        <TextComp text="Not Implimented" />
      </View>
    </Pressable>
  );
};

export default FilterModelContent;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    width: 300,
    height: 300,
    backgroundColor: AppColor.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

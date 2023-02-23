import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { FC } from "react";

interface Props {
  placeholder: string;
  extraStyle?: any;
}

const InputComp: FC<Props> = ({ placeholder, extraStyle }) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.inputStyle, extraStyle]}
  />
);

export default InputComp;

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    backgroundColor: "transparent",
    paddingLeft: 6,
  },
});

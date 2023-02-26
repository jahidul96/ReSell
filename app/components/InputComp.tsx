import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { FC } from "react";

interface Props {
  placeholder: string;
  extraStyle?: any;
  multiline?: boolean;
}

const InputComp: FC<Props> = ({ placeholder, extraStyle, multiline }) => (
  <TextInput
    multiline={multiline}
    placeholder={placeholder}
    style={[styles.inputStyle, extraStyle, multiline && { paddingTop: 10 }]}
    textAlignVertical={multiline ? "top" : "auto"}
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

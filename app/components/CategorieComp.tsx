import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { FC } from "react";
import { categieProps } from "../utils/interfaces";
import { TextComp } from "./Reuseable";
import { useNavigation } from "@react-navigation/native";

interface Props {
  categorie: categieProps;
}

const CategorieComp: FC<Props> = ({ categorie }) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      key={categorie.id}
      style={styles.categorieItem}
      onPress={() => navigation.navigate("Explore")}
    >
      <Image source={categorie.icon} style={styles.iconImgStyle} />
      <TextComp text={categorie.name} extraStyle={styles.itemName} />
    </Pressable>
  );
};

export default CategorieComp;

const styles = StyleSheet.create({
  categorieItem: {
    width: "33%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImgStyle: {
    width: 35,
    height: 35,
  },
  itemName: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
  },
});

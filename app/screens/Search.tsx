import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { TopBackHeader } from "../components/Reuseable";
import InputComp from "../components/InputComp";
import { Ionicons } from "../utils/Icons";
import { AppColor } from "../utils/AppColors";
import ProductItem from "../components/ProductItem";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Search = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={AppColor.white} barStyle={"dark-content"} /> */}
      <View
        style={{
          paddingBottom: 5,
          paddingHorizontal: 10,
        }}
      >
        {/*  header */}
        <TopBackHeader filter />

        {/* serach bar */}
        <View style={styles.searchContainer}>
          <InputComp placeholder="Search" extraStyle={{ width: "80%" }} />
          <Ionicons name="search" size={16} color={AppColor.gray} />
        </View>
      </View>

      {/* scrool content */}

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 15,
          paddingTop: 5,
        }}
      >
        {data.map((d) => (
          <ProductItem key={d} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  searchContainer: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: AppColor.darkGray,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

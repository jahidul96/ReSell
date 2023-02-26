import { StyleSheet, Text, View, ScrollView, Modal, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { TopBackHeader } from "../components/Reuseable";
import InputComp from "../components/InputComp";
import { Ionicons } from "../utils/Icons";
import { AppColor } from "../utils/AppColors";
import ProductItem from "../components/ProductItem";
import { productData } from "../data/productData";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import FilterModelContent from "../components/FilterModelContent";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Search = () => {
  const [filter, setFilter] = useState(false);
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={AppColor.white} barStyle={"dark-content"} /> */}
      <View style={styles.topBarStyle}>
        {/*  header */}
        <TopBackHeader
          filter
          color={AppColor.white}
          onPress={() => setFilter(!filter)}
        />

        {/* serach bar */}
        <View style={styles.searchContainer}>
          <InputComp placeholder="Search" extraStyle={{ width: "80%" }} />
          <Ionicons name="search" size={16} color={AppColor.gray} />
        </View>
      </View>

      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={filter}
        onRequestClose={() => {
          setFilter(!filter);
        }}
      >
        <FilterModelContent onPress={() => setFilter(!filter)} />
      </Modal>

      {/* scrool content */}

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 15,
          paddingTop: 5,
        }}
      >
        {productData.map((product) => (
          <ProductItem key={product.id} product={product} />
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
  topBarStyle: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: AppColor.navyBlue,
  },
  searchContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: AppColor.white,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

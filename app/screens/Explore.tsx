import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { AppColor } from "../utils/AppColors";
import SmallProduct from "../components/SmallProduct";
import { TopBackHeader } from "../components/Reuseable";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const Explore = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <TopBackHeader text="Explore" />
      </View>

      {/* all content */}
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.itemWrapper}
        renderItem={({ item }) => <SmallProduct />}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    paddingHorizontal: 8,
    paddingTop: 5,
    flexWrap: "wrap",
    paddingBottom: 5,
    justifyContent: "space-between",
  },
});

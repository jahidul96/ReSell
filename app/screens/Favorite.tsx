import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import { TextComp, TopBackHeader } from "../components/Reuseable";
import { WIDTH } from "../utils/AppDimension";
import { AppColor } from "../utils/AppColors";
import { Fontisto } from "../utils/Icons";
import ProductItem from "../components/ProductItem";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Favorite = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={AppColor.navyBlue}
        barStyle={"light-content"}
      />
      {/* top content */}
      <View style={styles.topContainer}>
        <TopBackHeader color={AppColor.white} />

        {/* placeholder content */}
        <View style={styles.placeholderContainer}>
          <View style={styles.iconWraper}>
            <Fontisto name="favorite" color={AppColor.white} size={20} />
            <TextComp
              text="Favorite listings"
              extraStyle={styles.placeholdertext}
            />
          </View>

          <View style={styles.favCounterContainer}>
            <TextComp text={data.length} extraStyle={{ fontWeight: "bold" }} />
          </View>
        </View>
      </View>

      {/* all fav */}

      <ScrollView
        style={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      >
        {data.map((d) => (
          <ProductItem key={d} fav />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  topContainer: {
    width: WIDTH,
    backgroundColor: AppColor.navyBlue,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  iconWraper: {
    flexDirection: "row",
    alignItems: "center",
  },
  placeholderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholdertext: {
    color: AppColor.white,
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
  },

  favCounterContainer: {
    width: 30,
    height: 30,
    backgroundColor: AppColor.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

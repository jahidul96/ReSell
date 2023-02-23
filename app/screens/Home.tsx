import {
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { AppColor } from "../utils/AppColors";
import { Ionicons } from "../utils/Icons";
import { SearchPlaceHolder, TextComp } from "../components/Reuseable";
import { categoriesData } from "../data/categories";
import ProductItem from "../components/ProductItem";
import CategorieComp from "../components/CategorieComp";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      style={styles.container}
    >
      <StatusBar backgroundColor={AppColor.navyBlue} barStyle="light-content" />

      {/* top content */}
      <View style={styles.topContainer}>
        {/* menu icon */}
        <Ionicons
          name="menu"
          size={32}
          color={AppColor.white}
          onPress={() => navigation.openDrawer()}
        />

        {/* search bar  */}
        <View style={styles.searchContentWrapper}>
          <TextComp
            text="Sell & Buy Near You"
            extraStyle={styles.extraTextStyle}
          />
          <SearchPlaceHolder />
        </View>
      </View>

      {/* bottom content */}
      <View style={styles.bottomContainer}>
        {/* categorie content */}
        <View style={styles.categorieContainer}>
          {categoriesData.map((categorie) => (
            <CategorieComp categorie={categorie} key={categorie.id} />
          ))}
        </View>

        {/*Featured ads */}
        <View style={styles.featuredTextContainer}>
          <TextComp text="Featured Ads" extraStyle={styles.featuredText} />
          <Pressable onPress={() => alert(11)}>
            <TextComp text={"See All"} extraStyle={{ color: "red" }} />
          </Pressable>
        </View>

        <View style={{ marginVertical: 10 }}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  topContainer: {
    width: WIDTH,
    height: HEIGHT / 2,
    backgroundColor: AppColor.navyBlue,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  searchContentWrapper: {
    marginTop: 20,
  },
  extraTextStyle: {
    textAlign: "center",
    marginBottom: 13,
    color: AppColor.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  bottomContainer: {
    width: "100%",
    paddingHorizontal: 15,
  },

  categorieContainer: {
    width: "100%",
    backgroundColor: AppColor.white,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 3,
    zIndex: 1,
    marginTop: -200,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 30,
  },

  //featured content style
  featuredTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  featuredText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

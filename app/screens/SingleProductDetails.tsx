import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { AppColor } from "../utils/AppColors";
import { HEIGHT, WIDTH } from "../utils/AppDimension";
import { PhoneComp, TextComp } from "../components/Reuseable";
import { AntDesign, FontAwesome5, Fontisto, Ionicons } from "../utils/Icons";
import { useNavigation } from "@react-navigation/native";

const img = "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg";

const SingleProductDetails = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView
      style={styles.container}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor={AppColor.navyBlue} barStyle="light-content" />

      {/* backbutton */}
      <View style={styles.topBackWrapper}>
        <Ionicons
          name="arrow-back"
          size={25}
          onPress={() => navigation.goBack()}
        />

        <TouchableOpacity
          style={{
            width: 34,
            height: 34,
            borderRadius: 100,
            backgroundColor: AppColor.navyBlue,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fontisto name="favorite" color={AppColor.white} size={16} />
        </TouchableOpacity>
      </View>

      {/* all content */}

      {/* showcase img  */}
      <Image source={{ uri: img }} style={styles.imgStyle} />

      {/* details content */}
      <View style={styles.detailsWrapper}>
        <TextComp
          text={"Asus Laptop For sell"}
          extraStyle={styles.titleStyle}
        />

        <View style={styles.dateandLocationWrapper}>
          <View style={styles.locationWraper}>
            <FontAwesome5
              name="map-marker-alt"
              size={16}
              color={AppColor.gray}
            />
            <TextComp text="Dhaka" extraStyle={styles.location} />
          </View>
          <View style={[styles.locationWraper, styles.dateContainer]}>
            <AntDesign name="eyeo" size={18} color={AppColor.gray} />
            <TextComp text="100" extraStyle={styles.viewCounter} />
          </View>
          <View style={[styles.locationWraper, styles.dateContainer]}>
            <Ionicons name="time-outline" size={16} color={AppColor.gray} />
            <TextComp text="12/10/10" extraStyle={styles.viewCounter} />
          </View>
        </View>

        {/* price */}

        <View style={[styles.locationWraper]}>
          <AntDesign name="tags" size={18} color={AppColor.gray} />
          <TextComp text="20,999.00" extraStyle={styles.price} />
        </View>

        {/* additional details */}
        <TextComp
          text="Additional Details"
          extraStyle={styles.additionalText}
        />
        <ModelComp text="Model" model="Asus laptop for sell" />
        <ModelComp text="Brand" model="Asus" />

        {/* photos */}
        <TextComp text="Photos" extraStyle={styles.photosText} />
        <View style={styles.itemImgWrapper}>
          <Image source={{ uri: img }} style={styles.itemImgStyle} />
          <Image source={{ uri: img }} style={styles.itemImgStyle} />
          <Image source={{ uri: img }} style={styles.itemImgStyle} />
        </View>

        {/* Contacts */}
        <TextComp text="Contacts" extraStyle={styles.photosText} />
        <PhoneComp number={"01881383269"} />
        <PhoneComp number={"01881383269"} />
      </View>
    </ScrollView>
  );
};

export default SingleProductDetails;

interface modelProps {
  text: string;
  model: string;
}
const ModelComp: FC<modelProps> = ({ text, model }) => (
  <View style={styles.modelCompStyle}>
    <Text
      style={{
        color: AppColor.gray,
      }}
    >
      {text}
    </Text>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 15,
      }}
    >
      {model}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.white,
    paddingBottom: 20,
  },
  topBackWrapper: {
    width: WIDTH,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
    zIndex: 999,
  },

  imgStyle: {
    width: "100%",
    height: HEIGHT / 3.3,
  },
  detailsWrapper: {
    marginTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  dateandLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  locationWraper: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: 6,
    color: AppColor.gray,
    fontSize: 13,
  },
  dateContainer: {
    marginLeft: 10,
  },
  viewCounter: {
    marginLeft: 3,
    marginBottom: 2,
    color: AppColor.gray,
    fontSize: 13,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  additionalText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  modelCompStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: AppColor.gray,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginVertical: 10,
  },
  photosText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  itemImgWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemImgStyle: {
    width: WIDTH / 4,
    height: 100,
    marginRight: 10,
  },
});

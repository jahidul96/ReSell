import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC } from "react";
import { AppColor } from "../utils/AppColors";
import { TextComp, TopBackHeader } from "../components/Reuseable";
import { AntDesign, Ionicons } from "../utils/Icons";

const img =
  "https://louisville.edu/enrollmentmanagement/images/person-icon/image";

const Profile = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: AppColor.white,
      }}
    >
      <View style={styles.container}>
        <TopBackHeader text="Profile" />
        <View style={styles.topContainer}>
          <View style={styles.imgWrapper}>
            <Image
              source={{ uri: img }}
              style={{ width: "100%", height: "100%", borderRadius: 100 }}
            />
          </View>
          <TextComp text={"Akash"} extraStyle={styles.name} />
          <TextComp text={"Akash@gmail.com"} />
        </View>

        <View
          style={{
            marginTop: 40,
            borderTopColor: AppColor.darkGray,
            borderTopWidth: 1,
          }}
        >
          <TextTab text="Update Profile Pic" />
          <TextTab text="My Ads" />
          <TextTab text="Reset Password" />
          <TextTab text="About" />
          <TextTab text="Privacy" />
          <TextTab text="Logout" />
        </View>
      </View>
    </ScrollView>
  );
};

interface Props {
  text: string;
}

const TextTab: FC<Props> = ({ text }) => (
  <Pressable style={styles.textTabContainer}>
    <TextComp text={text} extraStyle={{ color: AppColor.black }} />
    <Ionicons name="chevron-forward" size={20} color={AppColor.gray} />
  </Pressable>
);
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.white,
    paddingHorizontal: 10,
  },
  imgWrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: AppColor.darkGray,
    borderWidth: 2,
    borderColor: AppColor.navyBlue,
  },
  topContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  textTabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    borderBottomColor: AppColor.darkGray,
    borderBottomWidth: 1,
  },
});

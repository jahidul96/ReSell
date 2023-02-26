import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import { AppColor } from "../../utils/AppColors";
import { TextComp } from "../../components/Reuseable";
import { HEIGHT, WIDTH } from "../../utils/AppDimension";
import { Fontisto, Ionicons } from "../../utils/Icons";
import InputComp from "../../components/InputComp";
import IconInputComp from "../../components/IconInputComp";
import ButtonComp from "../../components/ButtonComp";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColor.navyBlue} barStyle="light-content" />
      <View style={styles.topContainer}>
        <TextComp text="Sign Up." extraStyle={styles.signupText} />
        <TextComp text="Create your account." extraStyle={styles.createtext} />
      </View>

      {/* form container */}

      <View style={styles.bottomContentWrapper}>
        <View style={styles.formContainer}>
          <IconInputComp
            placeholder="Username"
            icon={<Ionicons name="person-outline" size={17} />}
          />
          <IconInputComp
            placeholder="Email"
            icon={<Fontisto name="email" size={17} />}
          />
          <IconInputComp
            placeholder="Password"
            icon={<Ionicons name="lock-closed-outline" size={17} />}
          />
          <IconInputComp
            placeholder="Confirm Password"
            icon={<Ionicons name="lock-closed-outline" size={17} />}
          />
          <ButtonComp
            text="Register"
            onPress={() => navigation.navigate("BottomNav")}
          />
        </View>
      </View>

      {/* link text */}
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextComp
          text="Already have an account?"
          extraStyle={{ color: AppColor.gray, fontWeight: "bold" }}
        />
        <Pressable onPress={() => navigation.navigate("Login")}>
          <TextComp
            text="Login"
            extraStyle={{
              color: AppColor.black,
              fontWeight: "bold",
              marginTop: 10,
              fontSize: 18,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: WIDTH,
    height: HEIGHT / 3,
    backgroundColor: AppColor.navyBlue,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  signupText: {
    fontSize: 25,
    fontWeight: "bold",
    color: AppColor.white,
  },
  createtext: {
    color: AppColor.darkGray,
    marginTop: 5,
  },
  bottomContentWrapper: {
    paddingHorizontal: 15,
  },
  formContainer: {
    width: "100%",
    backgroundColor: AppColor.white,
    borderRadius: 10,
    marginTop: -120,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});

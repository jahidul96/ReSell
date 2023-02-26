import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import { AppColor } from "../../utils/AppColors";
import { TextComp } from "../../components/Reuseable";
import { HEIGHT, WIDTH } from "../../utils/AppDimension";
import { Fontisto, Ionicons } from "../../utils/Icons";
import IconInputComp from "../../components/IconInputComp";
import ButtonComp from "../../components/ButtonComp";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColor.navyBlue} barStyle="light-content" />
      <View style={styles.topContainer}>
        <TextComp text="Login." extraStyle={styles.signupText} />
        <TextComp text="Welcome Back." extraStyle={styles.createtext} />
      </View>

      {/* form container */}

      <View style={styles.bottomContentWrapper}>
        <View style={styles.formContainer}>
          <IconInputComp
            placeholder="Email"
            icon={<Fontisto name="email" size={17} />}
          />
          <IconInputComp
            placeholder="Password"
            icon={<Ionicons name="lock-closed-outline" size={17} />}
          />
          <ButtonComp
            text="Login"
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
          text="Don't have an account?"
          extraStyle={{ color: AppColor.gray, fontWeight: "bold" }}
        />
        <Pressable onPress={() => navigation.navigate("Register")}>
          <TextComp
            text="Register"
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: WIDTH,
    height: HEIGHT / 3,
    backgroundColor: AppColor.navyBlue,

    paddingTop: 40,
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
    marginTop: -100,
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

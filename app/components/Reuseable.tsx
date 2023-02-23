import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";
import { AppColor } from "../utils/AppColors";
import { AntDesign, Fontisto, Ionicons } from "../utils/Icons";
import { useNavigation } from "@react-navigation/native";

interface textInterFace {
  text: any;
  extraStyle?: any;
}

export const TextComp: FC<textInterFace> = ({ text, extraStyle }) => (
  <Text style={[styles.textStyle, extraStyle]}>{text}</Text>
);

export const SearchPlaceHolder = () => (
  <TouchableOpacity style={styles.searchContainer}>
    <Text
      style={{
        color: AppColor.gray,
      }}
    >
      search
    </Text>
    <Ionicons name="search" size={16} color={AppColor.gray} />
  </TouchableOpacity>
);

interface phoneProps {
  number: any;
}

export const PhoneComp: FC<phoneProps> = ({ number }) => (
  <View style={styles.phoneCompContainer}>
    <View style={styles.phnWrapper}>
      <Fontisto name="phone" size={12} color={AppColor.white} />
    </View>
    <TextComp
      text={number}
      extraStyle={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}
    />
  </View>
);

interface BackProps {
  filter?: boolean;
  color?: any;
  text?: string;
}

export const TopBackHeader: FC<BackProps> = ({ filter, color, text }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.backContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={25}
          color={color ? color : AppColor.black}
        />
        {text && (
          <TextComp
            text={text}
            extraStyle={{ marginLeft: 10, fontSize: 17, fontWeight: "bold" }}
          />
        )}
      </View>
      {filter && <AntDesign name="menu-fold" size={25} />}
    </View>
  );
};

const styles = StyleSheet.create({
  // search comp styles
  textStyle: {
    fontSize: 16,
    color: AppColor.black,
  },
  searchContainer: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: AppColor.white,
    paddingHorizontal: 10,
    borderRadius: 7,
  },

  // phonecomp styles
  phoneCompContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  phnWrapper: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColor.navyBlue,
    borderRadius: 100,
  },

  // backContainer

  backContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

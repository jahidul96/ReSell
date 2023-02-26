import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeightBox, TextComp, TopBackHeader } from "../components/Reuseable";
import InputComp from "../components/InputComp";
import { AppColor } from "../utils/AppColors";

const CreatePost = () => (
  <View
    style={{
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: AppColor.white,
    }}
  >
    <TopBackHeader text="POST" />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.contentWrapper}>
        {/* title */}
        <TextComp text="Title" extraStyle={{ fontSize: 17 }} />
        <InputComp placeholder="Title" extraStyle={styles.inputStyle} />

        <HeightBox height={20} />
        {/* category */}

        <TextComp text="Category" extraStyle={{ fontSize: 17 }} />
        <InputComp placeholder="Category" extraStyle={styles.inputStyle} />
        <HeightBox height={20} />
        {/* description */}
        <TextComp text="Description" extraStyle={{ fontSize: 17 }} />
        <InputComp
          placeholder="Minimum 50 words!"
          multiline
          extraStyle={styles.descInputStyle}
        />
        <HeightBox height={20} />

        {/* price */}
        <TextComp text="Price" extraStyle={{ fontSize: 17 }} />
        <InputComp placeholder="Price" extraStyle={styles.inputStyle} />
        <HeightBox height={20} />

        {/* city */}
        <TextComp text="City" extraStyle={{ fontSize: 17 }} />
        <InputComp placeholder="City" extraStyle={styles.inputStyle} />
        <HeightBox height={20} />

        {/* contact number */}
        <TextComp text="Contact Number" extraStyle={{ fontSize: 17 }} />
        <InputComp placeholder="Phone" extraStyle={styles.inputStyle} />
      </View>
    </ScrollView>
  </View>
);

export default CreatePost;

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 20,
  },
  inputStyle: {
    backgroundColor: AppColor.darkGray,
    marginTop: 10,
  },
  descInputStyle: {
    backgroundColor: AppColor.darkGray,
    marginTop: 10,
    height: 140,
  },
});

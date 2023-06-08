import React from "react";
import { SafeAreaView, Image, View } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { applyStyle } from "./screenStyles/ApplyStyle";

export default function ApplicationScreen({ navigation }) {
  return (
    <SafeAreaView style={applyStyle.container}>
      <HomeHeader navigation={navigation} />
      <View style={applyStyle.view}>
        <Image
          style={applyStyle.img}
          source={require("../images/RightNOWCourier.png")}
        />
      </View>
    </SafeAreaView>
  );
}

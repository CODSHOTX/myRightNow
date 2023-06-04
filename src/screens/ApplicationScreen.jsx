import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { applyStyle } from "./screenStyles/ApplyStyle";

export default function ApplicationScreen({ navigation }) {
  return (
    <SafeAreaView style={applyStyle.container}>
      <HomeHeader navigation={navigation} />
      <View style={applyStyle.view}>
        <Text>Apply</Text>
      </View>
    </SafeAreaView>
  );
}

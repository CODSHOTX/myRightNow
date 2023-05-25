import React from "react";
import { View, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { SafeAreaView } from "react-native";
import { myorderStyle } from "./screenStyles/MyOrderStyle";

export default function MyOrderScreen({ navigation }) {
  return (
    <SafeAreaView style={myorderStyle.safeview}>
      <HomeHeader navigation={navigation} />
      <View style={myorderStyle.view}>
        <Text>My Orders</Text>
      </View>
    </SafeAreaView>
  );
}

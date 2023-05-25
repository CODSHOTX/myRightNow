import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleScreen";
import CourierHeader from "../components/CourierHeader";

export default function DriverConsoleScreen({ navigation }) {
  return (
    <SafeAreaView style={driverconsoleStyle.container}>
      <CourierHeader navigation={navigation} />
      <View style={driverconsoleStyle.view}>
        <Text>Driver console screen</Text>
      </View>
    </SafeAreaView>
  );
}

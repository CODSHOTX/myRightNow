import React from "react";
import { SafeAreaView, Text } from "react-native";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";

export default function RequestScreen({ navigation }) {
  return (
    <SafeAreaView style={driverconsoleStyle.container}>
      <CourierHeader navigation={navigation} />
      <Text>Request Screen</Text>
    </SafeAreaView>
  );
}

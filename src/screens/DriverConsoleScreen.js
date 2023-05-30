import React from "react";
import { View, Text, TouchableOpacity, Pressable, ScrollView, FlatList, Image, Dimensions, SafeAreaView, StatusBar } from "react-native";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";
import { homeStyle } from "../screens/screenStyles/HomeStyle";

export default function DriverConsoleScreen({ navigation }) {
  return (
    <SafeAreaView style={driverconsoleStyle.container}>
      <CourierHeader navigation={navigation} />
     
    </SafeAreaView>
  );
}

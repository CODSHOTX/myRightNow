import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { paymentStyle } from "./screenStyles/PaymentStyle";

export default function PaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={paymentStyle.container}>
      <HomeHeader navigation={navigation} />
      <View style={paymentStyle.view}>
        <Text>Payment</Text>
      </View>
    </SafeAreaView>
  );
}

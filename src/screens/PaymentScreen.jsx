import React from "react";
import { SafeAreaView, Image, View } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { paymentStyle } from "./screenStyles/PaymentStyle";

export default function PaymentScreen({ navigation }) {
  return (
    <SafeAreaView style={paymentStyle.container}>
      <HomeHeader navigation={navigation} />
      <View style={paymentStyle.view}>
      <Image
          style={paymentStyle.img}
          source={require("../images/RightNOWCashPayment.png")}
        />
      </View>
    </SafeAreaView>
  );
}

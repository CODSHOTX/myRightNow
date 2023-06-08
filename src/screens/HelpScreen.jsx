import React from "react";
import { SafeAreaView, Image, View } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { helpStyle } from "./screenStyles/HelpStyle";

export default function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={helpStyle.container}>
      <HomeHeader navigation={navigation} />
      <View style={helpStyle.view}>
      <Image
          style={{height:"100%", width:"100%"  }}
          source={require("../images/RightNOWHelp.png")}
        />
      </View>
    </SafeAreaView>
  );
}

import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Image, SafeAreaView, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { colors, parameters, title } from "../../global/styles";
import Swiper from "react-native-swiper";
import { Button } from "@rneui/base";
import { welcomeStyle } from "./styles/WelcomeScreenStyle";

export default function SignInWelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 3, backgroundColor: colors.green }}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#F5F5F5"> </StatusBar>
      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          marginVertical: 225,
          paddingTop: 5,
        }}
      >
        <Text style={{ fontSize: 46, color: colors.headerText, fontWeight: "bold" }}>
        <Image source={require("../../images/logo.png")}/> RightNOW
        </Text>
      </View>
 
      <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.welSignupBut}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate("SigininScreen");
            }}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Button
            title="Create an account"
            buttonStyle={welcomeStyle.createButton}
            titleStyle={welcomeStyle.createButtonTitle}
            onPress={() => {
              navigation.navigate("SignUpScreen");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
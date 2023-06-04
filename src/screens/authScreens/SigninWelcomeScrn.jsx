import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, StatusBar } from "react-native";
import { Button } from "@rneui/base";
import { welcomeStyle } from "./styles/WelcomeScreenStyle";

export default function SignInWelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={welcomeStyle.safeview}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F5F5F5"
      >
        {" "}
      </StatusBar>
      <View style={welcomeStyle.view1}>
        <Image
          style={welcomeStyle.imag}
          source={require("../../images/mainlogo.png")}
        />
      </View>

      <View style={welcomeStyle.view2}>
        <View style={welcomeStyle.view2_1}>
          <Button
            title="SIGN IN"
            buttonStyle={welcomeStyle.welSignupBut}
            titleStyle={welcomeStyle.buttonTitle}
            onPress={() => {
              navigation.navigate("SigininScreen");
            }}
          />
        </View>
        <View style={welcomeStyle.view3}>
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

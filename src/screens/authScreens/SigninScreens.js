import React, { useState, useRef } from "react";
import { View, Text, TextInput, SafeAreaView, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "../../components/Header";
import { Icon, Button, SocialIcon } from "@rneui/base";
import { firebase } from "../../../firebaseConfig";
import { signinscreenStyle } from "./styles/SigninScreenStyle";

export default function SignInScreen({ navigation }) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={signinscreenStyle.container}>
      <View style={signinscreenStyle.view}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#F5F5F5"
        >
          {" "}
        </StatusBar>
        <Header title="RightNOW" type="arrow-left" navigation={navigation} />
        <View style={signinscreenStyle.backcolor}>
          <View style={signinscreenStyle.view1}>
            <Text style={signinscreenStyle.title}>Sign-In</Text>
          </View>
          <View style={signinscreenStyle.view2}>
            <Text style={signinscreenStyle.text1}>
              Please enter Your Email and Password
            </Text>
            <Text style={signinscreenStyle.text1}>
              Registered with your account
            </Text>
          </View>

          <View style={signinscreenStyle.view3}>
            <View>
              <TextInput
                style={signinscreenStyle.TextInput}
                placeholder="Email"
                keyboardType="email-address"
                ref={textInput1}
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={signinscreenStyle.TextInput2}>
              <Animatable.View
                animation={textInput2Fossued ? "" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name="lock"
                  iconStyle={signinscreenStyle.iconstl}
                  type="material"
                />
              </Animatable.View>
              <TextInput
                style={signinscreenStyle.inputwidth}
                placeholder="Password"
                ref={textInput2}
                onFocus={() => {
                  setTextInput2Fossued(false);
                }}
                onBlur={() => {
                  setTextInput2Fossued(true);
                }}
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
              <Animatable.View
                animation={textInput2Fossued ? "" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name="visibility-off"
                  iconStyle={signinscreenStyle.iconstl}
                  type="material"
                  style={signinscreenStyle.iconstl}
                />
              </Animatable.View>
            </View>
          </View>
          <View style={signinscreenStyle.view4}>
            <Button
              title="Log in"
              buttonStyle={signinscreenStyle.styledButton}
              titleStyle={signinscreenStyle.buttonTitle}
              onPress={() => loginUser(email, password)}
            />
          </View>
          <View style={signinscreenStyle.view5}>
            <Text
              style={{
                ...signinscreenStyle.text1,
                textDecorationLine: "underline",
              }}
            >
              Forgot Password ?
            </Text>
          </View>

          <View style={signinscreenStyle.view6}>
            <Text style={{ ...signinscreenStyle.text1 }}>
              New on rightNOW ?
            </Text>
          </View>
          <View style={signinscreenStyle.view7}>
            <Button
              title="Create an account"
              buttonStyle={signinscreenStyle.createButton}
              titleStyle={signinscreenStyle.createButtonTitle}
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

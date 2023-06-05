import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, SafeAreaView, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "../../components/Header";
import { Icon, Button } from "@rneui/base";
import { firebase } from "../../../firebaseConfig";
import { signinscreenStyle } from "./styles/SigninScreenStyle";

// The sign-in screen's main functional component
export default function SignInScreen({ navigation }) {
  // UseStates are used to hold and manipulate form inputs and show settings.
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // UseRefs for form inputs
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Uses Firebase, for function authenticates the user.
  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  // Function The file Return by the component
  return (
    <SafeAreaView style={signinscreenStyle.container}>
      <View style={signinscreenStyle.view}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#F5F5F5"
        />
        {/* Custom Header component */}
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

          {/*Email and Password are the credentials that the user must enter.*/}
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
                secureTextEntry={!showPassword}
              />
              {/* Show/hide password*/}
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Animatable.View
                  animation={textInput2Fossued ? "" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name={showPassword ? "visibility" : "visibility-off"}
                    iconStyle={signinscreenStyle.iconstl}
                    type="material"
                  />
                </Animatable.View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={signinscreenStyle.view4}>
            {/* Login will only be valide if user inputs existem credentials*/}
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

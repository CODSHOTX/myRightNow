import React, { useState, useRef } from "react";
import { View, Text, TextInput, SafeAreaView, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { colors, parameters, title } from "../../global/styles";
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
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F5F5F5"
      >
        {" "}
      </StatusBar>
      <Header title="RightNOW" type="arrow-left" navigation={navigation} />
      <View style={signinscreenStyle.backcolor}>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={title}>Sign-In</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={signinscreenStyle.text1}>
            Please enter Your Email and Password
          </Text>
          <Text style={signinscreenStyle.text1}>
            Registered with your account
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View>
            <TextInput
              style={signinscreenStyle.TextInput}
              placeholder="Email"
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
                iconStyle={{ color: colors.grey3 }}
                type="material"
              />
            </Animatable.View>
            <TextInput
              style={{ width: "80%" }}
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
                iconStyle={{ color: colors.grey3 }}
                type="material"
                style={{ marginRight: 10 }}
              />
            </Animatable.View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
          <Button
            title="Log in"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => loginUser(email, password)}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Text
            style={{
              ...signinscreenStyle.text1,
              textDecorationLine: "underline",
            }}
          >
            Forgot Password ?
          </Text>
        </View>
      
        <View style={{ marginTop: 20, marginLeft: 5 }}>
          <Text style={{ ...signinscreenStyle.text1 }}>New on rightNOW ?</Text>
        </View>
        <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
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
     
   
    </SafeAreaView>
  );
}

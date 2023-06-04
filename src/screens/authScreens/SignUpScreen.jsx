import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { signupscreenStyle } from "./styles/SignupScreenStyle";
import Header from "../../components/Header";
import { Formik } from "formik";
import { Icon } from "@rneui/themed";
import * as Animatable from "react-native-animatable";
import { Button } from "@rneui/base";
import { firebase } from "../../../firebaseConfig";
import { SafeAreaView } from "react-native";

const initialValue = {
  fName: "",
  lName: "",
  pNumber: "",
  password: "",
  email: "",
};

const SignUpscreen = ({ navigation }) => {
  const [emails, setEmail] = useState("");
  const [fiName, setFname] = useState("");
  const [laName, setLname] = useState("");
  const [passwordz, setPassword] = useState("");
  const [phNum, setPhNum] = useState("");
  const role = "user";

  const registerUser = async (
    phNum,
    emails,
    passwordz,
    fiName,
    laName,
    role
  ) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(emails, passwordz)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://rightnow-e7d0e.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                fiName,
                laName,
                phNum,
                emails,
                role,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const [passwordFocussed, setPasswordFocussed] = useState(false);
  const [passwordBlured, setPasswordBlured] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={signupscreenStyle.container}>
      <View style={signupscreenStyle.view}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#F5F5F5"
        >
          {" "}
        </StatusBar>
        <Header title="RightNOW" type="arrow-left" navigation={navigation} />
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={signupscreenStyle.backcolor}>
            <Text style={signupscreenStyle.text1}>Sign-Up</Text>
          </View>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              SignUpscreen(values);
            }}
          >
            {(props) => (
              <View style={signupscreenStyle.view2}>
                <View>
                  <Text style={signupscreenStyle.text2}>New on RightNow</Text>
                </View>

                <View style={signupscreenStyle.view6}>
                  <TextInput
                    placeholder="First Name"
                    style={signupscreenStyle.input1}
                    keyboardType="name-phone-pad"
                    autoFocus={false}
                    onChangeText={(fiName) => setFname(fiName)}
                  />
                </View>
                <View style={signupscreenStyle.view6}>
                  <TextInput
                    placeholder="Last Name"
                    style={signupscreenStyle.input1}
                    keyboardType="name-phone-pad"
                    autoFocus={false}
                    onChangeText={(laName) => setLname(laName)}
                  />
                </View>
                <View style={signupscreenStyle.view6}>
                  <TextInput
                    placeholder=" Number"
                    style={signupscreenStyle.input1}
                    keyboardType="phone-pad"
                    autoFocus={false}
                    onChangeText={(phNum) => setPhNum(phNum)}
                  />
                </View>
                <View style={signupscreenStyle.view10}>
                  <View>
                    <Icon
                      name="email"
                      style={signupscreenStyle.email}
                      color={"#86939e"}
                      type="material"
                    />
                  </View>
                  <View style={signupscreenStyle.view11}>
                    <TextInput
                      placeholder="Email"
                      style={signupscreenStyle.input4}
                      keyboardType="email-address"
                      autoFocus={false}
                      onChangeText={(emails) => setEmail(emails)}
                    />
                  </View>
                </View>

                <View style={signupscreenStyle.view14}>
                  <Animatable.View
                    animation={passwordFocussed ? "fadeInRight" : "fadeInLeft"}
                    duration={400}
                  >
                    <Icon name="lock" color={"#86939e"} type="material" />
                  </Animatable.View>
                  <TextInput
                    placeholder="Password"
                    style={signupscreenStyle.pinput}
                    secureTextEntry={!showPassword}
                    autoFocus={false}
                    onChangeText={(passwordz) => setPassword(passwordz)}
                    onFocus={() => {
                      setPasswordFocussed(true);
                    }}
                    onBlur={() => {
                      setPasswordBlured(true);
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Animatable.View
                      animation={passwordBlured ? "fadeInLeft" : "fadeInRight"}
                      duration={400}
                    >
                      <Icon
                        name={showPassword ? "visibility" : "visibility-off"}
                        color={"#86939e"}
                        type="material"
                        style={{ marginRight: 10 }}
                      />
                    </Animatable.View>
                  </TouchableOpacity>
                </View>

                <View style={signupscreenStyle.view17}>
                  <Button
                    title="Create my account"
                    buttonStyle={signupscreenStyle.button1}
                    titleStyle={signupscreenStyle.tittle1}
                    onPress={() =>
                      registerUser(
                        phNum,
                        emails,
                        passwordz,
                        fiName,
                        laName,
                        role
                      )
                    }
                  />
                </View>
              </View>
            )}
          </Formik>
          <View style={signupscreenStyle.view18}>
            <Text style={signupscreenStyle.text5}>OR</Text>
          </View>
          <View style={signupscreenStyle.view19}>
            <View style={signupscreenStyle.view20}>
              <Text style={signupscreenStyle.text6}>
                Already have an account
              </Text>
            </View>
            <View style={signupscreenStyle.view21}>
              <Button
                title="Sign-In"
                buttonStyle={signupscreenStyle.button2}
                titleStyle={signupscreenStyle.title2}
                onPress={() => {
                  navigation.navigate("SigininScreen");
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUpscreen;

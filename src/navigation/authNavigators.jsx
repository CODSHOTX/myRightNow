import React from "react";
import { createStackNavigator, TransitionPresets,} from "@react-navigation/stack";
import SignInWelcomeScreen from "../screens/authScreens/SigninWelcomeScrn";
import SignInScreen from "../screens/authScreens/SigninScreen";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";
import DrawerNavigator from "./DrawerNavigator";
import SignUpscreen from "../screens/authScreens/SignUpScreen";

const Auth = createStackNavigator();
export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SigninWelcomeScrn"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SigininScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SignUpScreen"
        component={SignUpscreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}

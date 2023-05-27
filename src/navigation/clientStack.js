import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RootClientTabs from "./ClientTabs";
import EditProfileScreen from "../screens/userScreens/EditProfileScreen";
import VendorsMapScreen from "../screens/VendorsMapScreen";
import DrawerNavigator from "./DrawerNavigator";
import { AddressScreen } from "../screens/AddressScreen";
import PackagesInfoScreen from "../screens/PackagesInfoScreen";
import Example1 from "../screens/Example1";

const Auth = createStackNavigator();

export default function ClientStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="VendorsMapScreen"
        component={VendorsMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="PackagesInfoScreen"
        component={PackagesInfoScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,

        }}
      />

<Auth.Screen
        name="Example1"
        component={Example1}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,

        }}
      />
    </Auth.Navigator>
  );
}

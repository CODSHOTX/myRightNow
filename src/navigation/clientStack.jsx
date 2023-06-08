import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import EditProfileScreen from "../screens/userScreens/EditProfileScreen";
import DrawerNavigator from "./DrawerNavigator";
import ItemDescriptionScreen from "../screens/ItemDescriptionScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MapsScreen from "../screens/MapsScreen";
import MapCourierScreen from "../screens/MapCourierScreen";
import CourierListScreen from "../screens/CourierListScreen";
import RequestDetailScreen from "../screens/RequestDetailScreen";

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
        name="MapsScreen"
        component={MapsScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="MapCourierScreen"
        component={MapCourierScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="CourierListScreen"
        component={CourierListScreen}
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
        name="ItemDescriptionScreen"
        component={ItemDescriptionScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="RequestDetailScreen"
        component={RequestDetailScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}

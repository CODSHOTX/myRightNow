import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import RootClientTabs from "./ClientTabs";
import EditProfileScreen from "../screens/userScreens/EditProfileScreen";
import DrawerNavigator from "./DrawerNavigator";
import DeliveryDetailScreen from "../screens/DeliveryDetailScreen";
import ItemDescriptionScreen from "../screens/ItemDescriptionScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MapsScreen from "../screens/MapsScreen";

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
        name="DeliveryDetailScreen"
        component={DeliveryDetailScreen}
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

    </Auth.Navigator>
  );
}

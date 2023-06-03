import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import DriverConsoleScreen from "../screens/DriverConsoleScreen";
import RequestScreen from "../screens/RequestScreen";

const CourierTabz = createBottomTabNavigator();

export default function CourierTabs() {
  return (
    <CourierTabz.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#74D24F",
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
      }}
    >
      <CourierTabz.Screen
        name="DriverConsoleScreen"
        component={DriverConsoleScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <CourierTabz.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Request",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="bell-alert"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </CourierTabz.Navigator>
  );
}

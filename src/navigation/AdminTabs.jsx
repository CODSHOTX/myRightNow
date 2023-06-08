import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import AdminScreen from "../screens/AdminScreen";

const AdminTabz = createBottomTabNavigator();

export default function AdminTabs() {
  return (
    <AdminTabz.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#74D24F",
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
      }}
    >
      <AdminTabz.Screen
        name="AdminScreen"
        component={AdminScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Admin",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-cog-outline" type="material-community" color={color} size={size} />
          ),
        }}
      />
    </AdminTabz.Navigator>
  );
}

import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import RootClientTabs from "./ClientTabs";
import DriverConsoleScreen from "../screens/DriverConsoleScreen";
import { Icon } from "@rneui/base";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ drawerActiveTintColor:"#C9C9C7", drawerLabelStyle: { color: "#74D24F" }}} drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: "Client",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focused ? "#74D24F" : "black"}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="DriverConsoleScreen"
        component={DriverConsoleScreen}
        options={{
          title: "Driver Console",
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material-community"
              name="bike"
              color={focused ? "black" : "#74D24F"}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

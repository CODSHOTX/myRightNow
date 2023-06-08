import * as React from "react";
import { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import RootClientTabs from "./ClientTabs";
import { firebase } from "../../firebaseConfig";
import { Icon } from "@rneui/base";
import ApplicationScreen from "../screens/ApplicationScreen";
import CourierTabs from "./CourierTabs";
import PaymentScreen from "../screens/PaymentScreen";
import HelpScreen from "../screens/HelpScreen";
import AdminTabs from "./AdminTabs"

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          const userDoc = await firebase
            .firestore()
            .collection("users")
            .doc(user.uid)
            .get();

          if (userDoc.exists) {
            const userData = userDoc.data();
            const role = userData.role;
            setUserRole(role);
          }
        }
      } catch (error) {
        console.error("Error retrieving user role:", error);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <>
      {userRole === "courier" ? (
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#C9C9C7",
            drawerLabelStyle: { color: "#74D24F" },
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
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
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="CourierTabs"
            component={CourierTabs}
            options={{
              title: "Driver Console",
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Icon
                  type="material-community"
                  name="bike"
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{
              title: "Payment",
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Icon
                  type="material-community"
                  name="credit-card"
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="HelpScreen"
            component={HelpScreen}
            options={{
              title: "Help",
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Icon
                  type="material-community"
                  name="help-circle"
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      ) :userRole === "admin" ? (
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#C9C9C7",
            drawerLabelStyle: { color: "#74D24F" },
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
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
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="AdminTabs"
            component={AdminTabs}
            options={{
              title: "Admin",
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Icon
                  type="material-community"
                  name="account-cog"
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

        </Drawer.Navigator>
      ) : (
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#C9C9C7",
            drawerLabelStyle: { color: "#74D24F" },
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
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
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="ApplicationScreen"
            component={ApplicationScreen}
            options={{
              title: "Apply",
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Icon
                  type="material-community"
                  name="book"
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{
              title: "Payment",
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Icon
                  type="material-community"
                  name="credit-card"
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="HelpScreen"
            component={HelpScreen}
            options={{
              title: "Help",
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <Icon
                  type="material-community"
                  name="help-circle"
                  color={focused ? "#74D24F" : "#74D24F"}
                  size={size}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      )}
    </>
  );
}

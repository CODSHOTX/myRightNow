import * as React from "react";
import { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import RootClientTabs from "./ClientTabs";
import DriverConsoleScreen from "../screens/DriverConsoleScreen";
import { firebase } from "../../firebaseConfig";
import { Icon } from "@rneui/base";
import Application from "../screens/ApplicationScreen";
import ApplicationScreen from "../screens/ApplicationScreen";

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

  
  

return(

  <>
  {userRole === 'courier' ? (
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
             color={focused ? "#74D24F" : "#74D24F"}
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
             color={focused ? "#74D24F" : "#74D24F"}
             size={size}
           />        
          ),
       }}
     />


   </Drawer.Navigator>  
  ) : (
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
          />),
        }}/>

        </Drawer.Navigator>
      )}
    </>
  );
}

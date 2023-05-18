import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import RootClientTabs from "./ClientTabs";
import EditProfileScreen from "../screens/userScreens/EditProfileScreen";
import VendorsMapScreen from "../screens/VendorsMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const Auth = createStackNavigator();

export default function ClientStack(){
    return(
        <Auth.Navigator>

<Auth.Screen 
            name ="DrawerNavigator"    component = {DrawerNavigator}   
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}          
             />

<Auth.Screen 
            name ="VendorsMapScreen"    component = {VendorsMapScreen}   
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}          
             />

<Auth.Screen
            name="EditProfileScreen" component={EditProfileScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}          />
            </Auth.Navigator>
    )

 }

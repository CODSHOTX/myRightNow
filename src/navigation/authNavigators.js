import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SignInWelcomeScreen from "../screens/authScreens/SigninWelcomeScrn";
import SignInScreen from "../screens/authScreens/SigninScreens";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./ClientTabs";
import VendorsMapScreen from "../screens/VendorsMapScreen";
import DrawerNavigator from "./DrawerNavigator";
const Auth = createStackNavigator();
 export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
            name ="SigninWelcomeScrn"    component = {SignInWelcomeScreen}   
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}          
             />

<Auth.Screen 
            name ="SigininScreen"    component = {SignInScreen}   
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}          
             />

<Auth.Screen 
            name ="HomeScreen"    component = {HomeScreen}   
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
        </Auth.Navigator>
    )
 }
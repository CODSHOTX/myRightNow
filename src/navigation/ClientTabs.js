import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from "@rneui/base";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import { colors } from "../global/styles";
import MyAccountScreen from "../screens/MyAccountScreen";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
                    screenOptions ={{
                        "tabBarActiveTintColor": "#116530",
                        "tabBarStyle":[
                            {
                                "display":"flex"
                                
                            },
                            
                        ]
                    }}
            >
            <ClientTabs.Screen
                name="HomeScreen" 
                component={HomeScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "Home",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                            name="home"
                            type="material"
                            color={color}
                            size={size}
                            />
                        )

                    }
                }
            />




<ClientTabs.Screen
                name="MyOrderScreen" 
                component={MyOrderScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "Order",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                            name="view-list"
                            type="material"
                            color={color}
                            size={size}
                            />
                        )

                    }
                }
            />
<ClientTabs.Screen
                name="MyAccountScreen" 
                component={MyAccountScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel : "My Account",
                        tabBarIcon:({color,size})=>(
                            <Icon 
                            name="person"
                            type="material"
                            color={color}
                            size={size}
                            />
                        )

                    }
                }
            />
        </ClientTabs.Navigator>
    )
}
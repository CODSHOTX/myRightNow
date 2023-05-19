import * as React from 'react';
import { createDrawerNavigator,  } from "@react-navigation/drawer";
import DrawerContent from '../screens/DrawerContent';
import RootClientTabs from "./ClientTabs";
import DriverConsoleScreen from '../screens/DriverConsoleScreen';
import { Icon } from "@rneui/base";
import { colors } from "../global/styles";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){

    return(
       
       <Drawer.Navigator
                drawerContent={props =><DrawerContent {...props}/>}
       
       >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}

                options={
                    {
                    title:'Client',
                    headerShown:false,
                    drawerIcon:({focused,size})=>(
                        <Icon
                            type="material-community"
                            name="home"
                            color={focused ? '#7cc' :colors.grey2}
                            size={size}
                            />
                    )
                }}
            />

<Drawer.Screen
                name="DriverConsoleScreen"
                component={DriverConsoleScreen}

                options={
                    {
                    title:'Driver console',
                    headerShown:false,
                    drawerIcon:({focused,size})=>(
                        <Icon
                            type="material-community"
                            name="bike"
                            color={focused ? '#7cc' :colors.grey2}
                            size={size}
                            />
                    )
                }}
            />
       </Drawer.Navigator>
    
    )
            }
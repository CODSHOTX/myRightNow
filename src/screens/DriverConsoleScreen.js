import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import { homeStyle } from "./screenStyles/HomeStyle";

import CourierHeader from "../components/CourierHeader";

export default function DriverConsoleScreen({navigation}){
    return(
        <SafeAreaView>
            <View style={homeStyle.container} >
          <CourierHeader navigation={navigation}/>
            <View>
            <Text>Driver console screen</Text>
            </View>
            </View>
           
          
        </SafeAreaView>
    );
}
import React from "react";
import {SafeAreaView, Text, View} from 'react-native'
import HomeHeader from "../components/HomeHeader";

  export default function ApplicationScreen( {navigation} ){
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#F5F5F5"}}>
          <HomeHeader navigation={navigation} />
          <View style={{flex: 1, backgroundColor:"white"}}>
            <Text>Micheal</Text>
          </View>
        </SafeAreaView>
    )
  }
import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Pressable, ScrollView, FlatList, Image, Dimensions, SafeAreaView, StatusBar } from "react-native";
import { driverconsoleStyle } from "./screenStyles/DriverConsoleStyle";
import CourierHeader from "../components/CourierHeader";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { homeStyle } from "./screenStyles/HomeStyle";

export default function DriverConsoleScreen({ navigation }) {
  return (
    <SafeAreaView style={driverconsoleStyle.container}>
      <CourierHeader navigation={navigation} />
      <View style={{flexDirection:'column',  flex: 1}}>
        <MapView style={{flex:1, height:'50%'}}
         provider={PROVIDER_GOOGLE}
       
         initialRegion={{
           latitude: 35.146732,
           longitude: 33.908628,
           latitudeDelta: 0.0222,
           longitudeDelta: 0.0121,
         }}>

        </MapView>
         <Marker  coordinate={{ latitude: 35.146801, longitude: 33.908648 }}
         />
         <View style={{borderColor:'#74D24F', borderWidth:1,}}>
         <TouchableOpacity
            onPress={() => {
            
            }}
          >
            <View style={{flexDirection:'row'}}>
              <View style={homeStyle.imageBox} >
                <Image
                  style={homeStyle.imag}
                  source={{
                    uri: "https://cdn0.iconfinder.com/data/icons/e-commerce-69/512/delivery-512.png",
                  }}
                />
              </View>
              <View style={homeStyle.viewBox}>
                <Text style={homeStyle.textBox}>View History</Text>
                <Text style={homeStyle.textBox1}>
                 History of all {"\n"}packages you delivered
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          </View>
      </View>
     
    </SafeAreaView>
  );
}

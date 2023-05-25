import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, ScrollView, FlatList, Image, Dimensions, SafeAreaView, StatusBar } from "react-native";
import { homeStyle } from "../screens/screenStyles/HomeStyle";
import { Icon } from "@rneui/base";
import HomeHeader from "../components/HomeHeader";
import { colors } from "../global/styles";
import { filterData, vendorsData } from "../global/data";
import VendorCard from "../components/VendorCard";
import CountDown from "react-native-countdown-component";
import { useEffect } from "react";
import { firebase } from "../../firebaseConfig";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  const [street, setStreet] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setStreet(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <SafeAreaView style={homeStyle.safeview}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F5F5F5"
      >
        {" "}
      </StatusBar>
      <View style={homeStyle.container}>
        <HomeHeader navigation={navigation} />
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={true}
        >
          <View style={homeStyle.view2}>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setDelivery(true);
                }}
              >
                <View
                  style={{
                    ...homeStyle.deliveryButton,
                    backgroundColor: delivery ? "#74D24F" : "#F5F5F5",
                  }}
                >
                  <Text style={homeStyle.deliveryText}>Delivery</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setDelivery(false);
                  navigation.navigate("VendorsMapScreen");
                }}
              >
                <View
                  style={{
                    ...homeStyle.deliveryButton,
                    backgroundColor: delivery ? "#F5F5F5" : "#74D24F",
                  }}
                >
                  <Text style={homeStyle.deliveryText}>Pick Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={homeStyle.filterView}>
            <View style={homeStyle.addressView}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 10,
                }}
              >
                <Icon
                  type="material-community"
                  name="map-marker"
                  color="#74D24F"
                  size={26}
                />
                <Text style={{ marginLeft: 5, color: "#74D24F" }}>
                  {street.street}
                </Text>
              </View>

              <View style={homeStyle.clock}>
                <Icon
                  type="material-community"
                  name="clock-time-four"
                  color="#74D24F"
                  size={26}
                />
                <Text style={{ marginLeft: 5, color: "#74D24F" }}>Now</Text>
              </View>
            </View>
            <View>
              <Icon
                type="material-community"
                name="tune"
                color="#74D24F"
                size={26}
              />
            </View>
          </View>

          <TouchableOpacity onPress={() => {
                  setDelivery(false);
                  navigation.navigate("PackagesInfoScreen");
                }}>
            <View style={homeStyle.borderDox}>
              <View style={homeStyle.imageBox}>
              
                <Image
                  style={{ height: 80, width: 80, borderRadius: 30 }}
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzNEE1fTEMCuGuBy_HW6MS0y0Hem5t1y75Q&usqp=CAU' }}
                />
              
                
              </View>
              <View style={{ marginBottom:15,  marginRight:15}}>
                <Text style={{color:"#74D24F", fontSize:18, paddingTop:10 }}>Send Packages</Text>
                <Text style={{paddingTop:5, color:colors.grey3, fontSize:16, }}>Send packages to {'\n'}anywhere and anytime</Text>
                </View>
               
             
            </View>
          </TouchableOpacity>

             <TouchableOpacity>
            <View style={homeStyle.borderDox2}>
              <View style={homeStyle.imageBox}>
              
                <Image
                  style={{ height: 80, width: 80, borderRadius: 30 }}
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/172/172164.png' }}
                />
              
                
              </View>
              <View style={{ marginBottom:15,  marginRight:15}}>
                <Text style={{color:"#74D24F", fontSize:18, paddingTop:10 }}>Delivery History</Text>
                <Text style={{paddingTop:5, color:colors.grey3, fontSize:16, }}>View past deliveries</Text>
                </View>
               
             
            </View>
          </TouchableOpacity>


        </ScrollView>
        {delivery && (
          <View style={homeStyle.floatButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VendorsMapScreen");
              }}
            >
              <Icon name="place" type="material" size={32} color="#74D24F" />
              <Text style={{ color: "#74D24F" }}>Map</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

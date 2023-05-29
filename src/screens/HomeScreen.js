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
              style={homeStyle.view2_1}
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
                style={homeStyle.addressView_1}
              >
                <Icon
                  type="material-community"
                  name="map-marker"
                  color="#74D24F"
                  size={26}
                />
                <Text style={homeStyle.addressViewText}>
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
                <Text style={homeStyle.addressViewText}>Now</Text>
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
                  setDelivery(true);
                  navigation.navigate("Example1");
                }}>
            <View style={homeStyle.borderDox}>
              <View style={homeStyle.imageBox}>
                <Image
                  style={homeStyle.imag}
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzNEE1fTEMCuGuBy_HW6MS0y0Hem5t1y75Q&usqp=CAU' }}
                /> 
              </View>
              <View style={homeStyle.viewBox}>
                <Text style={homeStyle.textBox}>Send Packages</Text>
                <Text style={homeStyle.textBox1}>Send packages to {'\n'}anywhere and anytime</Text>
                </View>
               
             
            </View>
          </TouchableOpacity>

             <TouchableOpacity>
            <View style={homeStyle.borderDox2}>
              <View style={homeStyle.imageBox}>
              
                <Image
                  style={homeStyle.imag2}
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/172/172164.png' }}
                />
              
                
              </View>
              <View style={homeStyle.viewBox}>
                <Text style={homeStyle.textBox}>Delivery History</Text>
                <Text style={homeStyle.textBox1}>View past deliveries</Text>
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

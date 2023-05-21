import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, ScrollView, FlatList, Image, Dimensions,  SafeAreaView} from "react-native";
import { homeStyle } from "../screens/screenStyles/HomeStyle"
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

  const [fiName, setFname] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setFname(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <SafeAreaView style={homeStyle.safeview}>
      <View style={homeStyle.container}>

      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={homeStyle.view2}
        >
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
              <Text style={{ marginLeft: 5, color: "#74D24F" }}>22 Beessie Street</Text>
            </View>

            <View style={homeStyle.clock}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color="#74D24F"
                size={26}
              />
              <Text style={{ marginLeft: 5, color:"#74D24F" }}>Now</Text>
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
        <View style={homeStyle.headerTextView}>
          <Text style={homeStyle.headerText}>Categories:</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...homeStyle.smallCardSelected }
                      : { ...homeStyle.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...homeStyle.smallCardTextSelected }
                          : { ...homeStyle.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={homeStyle.headerTextView}>
          <Text style={homeStyle.headerText}>Free Delivery now:</Text>
        </View>

        <View>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5,
              }}
            >
              Options changing in
            </Text>
          </View>

          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={vendorsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <VendorCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  vendorName={item.VedorName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={homeStyle.headerTextView}>
          <Text style={homeStyle.headerText}>Promotions available:</Text>
        </View>

        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={vendorsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <VendorCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  vendorName={item.VedorName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View>
          <View style={homeStyle.headerTextView}>
            <Text style={homeStyle.headerText}>Shops Nearby</Text>
          </View>

          <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
            {vendorsData.map((item) => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <VendorCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={item.images}
                  vendorName={item.VedorName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {delivery && (
        <View style={homeStyle.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("VendorsMapScreen");
            }}
          >
            <Icon
              name="place"
              type="material"
              size={32}
              color="#74D24F"
            />
            <Text style={{ color: "#74D24F" }}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>
    </SafeAreaView>
  );
}

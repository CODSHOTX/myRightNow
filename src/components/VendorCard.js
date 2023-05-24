import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/base";
import { colors, parameters } from "../global/styles";
import { vendorcardStyle } from "./componentsStyles/vendorcardStyle";

export default function VendorCard({
  OnPressVendorCard,
  vendorName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{ ...vendorcardStyle.cardView, width: screenWidth }}>
        <Image
          style={{ ...vendorcardStyle.image, width: screenWidth }}
          // source={require('../images/durmaz.jpg')}
          source={{ uri: images }}
        />

        <View>
          <View>
            <Text style={vendorcardStyle.vendorName}>{vendorName}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={vendorcardStyle.distance}>
              <Icon
                name="place"
                type="material"
                color="#C9C9C7"
                size={18}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={vendorcardStyle.minutes}>{farAway} Min</Text>
            </View>
            <View style={vendorcardStyle.view1}>
              <Text style={vendorcardStyle.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={vendorcardStyle.review}>
        <Text style={vendorcardStyle.average}>{averageReview}</Text>
        <Text style={vendorcardStyle.numOfRev}> {numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

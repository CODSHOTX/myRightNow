import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Icon } from "@rneui/base";
import { courierheaderStyle } from "./componentsStyles/courierheaderstyle";

export default function CourierHeader({ navigation }) {
 

  return (
    <SafeAreaView style={courierheaderStyle.header}>
      <View style={courierheaderStyle.veiw1}>
        <Icon
          type="material-community"
          name="menu"
          color="#74D24F"
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
      <View style={courierheaderStyle.veiw2}>
        <Text style={courierheaderStyle.text1}>CourierNow</Text>
      </View>

      <View style={courierheaderStyle.veiw3}>
        <Icon
          type="material-community"
          name="account-tie-hat"
          size={35}
          color="#74D24F"
        />
      </View>
    </SafeAreaView>
  );
}

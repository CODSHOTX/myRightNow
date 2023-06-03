import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Icon, withBadge } from "@rneui/base";
import { homeheaderStyle } from "./componentsStyles/homeheaderStyle";

export default function CourierHeader({ navigation }) {
 

  return (
    <SafeAreaView style={homeheaderStyle.header}>
      <View style={homeheaderStyle.veiw1}>
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
      <View style={homeheaderStyle.veiw2}>
        <Text style={homeheaderStyle.text1}>CourierNow</Text>
      </View>

      <View style={homeheaderStyle.veiw3}>
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

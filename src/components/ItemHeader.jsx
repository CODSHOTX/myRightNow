import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@rneui/base";
import { itemheaderStyle } from "./componentsStyles/itemheaderstyle";
import { SafeAreaView } from "react-native";

export default function ItemHeader({ title, type, navigation }) {
  return (
    <SafeAreaView style={itemheaderStyle.container}>
      <View style={itemheaderStyle.view}>
        <Icon
          type="material-community"
          name={type}
          color={"#74D24F"}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={itemheaderStyle.headerText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@rneui/base";
import { headerStyle } from "./componentsStyles/headerStyle";
import { SafeAreaView } from "react-native";

export default function Header({ title, type, navigation }) {
  return (
    <SafeAreaView style={headerStyle.header}>
      <View style={{ marginLeft: 20 }}>
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
        <Text style={headerStyle.headerText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

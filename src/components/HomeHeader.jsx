import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Icon, withBadge } from "@rneui/base";
import { homeheaderStyle } from "./componentsStyles/homeheaderStyle";

export default function HomeHeader({ navigation }) {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <SafeAreaView style={homeheaderStyle.header}>
      <View style={homeheaderStyle.view1}>
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
      <View style={homeheaderStyle.view2}>
        <Text style={homeheaderStyle.text1}>RightNOW</Text>
      </View>
      <View style={homeheaderStyle.view1} />
    </SafeAreaView>
  );
}

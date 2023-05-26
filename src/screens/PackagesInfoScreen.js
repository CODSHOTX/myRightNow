import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
// import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import ItemHeader from "../components/ItemHeader";
import { useState } from "react";
import { PackagesInfoStyles } from "./screenStyles/PackagesInfoStyles";
import { Button } from "@rneui/themed";

export default function PackagesInfoScreen({ navigation }) {
  const [pHeight, setPHeight] = useState("");

  return (
    <SafeAreaView style={PackagesInfoStyles.container}>
      <ItemHeader
        title="Item Description"
        type="arrow-left"
        navigation={navigation}
      />
      <View style={{ flex: 1, backgroundColor: "white"}}>
        <View style={PackagesInfoStyles.rowContainer}>
          <Text style={PackagesInfoStyles.Texts}>Height:</Text>
          <TextInput
            style={PackagesInfoStyles.TextInput}
            placeholder="Please enter package height in cm"
            // onChangeText={pHeight}
          />
        </View>

        <View style={PackagesInfoStyles.rowContainer}>
          <Text style={PackagesInfoStyles.Texts}>Width:</Text>
          <TextInput
            style={PackagesInfoStyles.TextInput}
            placeholder="Please enter package width in cm"
            // onChangeText={pWidth}
          />
        </View>

        {/* depth */}
        <View style={PackagesInfoStyles.rowContainer}>
          <Text style={PackagesInfoStyles.Texts}>Depth:</Text>
          <TextInput
            style={PackagesInfoStyles.TextInput}
            placeholder="Please enter package depth in cm"
            // onChangeText={pDepth}
          />
        </View>

        {/* Weight */}
        <View style={PackagesInfoStyles.rowContainer}>
          <Text style={PackagesInfoStyles.Texts}>Weight:</Text>
          <TextInput
            style={PackagesInfoStyles.TextInput}
            placeholder="Please enter package weight in cm"
            // onChangeText={pWeight}
          />
        </View>

        <Button
          title="Next"
          buttonStyle={PackagesInfoStyles.nextButton}
          titleStyle={PackagesInfoStyles.nextTitle}
          /* onPress={() => {
        navigation.navigate("SignUpScreen");
      }} */
        />
      </View>
    </SafeAreaView>
  );
}

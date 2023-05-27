import React from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import ItemHeader from "../components/ItemHeader";
import { useState } from "react";
import { PackagesInfoStyles } from "./screenStyles/PackagesInfoStyles";
import { Button, TextInput } from "react-native-paper";

export default function PackagesInfoScreen({ navigation }) {
  const [pDescription, setPDescription] = useState("");
  const [pHeight, setPHeight] = useState("");
  const [pWidth, setPWidth] = useState("");
  const [pDepth, setPDepth] = useState("");
  const [pWeight, setPWeight] = useState("");

  const handleReadyButtonPress = () => {
    if (pDescription.trim().length === 0) {
      Alert.alert("Error", "Please enter the description");
    } else {
      navigation.navigate("VendorsMapScreen");
    }
  };

  return (
    <SafeAreaView style={PackagesInfoStyles.container}>
      <ItemHeader
        title="Item Description"
        type="arrow-left"
        navigation={navigation}
      />
      <View style={PackagesInfoStyles.view}>
        <View>
          <Text style={PackagesInfoStyles.Texts}>Description:</Text>
          <TextInput
            placeholder="Please enter description"
            style={PackagesInfoStyles.textinput}
            activeUnderlineColor="#74D24F"
            value={pDescription}
            onChangeText={setPDescription}
          />
        </View>
        <View>
          <Text style={PackagesInfoStyles.Texts}>Height:</Text>
          <TextInput
            style={PackagesInfoStyles.textinput}
            activeUnderlineColor="#74D24F"
            placeholder="Please enter package height in cm"
            keyboardType="numeric"
            value={pHeight}
            onChangeText={setPHeight}
          />
        </View>

        <View style={PackagesInfoStyles.rowContainer}>
          <Text style={PackagesInfoStyles.Texts}>Width:</Text>
          <TextInput
            style={PackagesInfoStyles.textinput}
            activeUnderlineColor="#74D24F"
            placeholder="Please enter package width in cm"
            keyboardType="numeric"
            value={pWidth}
            onChangeText={setPWidth}
          />
        </View>

        {/* depth */}
        <View style={PackagesInfoStyles.rowContainer}>
          <Text style={PackagesInfoStyles.Texts}>Depth:</Text>
          <TextInput
            style={PackagesInfoStyles.textinput}
            activeUnderlineColor="#74D24F"
            placeholder="Please enter package depth in cm"
            keyboardType="numeric"
            value={pDepth}
            onChangeText={setPDepth}
          />
        </View>

        {/* Weight */}
        <View style={PackagesInfoStyles.rowContainer}>
          <Text style={PackagesInfoStyles.Texts}>Weight:</Text>
          <TextInput
            style={PackagesInfoStyles.textinput}
            activeUnderlineColor="#74D24F"
            placeholder="Please enter package weight in cm"
            keyboardType="numeric"
            value={pWeight}
            onChangeText={setPWeight}
          />
        </View>

        <Button
          onPress={handleReadyButtonPress}
          mode="contained"
          style={PackagesInfoStyles.readybutton}
          labelStyle={PackagesInfoStyles.readybuttonlabel}
          buttonColor={PackagesInfoStyles.readybutton.color}
        >
          Ready
        </Button>
      </View>
    </SafeAreaView>
  );
}

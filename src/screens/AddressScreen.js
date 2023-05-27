
import React, { useState } from "react";
import { SafeAreaView, View, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { addressStyle } from "./screenStyles/AddressStyle";

const AddressScreen = ({ navigation }) => {
  const [destinations, setDestinations] = useState([""]);
  const [origin, setOrigin] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverNumber, setReceiverNumber] = useState("");

  const addDestination = () => {
    const newDestinations = [...destinations, destinations.length + 1];
    setDestinations(newDestinations);
  };

  const removeDestination = (index) => {
    const newDestinations = [...destinations];
    newDestinations.splice(index, 1);
    setDestinations(newDestinations);
  };

  const handleDestinationChange = (text, index) => {
    const newDestinations = [...destinations];
    newDestinations[index] = text;
    setDestinations(newDestinations);
  };

  const handleNextButtonPress = () => {
    if (!origin || !receiverName || !receiverNumber || destinations.some(destination => !destination)) {
      Alert.alert("Error", "Please fill in all required fields.");
    } else {
      navigation.navigate("PackagesInfoScreen");
    }
  };

  return (
    <SafeAreaView style={addressStyle.safeview}>
      <Header title="RightNOW" type="arrow-left" navigation={navigation} />
      <View style={addressStyle.view}>
        <View style={addressStyle.marginhorizontal}>
          <TextInput
            label="Origin"
            style={addressStyle.textinput}
            activeUnderlineColor="#74D24F"
            value={origin}
            onChangeText={setOrigin}
          />

          <TextInput
            label="Receiver Name"
            style={addressStyle.textinput}
            activeUnderlineColor="#74D24F"
            value={receiverName}
            onChangeText={setReceiverName}
          />
           <TextInput
            label="Receiver Number"
            style={addressStyle.textinput}
            activeUnderlineColor="#74D24F"
            value={receiverNumber}
            onChangeText={setReceiverNumber}
            keyboardType="phone-pad"
          />
        
        {destinations.map((destination, index) => (
          <TextInput
            label="Destination"
            style={addressStyle.textinput}
            key={`destination${index}`}
            activeUnderlineColor="#74D24F"
            value={destination}
            onChangeText={(text) => handleDestinationChange(text, index)}
            right={
              destinations.length > 1 ? (
                <TextInput.Icon
                  type="material-comunity"
                  icon="close"
                  style={addressStyle.buttoniconremove}
                  iconColor={addressStyle.buttoniconremove.color}
                  onPress={() => removeDestination(index)
                  }
                />
              ) : null
            }
          />
        ))}
        </View>
        <View>
          <Button
            icon="plus"
            style={addressStyle.buttoniconadd}
            labelStyle={addressStyle.buttoniconlabel}
            onPress={addDestination}
          />
        </View>

        <Button
          onPress={handleNextButtonPress}
          mode="contained"
          style={addressStyle.nextbutton}
          labelStyle={addressStyle.nextbuttonlabel}
          buttonColor={addressStyle.nextbutton.color}
        >
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
};

export { AddressScreen };

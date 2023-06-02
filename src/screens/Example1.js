import React, { Component } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Image, ScrollView, Alert } from "react-native";
import ItemHeader from "../components/ItemHeader";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../firebaseConfig";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { Button, TextInput } from "react-native-paper";
import { example1Style } from "./screenStyles/Example1Style";

const Example1 = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [destinations, setDestinations] = useState([""]);
  const [origin, setOrigin] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverNumber, setReceiverNumber] = useState("");

  const [senderEmail, setSenderEmail] = useState("");
  const [height, setHeight] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [depth, setDepth] = useState("");
  const [width, setWidth] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  function generateRandomNumbers() {
    const numbers = [];

    for (let i = 0; i < 6; i++) {
      const randomInt = Math.floor(Math.random() * 100); // Generate a random integer between 0 and 99
      const formattedNumber = "RN" + randomInt.toString().padStart(2, "0"); // Prefix with "RN" and ensure two-digit format
      numbers.push(formattedNumber);
    }

    return numbers;
  }

  // Example usage
  const randomNumbers = generateRandomNumbers();
  console.log(randomNumbers);

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

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(image.uri);
      const blob = await response.blob();

      // Create a unique file name for the image
      const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);

      // Upload image to Firebase Storage
      const storageRef = firebase.storage().ref().child(filename).put(blob);
      try {
        await storageRef;
      } catch (e) {
        console.log(e);
      }
      setUploading(false);
      Alert.alert("Photo uploaded..!!");
      setImage(null);

      // Get the image download URL
      const downloadURL = await storageRef.getDownloadURL();

      // Do something with the downloadURL (e.g., save it to Firestore)
      // ...
    } catch (error) {
      console.log(error);
    }
  };
  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      const source = { uri: result.assets[0].uri };
      console.log(source);
      setImage(source);

      if (!result.canceled) {
        uploadImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: "#74D24F",
    activeLabelColor: "#686868",
    activeStepIconColor: "#74D24F",
    activeStepNumColor: "white",
    completedStepIconColor: "#74D24F",
    completedProgressBarColor: "#686868",
    completedCheckColor: "#4bb543",
  };

  const buttonTextStyle = {
    color: "#686868",
    fontWeight: "bold",
  };

  const defaultScrollViewProps = {
    KeyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };

  const onNextStep = () => {
    console.log("called next step");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitStep = () => {};
  return (
    <SafeAreaView style={example1Style.container}>
      <View style={example1Style.view1}>
        <ItemHeader
          title="Item Description"
          type="arrow-left"
          navigation={navigation}
        />

        <View style={example1Style.view2}>
          <ProgressSteps {...progressStepsStyle}>
            <ProgressStep
              label="Description"
              onNext={onNextStep}
              onPrevious={onPrevStep}
              scrollViewProps={defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
            >
              <ScrollView>
                <View style={example1Style.view}>
                  <View>
                    <Text style={example1Style.Texts}>Description:</Text>
                    <TextInput
                      placeholder="Please enter description"
                      style={example1Style.textinput}
                      activeUnderlineColor="#74D24F"
                      // value={pDescription}
                      // onChangeText={setPDescription}
                    />
                  </View>
                  <View>
                    <Text style={example1Style.Texts}>Height:</Text>
                    <TextInput
                      style={example1Style.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package height in cm"
                      keyboardType="numeric"
                      // value={pHeight}
                      // onChangeText={setPHeight}
                    />
                  </View>

                  <View>
                    <Text style={example1Style.Texts}>Width:</Text>
                    <TextInput
                      style={example1Style.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package width in kg"
                      keyboardType="numeric"
                      // value={pWidth}
                      // onChangeText={setPWidth}
                    />
                  </View>

                  {/* depth */}
                  <View>
                    <Text style={example1Style.Texts}>Depth:</Text>
                    <TextInput
                      style={example1Style.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package depth in cm"
                      keyboardType="numeric"
                      // value={pDepth}
                      // onChangeText={setPDepth}
                    />
                  </View>

                  {/* Weight */}
                  <View>
                    <Text style={example1Style.Texts}>Weight:</Text>
                    <TextInput
                      style={example1Style.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package weight in cm"
                      keyboardType="numeric"
                      // value={pWeight}
                      // onChangeText={setPWeight}
                    />
                  </View>
                </View>
              </ScrollView>
            </ProgressStep>

            <ProgressStep
              label="Upload Image"
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
            >
              <View style={example1Style.ImagePickerBox}>
                <ScrollView>
                  <View style={example1Style.view3}>
                    <View style={example1Style.view4}>
                      <Image
                        style={example1Style.imag1}
                        source={{
                          uri: "data:image/png;base64,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",
                        }}
                      />
                    </View>
                    <View style={example1Style.view4}>
                      <Text style={example1Style.Texts}>Upload Image Here</Text>
                    </View>
                    {/* <View>
                    <Text style={colors.grey5}>
                      upload the photo of the item
                    </Text>
                  </View> */}
                    <View style={example1Style.view5}>
                      <TouchableOpacity
                        style={example1Style.imgbutton}
                        onPress={pickImage}
                      >
                        <Text style={example1Style.textcolor}>Pick Image</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      {image && (
                        <Image
                          source={{ uri: image.uri }}
                          style={example1Style.imag2}
                        />
                      )}
                      <TouchableOpacity
                        style={example1Style.imgbutton}
                        onPress={uploadImage}
                      >
                        <Text style={example1Style.textcolor}>
                          Upload Image
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </ProgressStep>

            <ProgressStep
              label="Necessary Details"
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              onSubmitStep={this.onSubmitStep}
              scrollViewProps={this.defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
            >
              <View style={example1Style.view1}>
                <View style={example1Style.marginhorizontal}>
                  <TextInput
                    label="Origin"
                    style={example1Style.textinput}
                    activeUnderlineColor="#74D24F"
                    value={origin.toString()}
                    onChangeText={setOrigin}
                  />
                  <TextInput
                    label="Receiver Name"
                    style={example1Style.textinput}
                    activeUnderlineColor="#74D24F"
                    value={receiverName.toString()}
                    onChangeText={setReceiverName}
                  />

                  <TextInput
                    label="Receiver Email"
                    style={example1Style.textinput}
                    activeUnderlineColor="#74D24F"
                    value={receiverName.toString()}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />
                  <TextInput
                    label="Receiver Number"
                    style={example1Style.textinput}
                    activeUnderlineColor="#74D24F"
                    value={receiverNumber.toString()}
                    onChangeText={setReceiverNumber}
                    keyboardType="phone-pad"
                  />
                  {destinations.map((destination, index) => (
                    <TextInput
                      label="Destination Coordinates"
                      style={example1Style.textinput}
                      key={`destination${index}`}
                      activeUnderlineColor="#74D24F"
                      value={destination.toString()}
                      onChangeText={(text) =>
                        handleDestinationChange(text, index)
                      }
                      right={
                        destinations.length > 1 ? (
                          <TextInput.Icon
                            type="material-comunity"
                            icon="close"
                            style={example1Style.buttoniconremove}
                            iconColor={example1Style.buttoniconremove.color}
                            onPress={() => removeDestination(index)}
                          />
                        ) : null
                      }
                    />
                  ))}
                </View>
                <View>
                  <Button
                    icon="plus"
                    style={example1Style.buttoniconadd}
                    labelStyle={example1Style.buttoniconlabel}
                    onPress={addDestination}
                  />
                </View>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Example1;

import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Image, ScrollView, Alert } from "react-native";
import ItemHeader from "../components/ItemHeader";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../firebaseConfig";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import { Button, TextInput } from "react-native-paper";
import { itemdescriptionStyle } from "./screenStyles/ItemDescriptionStyle";

const ItemDescriptionScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [destinations, setDestinations] = useState([""]);
  const [origin, setOrigin] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverNumber, setReceiverNumber] = useState("");
  const [emails, setEmail] = useState("");
  const [dLatitude, setDLatitude] = useState("");
  const [dLongitude, setDlongitude] = useState("");
  const [height, setHeight] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [depth, setDepth] = useState("");
  const [width, setWidth] = useState("");
  const [rEmail, setREmail] = useState("");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    function generateRandomNumbers() {
      const numbers = [];

      const randomInt = Math.floor(Math.random() * 900000); //Generate a random integer between 0 and 99
      const formattedNumber = "RN" + randomInt.toString().padStart(4, "1"); // Prefix with "RN" and ensure two-digit format
      numbers.push(formattedNumber);

      return numbers;
    }

    const randomNumbers = generateRandomNumbers();
    setOrderId(randomNumbers[0]); // Use the generated random number as orderId
  }, []); // Use the generated random number as orderId

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

      // save it to Firestore
      const currentUser = firebase.auth().currentUser;
      const userRef = firebase
        .firestore()
        .collection("orders")
        .doc(currentUser.uid);
      await userRef.update({ image: downloadURL });
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
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid);
        const doc = await userDocRef.get();
        if (doc.exists) {
          const userData = doc.data();

          setEmail(userData.emails);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const handleSubmit = async () => {
    try {
      const data = {
        description,
        height,
        width,
        depth,
        weight,
        origin,
        rEmail,
        image,
        dLatitude,
        dLongitude,
        receiverName,
        receiverNumber,
        senderEmail: emails,
        orderId: orderId,
      };

      const currentUser = firebase.auth().currentUser;
      const userRef = firebase
        .firestore()
        .collection("orders")
        .doc(currentUser.uid);
      await userRef.set(data);
      uploadImage();
      alert("Data saved, choose Courier");
      navigation.navigate("MapsScreen", { orderId: orderId });
    } catch (error) {
      console.log("Error saving data");
    }
  };
  return (
    <SafeAreaView style={itemdescriptionStyle.container}>
      <View style={itemdescriptionStyle.view1}>
        <ItemHeader
          title="Item Description"
          type="arrow-left"
          navigation={navigation}
        />

        <View style={itemdescriptionStyle.view2}>
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
                <View style={itemdescriptionStyle.view}>
                  <View>
                    <Text style={itemdescriptionStyle.Texts}>Description:</Text>
                    <TextInput
                      placeholder="Please enter description"
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      value={description}
                      onChangeText={setDescription}
                    />
                  </View>
                  <View>
                    <Text style={itemdescriptionStyle.Texts}>Height:</Text>
                    <TextInput
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package height in cm"
                      keyboardType="numeric"
                      value={height}
                      onChangeText={setHeight}
                    />
                  </View>
                  <View>
                    <Text style={itemdescriptionStyle.Texts}>Width:</Text>
                    <TextInput
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package width in kg"
                      keyboardType="numeric"
                      value={width}
                      onChangeText={setWidth}
                    />
                  </View>
                  <View>
                    <Text style={itemdescriptionStyle.Texts}>Depth:</Text>
                    <TextInput
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package depth in cm"
                      keyboardType="numeric"
                      value={depth}
                      onChangeText={setDepth}
                    />
                  </View>
                  <View>
                    <Text style={itemdescriptionStyle.Texts}>Weight:</Text>
                    <TextInput
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      placeholder="Please enter package weight in cm"
                      keyboardType="numeric"
                      value={weight}
                      onChangeText={setWeight}
                    />
                  </View>
                </View>
              </ScrollView>
            </ProgressStep>

            <ProgressStep
              label="Upload Image"
              onNext={onNextStep}
              onPrevious={onPrevStep}
              scrollViewProps={defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
            >
              <View style={itemdescriptionStyle.ImagePickerBox}>
                <ScrollView>
                  <View style={itemdescriptionStyle.view3}>
                    <View style={itemdescriptionStyle.view4}>
                      <Image
                        style={itemdescriptionStyle.imag1}
                        source={{
                          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAC5CAMAAADXsJC1AAAArlBMVEX///9YrvNVrO44ODhQq/NLqO2k0fi12feWyPO52vf6+vqcnJwsLCxAQEDx8fE0NDR8vfHr6+vw7epYWFi5ubktLS0nJyf4/P9IqPJMTEwiIiJeXl5js/SwsLDg7/2Ewvbt9v5wufWEhIRwcHBQUFDP5vuu1fnW6vyMxvaTk5PJycmioqJ6enoaGhqfn58RERHY2NjOzs5oaGiKiorCv7wAAADA2vBMjL2SvN9Sm9Qqy2ewAAAE9ElEQVR4nO3djXqiOBiGYZxY6w+YuhpALCpYrdbacWzH2Tn/E1tA29Uo/lTxI/DeB7DXx3NFSJTZahoAAABAjlnd4XA57Pap50gFazku2MWIXehV+tTzEOuXgxCFL0GUcZd6JkJWabPGuok97lPPRWX4uJMjSlKoUE9Go2TvyxEl6VHPRmEc2yMo4lFPd3vjvR+XryIP1PPdWulgj6DImHrC2xoe6REUuaee8ZasYznCIn3qKW/o8A0kf7eR/oEHzP/s/OxZyycskDztRqyTeuToLnL8EbMOMqKeNHHdUc/zvMfTegQ872FceqaeOjHDXnH3dHt0mRRtb0g9eTLK9tk11uyxRT18AnrfzREuEy97RU571MYWydwj+PmiHsGnZkl9BVfmXRik8Eh9BdfVPWmzfnCJZOtRc+zrj+OKZepruKqHi4MUsvWtondxj0KR+hqux7KuEcQO/zvKs+4fTj+5nODRG6n8LUm/Z59/eDkiONooe9qrXL3Gil2ivrLvif9l7lJq/kYxSmZ5rIoouCl5Tmx9hBTct1714bIH9fWda5noAgk+NKq9MuEl20O9nXyCd9SVolrb1m7yQdTanp3608sFQdR6zlz6jeEJQdS6q94giForpJ98EMVOvUnvy5T7vijJk0zUQ7Xz3WnvxHyfem/TXPZL3TEK/pJn7X9v+1r61Nd3vm4hwSLKfWBC3aTWSLGg1rb9izX+9hshh3LYvT71lX3b89he/2upa7HtnqLL49OwMipdzagyVOvUDwA3UaUeIG38BvUE6VLXJ9QjpItrcnxoNrW56VLPkCa/HMYE9RBpsuCMmS3qKdKjMWOM8SfqMdJjIoIgzHyhniMtqkbYg/EF9SBp0TKjIMycU0+SEh2+CiJeqSdJh/l6gTCmY/8e8sVXEOzfAw2dfTGxf9e0t40g+pR6mhQw2Abs37UPZzMI9u9ak28Gwf59vrVAsH/feOYy7N8DdSbL+f59aspB8r1/r27fUldLJM/79xdnpwcT79RTERrsLpBgidSpxyLTmOmm9JRhjjOrUc9F5u11+vK+XcRo/Jrm+ra6dbYLg+T+vFtDkG0IIkEQCYJI1kE45wgSiYLo7cGgIziCaFEQ3p5OfN93BzqChEH4k9sWXAg+CTZpCBIEcVl0/xA/JwuOIDXHf416OO+NjisQpOZMDSEEc2patflmIEht1nIGdf+nq9UXzrSNILWZKxaaNteqbaG7CBJ8ZCYdc1HVGsGd1XRxU9Vq5pNrivbU4Ez3JzqC1HTx/uYInXNz4XKskHCnavot3zA6routu7Y6ywjDd1uTpkAQ7fO0y3U9OtshCL4PkSGIBEEkCCJBEAmCSBBEMpmZm/BP7+atbdTz3FZj0dz0lPt32wfBoXaTk+e3hUId+Y0hJ+drZCcIc/L9un+Hc0PCnxaLTmR9Xwm1VwzuU0+csI74aMT6Z9fH74y/xttpN6r1GNVledeff6lHTlYQJPady8rdHj/usv2n/w4Eub/7sc+dgv9D+zM0Y4NU9vfIeJDS378PMWJ6ZDvI0I4uce+9Ik6mg8R9LA5BEARBEAT5hCASBJEgiARBJAgiQRAJgkgQRIIgEgSRIIgEQSQIIkEQCYJIEESCIBIEkSCIBEEkCCJBEAmCSBBEgiASBJF0974JcYRaf4f6TN37syn+N/4AAAAAAAAAAAAAsu4/kYZy9s2KnZkAAAAASUVORK5CYII=",
                        }}
                      />
                    </View>
                    <View style={itemdescriptionStyle.view4}>
                      <Text style={itemdescriptionStyle.Texts}>
                        Upload Image Here
                      </Text>
                    </View>

                    <View style={itemdescriptionStyle.view5}>
                      <TouchableOpacity
                        style={itemdescriptionStyle.imgbutton}
                        onPress={pickImage}
                      >
                        <Text style={itemdescriptionStyle.textcolor}>
                          Pick Image
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      {image && (
                        <Image
                          source={{ uri: image.uri }}
                          style={itemdescriptionStyle.imag2}
                        />
                      )}
                      <TouchableOpacity
                        style={itemdescriptionStyle.imgbutton}
                        onPress={uploadImage}
                      >
                        <Text style={itemdescriptionStyle.textcolor}>
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
              onNext={onNextStep}
              onPrevious={onPrevStep}
              onSubmitStep={handleSubmit}
              scrollViewProps={defaultScrollViewProps}
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}
              finishBtnText=""
              previousBtnText="Previous"
            >
              <ScrollView>
                <View style={itemdescriptionStyle.view1}>
                  <View style={itemdescriptionStyle.marginhorizontal}>
                    <TextInput
                      label="Origin Coordinates"
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      value={origin}
                      onChangeText={setOrigin}
                    />
                    <TextInput
                      label="Receiver Name"
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      value={receiverName}
                      onChangeText={setReceiverName}
                    />

                    <TextInput
                      label="Receiver Email"
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      value={rEmail}
                      onChangeText={setREmail}
                      keyboardType="email-address"
                    />
                    <TextInput
                      label="Destination Longitude"
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      value={dLongitude}
                      onChangeText={setDlongitude}
                      keyboardType="numbers-and-punctuation"
                    />

                    <TextInput
                      label="Destination latitude"
                      style={itemdescriptionStyle.textinput}
                      activeUnderlineColor="#74D24F"
                      value={dLatitude}
                      onChangeText={setDLatitude}
                      keyboardType="numbers-and-punctuation"
                    />
                  </View>

                  <Button
                    mode="contained"
                    style={itemdescriptionStyle.readybutton}
                    labelStyle={itemdescriptionStyle.readybuttonlabel}
                    onPress={handleSubmit}
                    buttonColor={itemdescriptionStyle.readybutton.color}
                  >
                    Ready
                  </Button>
                </View>
              </ScrollView>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemDescriptionScreen;

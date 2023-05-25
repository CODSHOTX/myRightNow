import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { editprofileStyle } from "./userScreens/EditProfileStyle";
import ItemHeader from "../components/ItemHeader";
import { useState } from "react";
import { PackagesInfoStyles } from "./screenStyles/PackagesInfoStyles";
import { Button } from "@rneui/themed";

export default function PackagesInfoScreen({navigation}){
    const [pHeight, setPHeight] =useState('');

    return(
        <SafeAreaView style={editprofileStyle.container}>
       <ItemHeader title="Item Description" type="less-than" navigation={navigation}/>

       <View style={{ marginTop: 20 }}>
        <View style={PackagesInfoStyles.textView}>
        <Text style={PackagesInfoStyles.Texts}>
                Height
            </Text>
        </View>
        <View>
          
            
          
        </View>
        <View>
            <TextInput
            
            style={editprofileStyle.TextInput}
            placeholder="Please enter package height in cm"
            //onChangeText={pHeight}
          />
            </View>

            <View style={PackagesInfoStyles.textView}>
        <Text style={PackagesInfoStyles.Texts}>
                Width
            </Text>
        </View>
        <View>
          
            
          
        </View>
        <View>
            <TextInput
            
            style={editprofileStyle.TextInput}
            placeholder="Please enter package width in cm"
            //onChangeText={pHeight}
          />
            </View>

{/* depth*/}
            <View style={PackagesInfoStyles.textView}>
        <Text style={PackagesInfoStyles.Texts}>
                Depth
            </Text>
        </View>
        <View>
          
            
          
        </View>
        <View>
            <TextInput
            
            style={editprofileStyle.TextInput}
            placeholder="Please enter package depth in cm"
            //onChangeText={pHeight}
          />
            </View>


            {/* Weight*/}
            <View style={PackagesInfoStyles.textView}>
        <Text style={PackagesInfoStyles.Texts}>
                Weight
            </Text>
        </View>
        <View>
          
            
          
        </View>
        <View>
            <TextInput
            
            style={editprofileStyle.TextInput}
            placeholder="Please enter package weight in cm"
            //onChangeText={pHeight}
          />
            </View>

            <Button
            title='Next'
            buttonStyle={PackagesInfoStyles.nextButton}
          titleStyle={PackagesInfoStyles.nextTitle}
        /*  onPress={() => {
            navigation.navigate("SignUpScreen");
          }}*/
            
            />
        </View>
  
        </SafeAreaView>
    )
}
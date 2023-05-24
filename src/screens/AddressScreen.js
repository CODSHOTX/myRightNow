import { Icon } from "@rneui/base";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, TextInput, TextInputMask} from "react-native-paper";
import Header from "../components/Header";
import { addressStyle } from "./screenStyles/AddressStyle";

const AddressScreen = ({ navigation }) => {
    const destinations = [1, 2];

    return (
        <SafeAreaView style={addressStyle.safeview}>
            <Header title="RightNOW" type="arrow-left" navigation={navigation} />
            <View style={addressStyle.view}>
                <View style={addressStyle.marginhorizontal}>
                    <TextInput
                        label="Origin"
                        style={addressStyle.textinput}
                        activeUnderlineColor="#74D24F"
                    />

                    {destinations.map((destination, index) => (
                        <TextInput
                            label="Destination"
                            style={addressStyle.textinput}
                            key={`destination${index}`}
                            activeUnderlineColor="#74D24F"
                            right={
                                destinations.length > 1 ? (
                                    <Icon
                                        type="material-comunity"
                                        icon="close"
                                        style={addressStyle.buttoniconremove}
                                        iconColor={addressStyle.buttoniconremove.color}
                                    />
                                ) : null
                            }
                        />
                    ))}
                    <TextInput
                        label="Reciver Name"
                        style={addressStyle.textinput}
                        activeUnderlineColor="#74D24F"
                    />
                    <TextInput
                        label="Number"
                        style={addressStyle.textinput}
                        activeUnderlineColor="#74D24F"
                    />
                    <TextInput
                        label="KG(Optional)"
                        style={addressStyle.textinput}
                        activeUnderlineColor="#74D24F"
                    />
                </View>
                <View>
                    <Button
                        icon="plus"
                        style={addressStyle.buttoniconadd}
                        labelStyle={addressStyle.buttoniconlabel}
                    ></Button>
                </View>

                <Button
                    mode="contained"
                    style={addressStyle.readybutton}
                    labelStyle={addressStyle.readybuttonlabel}
                    buttonColor={addressStyle.readybutton.color}
                >
                    Ready
                </Button>
            </View>
        </SafeAreaView>
    );
};

export { AddressScreen };
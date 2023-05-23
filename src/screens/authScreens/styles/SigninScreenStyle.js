import { StyleSheet } from "react-native";
import { colors } from "../../../global/styles";

export const signinscreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5"
    },
    backcolor: {
        backgroundColor: "white"
    },
    text1: {
      color: colors.grey3,
      fontSize: 13,
    },
    TextInput: {
      borderWidth: 1,
      borderColor: "#86939e",
      marginHorizontal: 20,
      borderRadius: 12,
      marginBottom: 20,
      padding: 10,
      height: 50
    },
    TextInput2: {
      borderWidth: 1,
      borderRadius: 12,
      marginHorizontal: 20,
      borderColor: "#86939e",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
      padding: 10,
      height: 50
    },
    SocialIcon: {
      width: "90%",
      height: 50
    },
    createButton: {
      backgroundColor: "white",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#74D24F",
      height: 40,
      paddingHorizontal: 20,
    },
    createButtonTitle: {
      color: "#74D24F",
      fontSize: 16,
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "center",
      marginTop: -3,
    },
  });
  
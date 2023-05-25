import { StyleSheet } from "react-native";
import { colors } from "../../global/styles";

export const PackagesInfoStyles =StyleSheet.create({
    textView:{
        marginBottom:15,
        marginLeft:20
    },
    Texts:{
        color:"#74D24F",
        fontSize:19,
    },
    nextButton:{
        backgroundColor:'#74D24F',
        width:100,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#74D24F",
        height: 40,
        
    },
    nextTitle:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3,
    }
})
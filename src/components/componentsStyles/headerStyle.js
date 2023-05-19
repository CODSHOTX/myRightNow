import { StyleSheet } from "react-native";
import {colors, parameters} from "../../global/styles";

export const headerStyle = StyleSheet.create({
    header :{
        flexDirection:"row",
        backgroundColor: colors.green,
        height:parameters.headerHeight
    },
    headerText:{
        color:colors.headerText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:30
    }
})
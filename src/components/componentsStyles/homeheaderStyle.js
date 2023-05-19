import { StyleSheet } from "react-native";
import {colors,parameters} from "../../global/styles";

export const homeheaderStyle = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between'
    }
})
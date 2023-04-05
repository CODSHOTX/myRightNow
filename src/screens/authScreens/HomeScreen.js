import React,{useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { Icon } from "@rneui/base";
import HomeHeader from "../../components/HomeHeader";
import { colors } from "../../global/styles";

export default function HomeScreen(){
    const [delivery, setDelivery] = useState(true)
    return(
        <View style={styles.container}>
            <HomeHeader />
<ScrollView
    stickyHeaderIndices={[0]}
    showsVerticalScrollIndicator={true}
>
    <View >
            <View style = {{marginTop:10, flexDirection:"row",justifyContent:'space-evenly'}}>
                <TouchableOpacity 
                 onPress ={()=>{
                    setDelivery(true)
                }}
                >
                    
                    <View style ={{...styles.deliveryButton,backgroundColor:delivery?colors.buttons :colors.grey5}}>
<Text style = {styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress ={()=>{
                    setDelivery(false)
                }}
                >
                
                    <View style ={{...styles.deliveryButton,backgroundColor:delivery?colors.grey5 :colors.buttons}}>
<Text style = {styles.deliveryText}>Pick Up</Text>
                    </View>
                </TouchableOpacity>
            </View>

            </View>
            <View style ={styles.filterView}>
<View style={styles.addressView}>
    <View style={{flexDirection:"row",alignItems:'center',paddingLeft:10 }}>
        <Icon
            type="material-community"
            name = "map-marker"
            color="#BF181D"
            size ={26}
        />
        <Text style={{marginLeft:5}}>22 Beessie Street</Text>
    </View>

    <View style={styles.clock}>
        <Icon
            type="material-community"
            name = "clock-time-four"
            color={colors.grey1}
            size ={26}
        />
        <Text style={{marginLeft:5}}>Now</Text>
    </View>

</View>
<View>
<Icon
            type="material-community"
            name = "tune"
            color={colors.grey1}
            size ={26}
        />
</View>
</View>
<View style={styles.headerTextView}><Text style={styles.headerText}>Categories:</Text></View>
            </ScrollView>
           
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
       
    },
    deliveryButton:{
        paddingHorizontal:20, 
        borderRadius:15,
        paddingVertical:5,

    },
    deliveryText:{
        marginLeft:5,
        fontSize:16,
        
    },
    filterView:{
        flexDirection:"row",
         alignItems:"center", 
         justifyContent:"space-evenly",
          marginHorizontal:10, 
        marginVertical:10
    },
    clock:{flexDirection:"row",
    alignItems:'center',
     marginLeft:20, 
     backgroundColor:colors.cardbackground,
        borderRadius:15,
     paddingHorizontal:5,
        marginRight:20
    },
    addressView:{flexDirection:"row",
     backgroundColor:colors.grey5,
      borderRadius:15,
       paddingVertical:3,
        justifyContent:"space-between",
        paddingHorizontal:20
    
    },
    headerText:{
        color: colors.grey1,
        fontWeight:"bold",
        fontSize:22,
        paddingLeft:10,

    },

    headerTextView:{backgroundColor:colors.grey5,
         paddingLeft:5,
          marginTop:10,
        paddingVertical:3}

})
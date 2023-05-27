import { StyleSheet } from "react-native";

export const PackagesInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  view:{ 
    flex: 1, 
    backgroundColor: "white", 
},
  textView: {
    marginBottom: 1,
    marginLeft: 20,
  },
  Texts: {
    color: "#74D24F",
    fontSize: 17,
    fontWeight: "bold",
    margin:10,
    marginBottom: -15
  },
  nextButton: {
    backgroundColor: "#74D24F",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#74D24F",
    height: 40,
    marginLeft: 20,
  },
  readybutton: {
    margin:12,
    marginTop: 20,
    height: 50,
    paddingVertical: 3,
    color: "#74D24F"
},

readybuttonlabel:{
   fontSize: 18
},
textinput:{
  backgroundColor: "transparent",
  margin: 10
},
nextTitle:{
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
},
ImagePickerBox:{
    flexDirection:'column',
    borderStyle:'dashed',
    justifyContent:'center',
    borderColor:'#74D24F',
    height:350,
    width:300,
    alignItems:'center',
   borderWidth:2,
   marginLeft:50
    
},

imgButton:{
    width:100,
    alignItems:'center',
    backgroundColor:"#74D24F",
    borderRadius:5,
    
    marginTop:10}
});


   
    
   
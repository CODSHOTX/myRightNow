import { StyleSheet } from "react-native";

export const drawerStyle = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingLeft: 20,
    paddingVertical: 10,
    paddingBottom: -20,
    top: -40
  },
  view1:{
    marginLeft: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  avatar: {
    borderWidth: 4,
    borderColor: "white"
  },
  text1: {
    fontWeight: "bold",
    color: "#74D24F",
    fontSize: 18
  },
  text2:{
    color: "#C9C9C7", 
    fontSize: 14
  },
  lview: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  nview: {
    flexDirection: "row", 
    marginTop: 10
  }
});

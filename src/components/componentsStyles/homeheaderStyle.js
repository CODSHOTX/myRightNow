import { StyleSheet } from "react-native";

export const homeheaderStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1: {
    color: "#74D24F",
    fontSize: 25,
    fontWeight: "bold",
  },
  view1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  view2: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2, 
  },
});

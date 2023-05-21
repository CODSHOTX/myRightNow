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
  lview: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

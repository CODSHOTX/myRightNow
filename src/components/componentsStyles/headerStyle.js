import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    height: 40,
  },
  icon: {
    marginLeft: 20,
  },
  title: {
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    color: "#74D24F",
    fontSize: 22,
    fontWeight: "bold",
  },
});

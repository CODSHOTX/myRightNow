import { StyleSheet } from "react-native";

export const requestStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 7,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    flex: 1,
  },
  textmargin: {
    margin: 7,
    color: "#74D24F",
  },
  card: {
    margin: 12,
  },
  rejectButton: {
    color: "#74D24F",
    borderColor: "#74D24F",
  },
  acceptButton: {
    backgroundColor: "#74D24F",
  },
  submitButton: {
    backgroundColor: "#74D24F",
    flex: 0.5,
  },
});

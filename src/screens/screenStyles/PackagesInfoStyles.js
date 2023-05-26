import { StyleSheet } from "react-native";

export const PackagesInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center"
  },
  textView: {
    marginBottom: 1,
    marginLeft: 20,
  },
  Texts: {
    color: "#74D24F",
    fontSize: 19,
    margin: 17,
    fontWeight: "bold",
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
  nextTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  TextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#86939e",
    borderRadius: 6,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#fff",
    color: "#000",
  },
});

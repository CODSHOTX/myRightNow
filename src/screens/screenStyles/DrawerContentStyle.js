import { StyleSheet } from "react-native";

export const drawerStyle = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingLeft: 20,
    paddingVertical: 30,
    paddingBottom: -20,
    top: -20,
  },
  view1: {
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  avatar: {
    borderWidth: 4,
    borderColor: "white",
  },
  text1: {
    fontWeight: "bold",
    color: "#74D24F",
    fontSize: 18,
  },
  text2: {
    color: "#C9C9C7",
    fontSize: 14,
  },
  lview: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  nview: {
    flexDirection: "row",
    marginTop: 10,
  },
  locview:{
    width: '70%',
    height: '20%',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
    marginHorizontal: 32
  },
  toggleButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    margin: 10
  },
  activeButton: {
    backgroundColor: "#74D24F",
  },
  inactiveButton: {
    backgroundColor: "#C9C9C7",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

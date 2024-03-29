import { StyleSheet } from "react-native";

export const myorderStyle = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    backgroundColor: "white",
    paddingBottom: 5,
  },
  view2: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  card: {
    margin: 10,
    marginBottom: 5,
  },
  cardstatus: {
    borderTopWidth: 3,
    borderTopColor: "#74D24F",
  },
  cardtitle: {
    color: "#74D24F",
    marginBottom: -5,
  },
  price: {
    color: "#74D24F",
    fontSize: 16,
    fontWeight: "bold",
    marginEnd: 15,
  },
  cardcontent: {
    marginBottom: -12,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
    color: "white",
  },
});

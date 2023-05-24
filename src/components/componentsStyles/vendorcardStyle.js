import { StyleSheet } from "react-native";

export const vendorcardStyle = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: "#C7C9C7",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },

  vendorName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#C5C7C7",
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: "row",
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },

  minutes: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: "#C9C9C7",
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: "#C7C7C7",
    paddingHorizontal: 10,
  },
  review: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(52, 52, 52, 0.3)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  numOfRev: {
    color: "white",
    marginRight: 10,
    marginLeft: 0,
    fontSize: 13,
  },
  view1: {
    flex: 9,
    flexDirection: "row",
  },
});

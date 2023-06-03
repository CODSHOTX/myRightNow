import { StyleSheet } from "react-native";

export const mapStyle = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  flex: {
    flex: 1,
  },
  markerImage: {
    width: 32,
    height: 32,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 20,
  },
  icon: {
    color: "#74D24F",
    marginTop: 20,
  },

  confirmButton: {
    marginBottom: 7,
    backgroundColor: "#74D24F",
  },
  cancelButton: {
    color: "#74D24F",
    borderColor: "#74D24F",
  },
  cancelButton2: {
    position: "absolute",
    margin: "3%",
    bottom: 0,
    width: "95%",
    backgroundColor: "#74D24F",
  },
  card: {
    margin: 10,
  },

  title: {
    margin: 20,
    marginTop: 20,
    textAlign: "center",
    color: "#74D24F",
  },
  flexCenter: {
    height: 10,
    display: "flex",
    justifyContent: "center",
    margin: 10,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  titleText: {
    color: "#74D24F",
  },
  image: {
    alignSelf: "auto",
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});

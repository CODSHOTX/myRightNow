import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  imag: {
    height: 400,
    width: 400,
  },
  view1: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 140,
    marginLeft: 25,
    paddingTop: 5,
  },
  view2: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  view2_1: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  view3: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#74D24F",
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: "#74D24F",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  welSignupBut: {
    backgroundColor: "#74D24F",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "white",
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});

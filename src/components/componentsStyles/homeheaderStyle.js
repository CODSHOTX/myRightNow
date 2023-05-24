import { StyleSheet } from "react-native";
import { parameters } from "../../global/styles";

export const homeheaderStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    height: parameters.headerHeight,
    justifyContent: "space-between",
  },
  text1: {
    color: "#74D24F",
    fontSize: 25,
    fontWeight: "bold",
  },

  veiw1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  veiw2: {
    alignItems: "center",
    justifyContent: "center",
  },
  veiw3: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
});

import { StyleSheet } from "react-native";
import { colors } from "../../global/styles";

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9C9C7"
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16
  },
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10
  },
  clock: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20
  },
  addressView: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  headerText: {
    color: colors.grey1,
    fontWeight: "bold",
    fontSize: 22,
    paddingLeft: 10,
  },

  headerTextView: {
    backgroundColor: colors.grey5,
    paddingLeft: 5,
    marginTop: 10,
    paddingVertical: 3,
  },

  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardbackground,
  },

  smallCardText: {
    fontWeight: "bold",
    color: colors.grey2,
  },
  floatButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: "white",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});

import { StyleSheet } from "react-native";
import { colors } from "../../global/styles";

export const homeStyle = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  view2: {
    backgroundColor: "white",
    paddingBottom: 5,
  },
  view2_1: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
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
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clock: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView_1: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  addressViewText: {
    marginLeft: 5,
    color: "#74D24F",
  },
  addressView: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
    backgroundColor: "#F5F5F5",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
  borderDox: {
    flex: 1,
    borderColor: "#74D24F",
    borderWidth: 2,
    borderRadius: 12,
    width: 350,
    justifyContent: "center",
    marginLeft: 34,
    marginTop: 100,
    flexDirection: "row", // Arrange items in a row
    alignItems: "flex-start", // Align items vertically in the center
    marginLeft: 20,
    // padding: 5, // Adjust the padding as needed
  },
  borderDox2: {
    flex: 1,
    borderColor: "#74D24F",
    borderWidth: 2,
    borderRadius: 12,
    width: 350,
    height: 100,
    justifyContent: "center",
    marginLeft: 34,
    marginTop: 50,
    marginLeft: 20,
    flexDirection: "row", // Arrange items in a row
    alignItems: "flex-start", // Align items vertically in the center
    // padding: 5, // Adjust the padding as needed
  },
  imageBox: {
    marginRight: 50,
  },
  imag: {
    height: 80,
    width: 80,
    borderRadius: 30,
  },
  imag2: {
    height: 80,
    width: 80,
    borderRadius: 30,
    margin: 10,
  },
  viewBox: {
    marginBottom: 15,
    marginRight: 15,
    margin: 10,
    alignItems: "center",
  },
  textBox: {
    color: "#74D24F",
    fontSize: 18,
    paddingTop: 10,
  },
  textBox1: {
    paddingTop: 5,
    color: "#C9C9C7",
    fontSize: 16,
    textAlign: "center",
  },
});

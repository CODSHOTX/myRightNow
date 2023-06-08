import React from "react";
import { render } from "@testing-library/react-native";
import CourierListScreen from "./CourierListScreen";

describe("CourierListScreen", () => {
  it("should render the list of couriers correctly", () => {
    const couriers = [
      {
        id: "1",
        fiName: "Ichiko",
        laName: "Kurasaki",
        profileImage: require("../images/profile1.png"),
        phNum: "5334567890",
      },
      {
        id: "2",
        fiName: "Mike",
        laName: "V",
        profileImage: require("../images/profile2.png"),
        phNum: "5336543210",
      },
    ];

    const { getByText } = render(<CourierListScreen couriers={couriers} />);

    couriers.forEach((courier) => {
      const nameText = getByText(`Name: ${courier.fiName} ${courier.laName}`);
      const bikePlateText = getByText("Bike Plate: XFH-1283");
      const phoneText = getByText(`Phone number: ${courier.phNum}`);
      const rateText = getByText("Rate: Good");

      expect(nameText).toBeTruthy();
      expect(bikePlateText).toBeTruthy();
      expect(phoneText).toBeTruthy();
      expect(rateText).toBeTruthy();
    });
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";

describe("HomeScreen", () => {
  it("should render the delivery option buttons correctly", () => {
    const { getByText } = render(<HomeScreen />);

    const deliveryButton = getByText("Delivery");
    const pickUpButton = getByText("Pick Up");

    expect(deliveryButton).toBeTruthy();
    expect(pickUpButton).toBeTruthy();
  });

  it("should navigate to the MapCourierScreen when Pick Up button is pressed", () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={navigationMock} />);

    const pickUpButton = getByText("Pick Up");
    fireEvent.press(pickUpButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith("MapCourierScreen");
  });

  it("should navigate to the ItemDescriptionScreen when Send Packages box is pressed", () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={navigationMock} />);

    const sendPackagesBox = getByText("Send Packages");
    fireEvent.press(sendPackagesBox);

    expect(navigationMock.navigate).toHaveBeenCalledWith("ItemDescriptionScreen");
  });

  it("should navigate to the HistoryScreen when Delivery History box is pressed", () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={navigationMock} />);

    const deliveryHistoryBox = getByText("Delivery History");
    fireEvent.press(deliveryHistoryBox);

    expect(navigationMock.navigate).toHaveBeenCalledWith("HistoryScreen");
  });
});

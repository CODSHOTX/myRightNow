import React from "react";
import { render } from "@testing-library/react-native";
import MapCourierScreen from "../MapCourierScreen";

describe("MapCourierScreen", () => {
  it("should render the map and markers correctly", () => {
    const { getByTestId } = render(<MapCourierScreen />);

    const mapView = getByTestId("map-view");
    const clientMarker = getByTestId("client-marker");
    const courierMarkers = getByTestId("courier-marker");

    expect(mapView).toBeTruthy();
    expect(clientMarker).toBeTruthy();
    expect(courierMarkers.length).toBeGreaterThan(0);
  });

  it("should display the selected marker details when a courier marker is pressed", () => {
    const { getByTestId } = render(<MapCourierScreen />);
    const courierMarker = getByTestId("courier-marker");

    fireEvent.press(courierMarker);

    const card = getByTestId("marker-details-card");
    expect(card).toBeTruthy();
  });

  it("should close the selected marker details when the Cancel button is pressed", () => {
    const { getByTestId } = render(<MapCourierScreen />);
    const courierMarker = getByTestId("courier-marker");

    fireEvent.press(courierMarker);

    const cancelButton = getByTestId("cancel-button");
    fireEvent.press(cancelButton);

    const card = getByTestId("marker-details-card");
    expect(card).toBeFalsy();
  });
});

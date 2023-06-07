import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SignInScreen from "../SigninScreen";

describe("SignInScreen", () => {
  test("should navigate to SignUpScreen when signupButton is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<SignInScreen navigation={navigation} />);

    const signupButton = getByTestId("signupButton");

    fireEvent.press(signupButton);

    expect(navigation.navigate).toHaveBeenCalledWith("SignUpScreen");
  });
});

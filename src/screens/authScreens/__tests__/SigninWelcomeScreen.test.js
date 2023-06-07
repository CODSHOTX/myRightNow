import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SignInWelcomeScreen from "../SigninWelcomeScrn";

describe("SignInWelcomeScreen", () => {
  test("should navigate to SignInScreen when signinButton is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(
      <SignInWelcomeScreen navigation={navigation} />
    );

    const signinButton = getByTestId("signinButton");
    fireEvent.press(signinButton);

    expect(navigation.navigate).toHaveBeenCalledWith("SigininScreen");
  });

  test("should navigate to SignUpScreen when createButton is pressed", () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(
      <SignInWelcomeScreen navigation={navigation} />
    );

    const createButton = getByText("Create an account");
    fireEvent.press(createButton);

    expect(navigation.navigate).toHaveBeenCalledWith("SignUpScreen");
  });
});

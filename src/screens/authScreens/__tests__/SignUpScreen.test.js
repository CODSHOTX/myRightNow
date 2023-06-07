import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SignUpscreen from './SignUpscreen';

describe('SignUpscreen', () => {
  test('should register user and navigate to SignInScreen when "Create my account" button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText, getByPlaceholderText } = render(
      <SignUpscreen navigation={navigation} />
    );

    const createAccountButton = getByText('Create my account');
    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const phoneNumberInput = getByPlaceholderText(' Number');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(firstNameInput, 'Mike');
    fireEvent.changeText(lastNameInput, 'Lee');
    fireEvent.changeText(phoneNumberInput, '5335678901');
    fireEvent.changeText(emailInput, 'leemike@yahoo.com');
    fireEvent.changeText(passwordInput, 'Password');

    fireEvent.press(createAccountButton);
    
    expect(navigation.navigate).toHaveBeenCalledWith('SigininScreen');
  });
});

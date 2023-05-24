import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ClientStack from "./clientStack";

export default function UserStack() {
  return (
    <NavigationContainer>
      <ClientStack />
    </NavigationContainer>
  );
}

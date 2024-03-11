import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import Initial from "./../screens/Initial";
import MyTabs from "./Bottom";

const stack = createNativeStackNavigator();

const Stack = () => {
  const { Navigator, Screen } = stack;
  return (
    <>
      <Navigator>
        <Screen
          name="/"
          component={Initial}
          options={{
            headerShown: false,
          }}
        ></Screen>
        <Screen
        name="Main"
        component={MyTabs}
        options={{
          headerShown: false, // Optionally hide the header
        }}
      />
      </Navigator>
    </>
  );
};

export default Stack;

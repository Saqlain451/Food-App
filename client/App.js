import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import sfBold from "./assets/fonts/sfbold.otf";
import sfMedium from "./assets/fonts/sfmedium.otf";
import sfRegular from "./assets/fonts/sfregular.otf";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./app/routes/Stack";
import MyTabs from "./app/routes/Bottom";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Sf-bold": sfBold,
    "sf-medium": sfMedium,
    "sf-regular": sfRegular,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

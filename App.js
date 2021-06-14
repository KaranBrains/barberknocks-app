import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import DrawerNavigator from "./routes/drawerNavigator";
import Header from "./components/Header";

const getFonts = () =>
  Font.loadAsync({
    "font-bold": require("./assets/fonts/AvenirNextLTPro-Bold.otf"),
    "font-demi": require("./assets/fonts/AvenirNextLTPro-Demi.otf"),
    "font-medium": require("./assets/fonts/AvenirNextLTPro-Medium.otf"),
    "font-regular": require("./assets/fonts/AvenirNextLTPro-Regular.otf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <React.Fragment>
        <DrawerNavigator />       
      </React.Fragment>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}        
        onError={(err) => console.log(err)}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
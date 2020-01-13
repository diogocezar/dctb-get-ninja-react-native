import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Navigator from "./routes/drawer";

const getFonts = () => {
  return Font.loadAsync({
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-semi-bold": require("./assets/fonts/Montserrat-SemiBold.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import About from "../../../screens/About";
import Header from "../../../components/shared/Header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        left: null,
        header: () => (
          <View
            style={{
              width: "100%",
              marginTop: 40,
              height: 50
            }}
          >
            <Header title="Sobre" navigation={navigation} />
          </View>
        )
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
      height: 100
    }
  }
});

export default AboutStack;

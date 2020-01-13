import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../../../screens/Home";
import MusicDetails from "../../../screens/MusicDetails";
import Header from "../../../components/shared/Header";

const screens = {
  Home: {
    screen: Home,
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
            <Header title="Principal" navigation={navigation} />
          </View>
        )
      };
    }
  },
  MusicDetails: {
    screen: MusicDetails,
    navigationOptions: {
      title: "Detalhes da Música"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      height: 100
    }
  }
});

export default HomeStack;

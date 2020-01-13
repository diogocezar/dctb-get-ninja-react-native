import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import AboutStack from "./stacks/about";
import HomeStack from "./stacks/home";

const screens = {
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  }
};

const rootDrawerNavigator = createDrawerNavigator(screens);

export default createAppContainer(rootDrawerNavigator);

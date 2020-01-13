import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { HeaderContainer, HeaderText } from "./styles";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <HeaderContainer>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <HeaderText>{title}</HeaderText>
      </View>
    </HeaderContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 16
  }
});

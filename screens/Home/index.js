import React from "react";
import { View, Button } from "react-native";

import { Container, Title1 } from "../../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };
  return (
    <Container>
      <Title1>Home Screen</Title1>
      <Button title="Review" onPress={pressHandler} />
    </Container>
  );
}

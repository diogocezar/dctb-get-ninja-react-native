import React from "react";
import { View } from "react-native";

import { Container, Title1, Title2, Paragraph } from "../../styles/global";

export default function MusicDetails({ navigation }) {
  const song = navigation.getParam("song");
  const singer = navigation.getParam("singer");
  const date = navigation.getParam("date");
  const found = navigation.getParam("found");
  return (
    <Container>
      <Title1>Detalhes da Música</Title1>
      <Title2>
        {song} - {singer}
      </Title2>
      <Paragraph>Tocado em: {date}</Paragraph>
      {found && <Paragraph>Tocado novamente em: {found}</Paragraph>}
    </Container>
  );
}

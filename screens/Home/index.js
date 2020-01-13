import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { Container, BorderBottom, Title1, Title2 } from "../../styles/global";

import data from "../../data/songs";

export default function Home({ navigation }) {
  const [songs, setSongs] = useState(data);
  return (
    <Container>
      <Title1>Músicas da RadioRock</Title1>
      <FlatList
        data={songs}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MusicDetails", item);
            }}
          >
            <BorderBottom>
              <Title2>
                {item.singer} - {item.song}
              </Title2>
            </BorderBottom>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}

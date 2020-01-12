import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Diogo1", id: "1" },
    { name: "Diogo2", id: "2" },
    { name: "Diogo3", id: "3" },
    { name: "Diogo4", id: "4" },
    { name: "Diogo5", id: "5" },
    { name: "Diogo6", id: "6" },
    { name: "Diogo7", id: "7" },
    { name: "Diogo8", id: "8" },
    { name: "Diogo9", id: "9" },
    { name: "Diogo10", id: "10" },
    { name: "Diogo11", id: "11" },
    { name: "Diogo12", id: "12" },
    { name: "Diogo13", id: "13" },
    { name: "Diogo14", id: "14" },
    { name: "Diogo15", id: "15" },
    { name: "Diogo16", id: "11" }
  ]);

  const pressHandler = id => {
    setPeople(prevPleople => {
      return prevPleople.filter(person => person.id !== id);
    });
  };

  function Item({ item }) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => pressHandler(item.id)}
      >
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.name}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 10
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "40%"
  },
  title: {
    fontSize: 15,
    color: "black"
  }
});

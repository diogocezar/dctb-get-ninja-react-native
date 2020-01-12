import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity
      onPress={() => {
        pressHandler(item.key);
      }}
    >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={22} color="#333"></MaterialIcons>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row"
  },
  text: {
    marginLeft: 10
  }
});

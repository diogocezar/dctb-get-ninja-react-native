import React, { useState, createRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  let todoInput = createRef();
  const changeHandler = value => {
    setText(value);
  };
  const submit = text => {
    submitHandler(text);
    setText("");
    todoInput.current.clear();
  };
  return (
    <View>
      <TextInput
        ref={todoInput}
        style={styles.input}
        placeholder="nova tarefa..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          submit(text);
        }}
        title="adicionar"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

import React, { useState } from 'react';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodo';
import { FlatList, StyleSheet, Text, TextInput, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { title: "Go shoping in Kenya", key: '1' },
    { title: "Create the App Bakcend", key: '2' },
    { title: "List to spotify musics", key: '3' }
  ])

  const clickHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if (text.length >= 4) {
      setTodos((prevTodos) => {
        return [
          { title: text, key: Math.round().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOOPS', 'Invalid input text length', [
        { text: "Understood" } //You add other properties, like onClick
      ])
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={todos} renderItem={({ item }) => (
              <TodoItems item={item} clickHandler={clickHandler} />
            )} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 25,
    paddingHorizontal: 18,
  },
  list: {
    flex: 1,
    marginTop: 5,
  },
});

import React, { useState } from 'react';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodo';
import { FlatList, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

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
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <AddTodo submitHandler={submitHandler} />
          <FlatList data={todos} renderItem={({ item }) => (
            <TodoItems item={item} clickHandler={clickHandler} />
          )} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 30,
    paddingHorizontal: 20,
  }
});

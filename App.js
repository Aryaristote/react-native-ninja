import React, { useState } from 'react';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { title: "Love in the air", key: '1' },
    { title: "Reebells from inside", key: '2' },
    { title: "Dear me, let be", key: '3' }
  ])

  const clickHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key);
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
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

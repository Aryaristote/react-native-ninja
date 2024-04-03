import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setText(e);
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder='Add a task...' onChangeText={changeHandler} />
            <Text>{error}</Text>
            <Button onPress={() => submitHandler(text)} title='Add task' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 8,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBlockColor: "#ddd",
        borderBottomWidth: 1
    },
    error: {
        color: "red"
    }
})
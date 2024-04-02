import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItems({ item, clickHandler }) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => clickHandler(item.key)}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoItems({ item, clickHandler }) {
    return (
        <TouchableOpacity onPress={() => clickHandler(item.key)}>
            <View style={styles.item}>
                <Text>{item.title}</Text>
                <MaterialIcons name='delete' size={25} color="coral" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
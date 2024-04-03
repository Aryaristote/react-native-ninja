import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
        width: 100,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10,
        width: 100,
    },
    boxThree: {
        backgroundColor: 'corals',
        padding: 10,
        width: 100,
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 10,
        width: 100,
    }
})
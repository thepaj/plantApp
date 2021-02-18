import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { lightGreen, mainGreen } from '../utils/colors';

export default function Plant() {
    return (
        <TouchableOpacity style={styles.plantContainer}>
            <Text style={styles.plantName}>
                Plant
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    plantContainer: {
        backgroundColor: lightGreen,
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    plantName: {
        color: 'white',
    }
})
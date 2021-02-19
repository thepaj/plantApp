import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { mainGreen, mainGrey, offWhite } from '../utils/colors';

export default function AddPlant() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Add new plant
                </Text>
            </View>
            <View>
                <TextInput 
                placeholder='Question'
                underlineColorAndroid={mainGreen}
                style={styles.inputField} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        paddingTop: 30,
        height: '100%',
        width: '100%',
        backgroundColor: offWhite,
    },
    titleContainer: {
        marginBottom: 10,
        marginLeft: 20,
    },
    title: {
        color: mainGrey,
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputField: {
        
    }
})
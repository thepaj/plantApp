import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { mainGrey, offWhite } from '../utils/colors';
import Plant from '../components/Plant';
import PlantList from '../components/PlantList';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    My plants
                </Text>
            </View>
            <View>
                <PlantList />
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
})
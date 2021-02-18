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
                    Dashboard
                </Text>
            </View>
            <View style={styles.plantsListContainer}>
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
        paddingHorizontal: 20,
        paddingVertical: 40,
        height: '100%',
        width: '100%',
        backgroundColor: offWhite,
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        color: mainGrey,
        fontSize: 30,
        fontWeight: 'bold',
    },
    plantsListContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    singlePlantContainer: {
        width: '50%',
        padding: 5,
    }
})
import React from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { lightGreen, mainGreen } from '../utils/colors';
import {DATA} from '../utils/data';

export default function PlantList() {
    const Item = ({ title, image }) => (
        <TouchableOpacity style={styles.item} style={{background: {image}}}>
            <ImageBackground sourse={image} style={styles.image}>
                <Text style={styles.itemName}>
                    {title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
      );

    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image}/>
      );

    return (
        <SafeAreaView style={styles.plantContainer}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    plantContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    item: {
        backgroundColor: lightGreen,
        height: 150,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    itemName: {
        color: mainGreen,
    },
    image: {
        width: 50,
        height: 50
    }
})
import React from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { lightGreen, mainGreen, mainGrey, offWhite } from '../utils/colors';
import {DATA} from '../utils/data';

export default function PlantList() {
    const Item = ({ title, avatar }) => (
        <TouchableOpacity style={styles.item}>
            <ImageBackground source={avatar} style={styles.avatar}>
                <Text style={styles.itemName}>
                    {title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
      );

    const renderItem = ({ item }) => (
        <Item title={item.title} avatar={item.avatar}/>
    );

    const numColumns = 2;

    return (
        <SafeAreaView style={styles.plantContainer}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    plantContainer: {
        flex: 1,
    },
    item: {
        height: 150,
        width: '50%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    itemName: {
        backgroundColor: 'black',
        padding: 2,
        paddingHorizontal: 5,
        color: 'white',
        opacity: 1,
    },
    avatar: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        height: '100%',
        width: '100%',
        opacity: 0.8,
    }
})
import { AsyncStorage } from '@react-native-community/async-storagereact-native';
import { NOTIFICATION_KEY } from './notification';

export async function getPlants() {
    let keys = await AsyncStorage.getAllKeys();
    keys = keys.filter((key) => key !== NOTIFICATION_KEY);
    let result = await AsyncStorage.multiGet(keys);
    let object = {};

    result.map(item => {
        object[item[0]] = JSON.parse(item[1])
    })

    return object;
}
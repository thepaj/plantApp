import 'react-native-gesture-handler';
import React from 'react';
import {  View, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/Dashboard';
import AddPlant from './screens/AddPlant';
import { mainGreen, mainGrey, offWhite } from './utils/colors';
import { AntDesign } from '@expo/vector-icons';

// create status bar
function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View>
      <StatusBar translucent barStyle="dark-content" backgroundColor={offWhite} {...props} />
    </View>
  )
}

// create my own theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: mainGreen,
    backgroundColor: offWhite,
    text: mainGrey,
  },
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Dashboard />
    </View>
  );
}

function AddPlantScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddPlant />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyStatusBar />
      <Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Home') {
                return <AntDesign name="home" size={24} color="white" />;
              } else if (route.name === 'Add plant') {
                return <AntDesign name="pluscircle" size={24} color='white' />;
              }
    
            },
            })}
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: mainGrey,
              style: {
                backgroundColor: mainGreen,
                height: 50,
              },
            }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add plant" component={AddPlantScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import SingleEarthquakeScreen from '../screens/SingleEarthquakeScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SingleEarthquake" component={SingleEarthquakeScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import Home from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="welcome" component={Welcome} />
        </Stack.Navigator>
        </NavigationContainer>
    );
    }

export default AppNavigation;
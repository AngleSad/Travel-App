import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import Register from '../screens/RegisterScreen';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        </NavigationContainer>
    );
    }

export default AppNavigation;
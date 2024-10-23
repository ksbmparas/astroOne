import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Auth/Login';
import Otp from '../Screens/Auth/Otp';
const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />

            <Stack.Screen name="Home" component={Home} />



        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})
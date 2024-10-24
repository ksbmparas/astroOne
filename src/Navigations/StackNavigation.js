import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Auth/Login';
import Otp from '../Screens/Auth/Otp';
import Home1 from '../Screens/Home/Home1';
import Homeheader from '../Screens/Home/Homeheader';
import Splash from '../Screens/Splash';
const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} initialRouteName='Splash'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Home1" component={Home1} />
            <Stack.Screen name="Homeheader" component={Homeheader} />
            <Stack.Screen name="Splash" component={Splash}/>



        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})
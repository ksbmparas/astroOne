import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Auth/Login';
import Otp from '../Screens/Auth/Otp';
import Home1 from '../Screens/Home/Home1';
import Homeheader from '../Screens/Home/Homeheader';
import Splash from '../Screens/Splash';
import Sanatan from '../Screens/TempleScreens/Sanatan';
import Navgrah from '../Screens/TempleScreens/Navgrah';
import AstrologerLogin from '../Screens/AstrologerSignup/AstrologerLogin';
import Shivalya from '../Screens/TempleScreens/Shivalya';
import VardaniBargad from '../Screens/TempleScreens/VardaniBargad';
import VerfiedAstrologer from '../Screens/AstrologerSignup/VerfiedAstrologer';


const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} initialRouteName='Splash'>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Home1" component={Home1} />
            <Stack.Screen name="Homeheader" component={Homeheader} />
            <Stack.Screen name="Splash" component={Splash}/>

            <Stack.Screen name="Sanatan" component={Sanatan}/>
            <Stack.Screen name="Navgrah" component={Navgrah}/>
            <Stack.Screen name="VardaniBargad" component={VardaniBargad}/>
            <Stack.Screen name="Shivalya" component={Shivalya}/>
            
            <Stack.Screen name="AstrologerLogin" component={AstrologerLogin}/>
            <Stack.Screen name="VerfiedAstrologer" component={VerfiedAstrologer}/>
            
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})
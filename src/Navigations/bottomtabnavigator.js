import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home1 from '../Screens/Home/Home1';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Feather from 'react-native-vector-icons/Feather'
// import call from '../Screens/tabScreens/Call';
import live from '../Screens/tabScreens/live';
import { Colors } from '../config/Style';
import chat from '../Screens/tabScreens/chat';
import Profile from '../Screens/tabScreens/Profile';
import Call1 from '../Screens/tabScreens/Call1';
import AstroBlog from '../Screens/AstroBlog';


const Tab = createBottomTabNavigator();
const bottomtabnavigator = () => {
    return (


        <Tab.Navigator initialRouteName="home1" 
        screenOptions={{
            tabBarActiveTintColor: Colors.background_theme1,   
            tabBarInactiveTintColor: Colors.inactiveColor,
            
        }}>

            <Tab.Screen name='AstroBlog' component={AstroBlog} options={{
                tabBarLabel: 'AstroBlog',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="edit" color={color} size={size - 3} />
                ),
            }} />

            <Tab.Screen name='Call1' component={Call1} options={{
                tabBarLabel: 'Call',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="call" color={color} size={size - 3} />
                ),
            }} />

            <Tab.Screen name='home1' component={Home1} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" color={color} size={size - 3} />
                ),
            }} />

            <Tab.Screen name='chat' component={chat} options={{
                tabBarLabel: 'chat',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="chat" color={color} size={size - 3} />
                ),
            }} />

            <Tab.Screen name='live' component={live} options={{
                tabBarLabel: 'Live',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="wifi-tethering" color={color} size={size - 3} />
                ),
            }} />





        </Tab.Navigator>



    )
};


export default bottomtabnavigator

const styles = StyleSheet.create({})
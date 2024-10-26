import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NewKundli from '../Screens/Kundli/NewKundli';
import OpenKundli from '../Screens/Kundli/OpenKundli';
import Myheader from '../Screens/Components/Myheader';


const Tab = createMaterialTopTabNavigator();
const KundliToptabs = () => {
    return (
        <View style={{flex:1}}>
            <Myheader title={'Kundli'}/>
        <Tab.Navigator initialRouteName='OpenKundli' screenOptions={{
            tabBarStyle: {
                tabBarIndicatorStyle: {
                    backgroundColor: '#indicatorColor', // Set the indicator line color
                    height: 3, // Optional: set the thickness of the indicator line
                },
                backgroundColor: '#FDE2B3',
            }, tabBarLabelStyle: {
                fontWeight: "500"
            },
        }}
        >
            <Tab.Screen name='OpenKundli' component={OpenKundli} />
            <Tab.Screen name='NewKundli' component={NewKundli} />

        </Tab.Navigator>
        </View>
    )
}

export default KundliToptabs

const styles = StyleSheet.create({})
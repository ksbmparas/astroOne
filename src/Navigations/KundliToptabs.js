import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NewKundli from '../Screens/Kundli/NewKundli';
import OpenKundli from '../Screens/Kundli/OpenKundli';
import Myheader from '../Screens/Components/Myheader';
import { SCREEN_HEIGHT ,SCREEN_WIDTH} from '../config/Style';


const Tab = createMaterialTopTabNavigator();
const KundliToptabs = () => {
    return (
        <View style={{flex:1}}>
            <Myheader title={'Kundli'}/>
        <Tab.Navigator initialRouteName='OpenKundli' screenOptions={{
            tabBarStyle: {
               
                backgroundColor: '#FDE2B3',
            },
            tabBarIndicatorStyle: {
                backgroundColor: 'white',
               
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
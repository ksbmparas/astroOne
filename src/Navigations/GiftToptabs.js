import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SendGift from '../Screens/Gifts/SendGift';
import GiftHistory from '../Screens/Gifts/GiftHistory';
import Myheader from '../Screens/Components/Myheader';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/Style';


const Tab=createMaterialTopTabNavigator();
const GiftToptabs = () => {     
  return (
    <View style={{flex:1}}>
        <Myheader title={'Gifts'}/>
        <View style={{flex:1,paddingHorizontal:SCREEN_WIDTH*0.015}}> 
    <Tab.Navigator screenOptions={{
          tabBarStyle: {
            backgroundColor: "#D56A14", 
            borderRadius:10,
           
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
            height:SCREEN_HEIGHT*0.05
            ,bottom:SCREEN_HEIGHT*0.009
            ,borderRadius:10,
            width:SCREEN_WIDTH*0.4,
            left:SCREEN_WIDTH*0.042
          },
          tabBarActiveTintColor: 'black', 
          tabBarInactiveTintColor: 'white', 
          tabBarLabelStyle: {
           
           fontWeight:"500", 
           
          },
        }}>

                <Tab.Screen name='SendGift' component={SendGift}/>
                <Tab.Screen name='GiftHistory' component={GiftHistory}/>

    </Tab.Navigator>
    </View>
    </View>
  )
}

export default GiftToptabs

const styles = StyleSheet.create({})
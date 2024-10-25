import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home1 from '../Screens/Home/Home1';

const Drawernavigator = () => {
    const Drawer=createDrawerNavigator();
  return (
            <Drawernavigator>
                <Drawer.Screen name='Home1' component={Home1}/>
            </Drawernavigator>
  )
}

export default Drawernavigator

const styles = StyleSheet.create({})
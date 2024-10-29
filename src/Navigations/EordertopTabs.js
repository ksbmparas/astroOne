import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyPooja from '../Screens/EorderHistory/MyPooja';
import MyProduct from '../Screens/EorderHistory/MyProduct';
import Myheader from '../Screens/Components/Myheader';



const Tab =createMaterialTopTabNavigator();
const EordertopTabs = () => {
  return (
    <View style={{flex:1}}>
            <Myheader title={'Kundli'}/>
        <Tab.Navigator initialRouteName='MyProduct' screenOptions={{
            tabBarStyle: {
               
                backgroundColor: 'white',
            },
            tabBarIndicatorStyle: {
                backgroundColor: "#D56A14",
               
              },
              tabBarActiveTintColor: "#D56A14", 
              tabBarInactiveTintColor: 'black', 
              tabBarLabelStyle: {
           
                fontWeight:"500", 
                
               },
        }}
        >

            <Tab.Screen name='MyProduct' component={MyProduct} />
            <Tab.Screen name='MyPooja' component={MyPooja} />
           

        </Tab.Navigator>
        </View>
  )
}

export default EordertopTabs

const styles = StyleSheet.create({})
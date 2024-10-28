import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import DrawerContent from './src/Navigations/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home1 from './src/Screens/Home/Home1';

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
       
        <Drawer.Navigator  drawerContent={props => <DrawerContent{...props}/>} initialRouteName="Home1"  
          screenOptions={({ route }) => ({
            headerShown: false,
            swipeEnabled: route.name === "Home1", 
            
          })}
          >
          <Drawer.Screen screenOptions name="Home1" component={StackNavigation} />

        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})
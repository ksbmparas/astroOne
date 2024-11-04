import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import DrawerContent from './src/Navigations/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home1 from './src/Screens/Home/Home1';


import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { addEventListener } from "@react-native-community/netinfo";
import { useTranslation } from 'react-i18next';
import Notifee, {
  AndroidChannel,
  AndroidImportance,
  Notification,
  EventType,
  Event,
  AuthorizationStatus,
  TimestampTrigger,
  RepeatFrequency,
} from '@notifee/react-native';


const App = () => {


  const { i18n } = useTranslation();

  useEffect(() => {
    // Load the saved language from AsyncStorage
    const loadLanguage = async () => {
      try {
        const selectedLanguage = await AsyncStorage.getItem('selectedLanguage');

        if (selectedLanguage) {
          // Set the loaded language as the initial language
          i18n.changeLanguage(selectedLanguage);
        }
      } catch (error) {
        console.error('Error loading language from AsyncStorage:', error);
      }
    };

    // Call the function to load the language
    loadLanguage();
  }, []);

  const [sendnotification, setnotification] = useState(null);


  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      // if (state.isConnected) {
      //   socketServices.emit('reconnect');
      // }
    });

    messaging().onMessage(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
      // onNotifeeMessageReceived(remoteMessage);
      onNotification(remoteMessage, dispatch)
    });

    return () => {
      unsubscribe();
    };
  }, []);

// Handle foreground notification clicks
Notifee.onForegroundEvent(({ type, detail }) => {
  if (detail?.notification?.data?.type == 'Redirect' && type === EventType.PRESS ) {  // Adjust based on event type
    console.log('asdfasdadf');
    navigate('notifications');
  }
});

// Notifee.onBackgroundEvent(async ({ type, detail }) => {
//   const { notification } = detail;
//   console.log("ghfghnghgh fffffffffff",type, EventType.PRESS)
//   // Check if the notification requires a redirect action
//   if (notification?.data?.type === 'Redirect' && type === EventType.ACTION_PRESS) {
//     await Notifee.launchActivity('default'); // Wakes the app and brings it to the foreground
//     navigate('notifications'); // Navigates to the specific screen after the app is launched
//   }
// });

  const isVisible = false;

  const toastConfig = {
    success: props =>
      isVisible ? (
        <BaseToast
          text1NumberOfLines={1}
          text2NumberOfLines={2}
          style={{ borderLeftColor: colors.background_theme2 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          text1Style={{
            fontSize: 14,
            fontWeight: '400',
          }}
          text2Style={{
            fontSize: 12,
          }}
        />
      ) : null,
    error: props => (
      <ErrorToast
        text1NumberOfLines={1}
        text2NumberOfLines={2}
        {...props}
        text1Style={{
          fontSize: 14,
        }}
        text2Style={{
          fontSize: 12,
        }}
      />
    ),
    tomatoToast: ({ text1, props }) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
        <Text allowFontScaling={false}>{text1}</Text>
        <Text allowFontScaling={false}>{props.uuid}</Text>
      </View>
    ),
  };

  useEffect(() => {
    async function requestPermissions() {
      if (Platform.OS === 'android') {
        const permissions = [
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.CALL_PHONE,
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ];
        // Calling the permission function
        const granted = await PermissionsAndroid.requestMultiple(permissions, {
          title: 'Example App Permissions',
          message: 'Example App needs access to certain features.',
        });

        if (
          granted[PermissionsAndroid.PERMISSIONS.CAMERA] ===
          PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
          PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.READ_CONTACTS] ===
          PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.CALL_PHONE] ===
          PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS] ===
          PermissionsAndroid.RESULTS.GRANTED
          //  &&
          // granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] ===
          // PermissionsAndroid.RESULTS.GRANTED
        ) {
          // Permission Granted
          console.log('permissions');
        } else {
          // Permission Denied
          console.log('CAMERA Permission Denied');
        }
        Notifee.requestPermission();
      } else {
        Notifee.requestPermission();
      }
    }

    requestPermissions();
  }, []);












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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Auth/Login';
import Otp from '../Screens/Auth/Otp';
import Home1 from '../Screens/Home/Home1';
import Homeheader from '../Screens/Home/Homeheader';
import Splash from '../Screens/Splash';
import bottomtabnavigator from './bottomtabnavigator';
import Drawernavigator from './Drawernavigator';
import Sanatan from '../Screens/TempleScreens/Sanatan';
import Navgrah from '../Screens/TempleScreens/Navgrah';
import AstrologerLogin from '../Screens/AstrologerSignup/AstrologerLogin';
import Shivalya from '../Screens/TempleScreens/Shivalya';
import VardaniBargad from '../Screens/TempleScreens/VardaniBargad';
import VerfiedAstrologer from '../Screens/AstrologerSignup/VerfiedAstrologer';
import ForgotPassword from '../Screens/AstrologerSignup/ForgotPassword';
import AstroBlog from '../Screens/AstroBlog';
import Kundli from '../Screens/Kundli/Kundli';
import KundliToptabs from './KundliToptabs';
import Myheader from '../Screens/Components/Myheader';
import MatchingToptabs from './MatchingToptabs';
import ReferEarn from '../Screens/ReferEarn';
// import horoscope from '../Screens/Horoscope/Horoscope';
import Horoscope from '../Screens/Horoscope/Horoscope';
import PujaSection from '../Screens/ReligionCollection/PujaSection';
import { NavigationContainer } from '@react-navigation/native';
import GiftToptabs from './GiftToptabs';
import OrderHistory from '../Screens/OrderHistory';
import Following from '../Screens/Following';
import CustomerTestimonials from './CustomerTestimonials';
const Stack = createStackNavigator();
const StackNavigation = () => {

    return (
    
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} initialRouteName='Splash'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Home1" component={bottomtabnavigator} />
            <Stack.Screen name="Homeheader" component={Homeheader} />
            <Stack.Screen name="Splash" component={Splash} />

            <Stack.Screen name="Sanatan" component={Sanatan} />
            <Stack.Screen name="Navgrah" component={Navgrah} />
            <Stack.Screen name="VardaniBargad" component={VardaniBargad} />
            <Stack.Screen name="Shivalya" component={Shivalya} />

            <Stack.Screen name="AstrologerLogin" component={AstrologerLogin} />
            <Stack.Screen name="VerfiedAstrologer" component={VerfiedAstrologer} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            {/* <Stack.Screen name="AstroBlog" component={AstroBlog} /> */}

            <Stack.Screen name="Kundli" component={KundliToptabs} />
            <Stack.Screen name="Matching" component={MatchingToptabs} />
            <Stack.Screen name='ReferEarn' component={ReferEarn}/>
          

            <Stack.Screen name="AstroBlog" component={AstroBlog}/>
            <Stack.Screen name="Horoscope" component={Horoscope}/>
            <Stack.Screen name="PujaSection" component={PujaSection}/>

            <Stack.Screen name="Gifts" component={GiftToptabs}/>
            <Stack.Screen name="OrderHistory" component={OrderHistory}/>
            <Stack.Screen name="Following" component={Following}/>
            <Stack.Screen name="CustomerTestimonials" component={CustomerTestimonials}/>
            
           




        </Stack.Navigator>
    
    )
}

export default StackNavigation

const styles = StyleSheet.create({})
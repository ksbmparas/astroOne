import { StyleSheet, Text, View,ImageBackground,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_HEIGHT } from '../config/Style';

const ReferEarn = () => {
    const navigation=useNavigation();
  return (
        <ImageBackground
        style={{flex:1}}
        source={require('../assets/images/BG2.png')}>
                {refer()}
                {PHOTO()}
        </ImageBackground>
            
  )
  function refer(){
    return(
        <View style={{alignItems:"center",paddingTop:SCREEN_HEIGHT*0.2}}>
                    <Text style={{color:"black" ,fontSize:20,fontWeight:"500"}}>Refer & Earn</Text>
        </View>
    )
  }
  function PHOTO(){
    <View style={{borderWidth:1}}>
        <Image
         source={require('../assets/images/LOG.png')}/>
    </View>
  }
}

export default ReferEarn

const styles = StyleSheet.create({})
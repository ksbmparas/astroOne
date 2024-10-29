import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Myheader from './Components/Myheader'
import { SCREEN_HEIGHT } from '../config/Style'

const About = () => {
  return (
    <View style={{flex:1}}>
        <Myheader title={'About'}/>
            {astroONEdata()}
    </View>
  )
  function astroONEdata(){
    return(
        <View>
                    <View style={{paddingVertical:SCREEN_HEIGHT*0.4,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"black" ,fontSize:15,fontWeight:"500"}}>WELCOME TO AstroONE </Text>
                    </View>
        </View>
    )
  }
}

export default About

const styles = StyleSheet.create({})
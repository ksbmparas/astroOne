import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Myheader from './Components/Myheader'
import { SCREEN_HEIGHT } from '../config/Style'

const Following = () => {
  return (
    <View style={{flex:1}}>
       <Myheader title={'Following'}/>
       {NODATA()}
    
    </View>
  )
  function NODATA(){
    return(
        <View>
            <View style={{alignItems:"center",justifyContent:"center",paddingVertical:SCREEN_HEIGHT*0.4}}>
                <Text style={{color:"black",fontWeight:"400",fontSize:20}}>No Data Available </Text>
            </View>
        </View>
    )
  }
}

export default Following

const styles = StyleSheet.create({})
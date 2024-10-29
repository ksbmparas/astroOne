import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH,SCREEN_HEIGHT } from '../../config/Style'

const  MyPooja = () => {
  return (
    <View style={{flex:1}}>
      {NODATA()} 
    </View>
  )
  function NODATA(){
    return(
        <View>
            <View style={{alignItems:"center",justifyContent:"center",paddingVertical:SCREEN_HEIGHT*0.3}}>

              <View>
                <Image
                style={{height:SCREEN_HEIGHT*0.2,width:SCREEN_WIDTH*0.4}}
                source={require('../../assets/images/emptybox.png')}/>
              </View>
                <Text style={{color:"black",fontWeight:"400",fontSize:15}}>No Data Available </Text>
            </View>
        </View>
    )
  }
}

export default MyPooja

const styles = StyleSheet.create({})
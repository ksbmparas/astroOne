import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Myheader from './Components/Myheader'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/Style';

const HowtoUse = () => {
  return (
    <View style={{flex:1}}>
        < Myheader title={'How to use our App?'}/>
        {CARD()}
     
    </View>
  )
  function CARD(){
    return(

        <View style={{paddingHorizontal:SCREEN_WIDTH*0.03,paddingVertical:SCREEN_HEIGHT*0.3}}>
        <View style={{backgroundColor:"#FBEDE0" ,paddingVertical:SCREEN_HEIGHT*0.02,gap:15,borderRadius:10,elevation:4}}>

        <View style={{alignItems:"center"}}> 
        <View style={{flexDirection:"row",alignItems:"center",borderWidth:1,gap:25,width:SCREEN_WIDTH*0.8,paddingVertical:SCREEN_HEIGHT*0.01,paddingHorizontal:SCREEN_WIDTH*0.02,borderRadius:10,backgroundColor:"white"}}>
            <View>
            <FontAwesome5 name='file-pdf' color={'black'} size={35}/>
            </View>

            <View>
                <Text style={{fontWeight:"500",fontSize:16,color:"black"}}>Screenshots</Text>
            </View>

        </View>
        </View>

        <View style={{alignItems:"center"}}> 
        <View style={{flexDirection:"row",alignItems:"center",borderWidth:1,gap:25,width:SCREEN_WIDTH*0.8,paddingVertical:SCREEN_HEIGHT*0.01,paddingHorizontal:SCREEN_WIDTH*0.02,borderRadius:10,backgroundColor:"white"}}>
            <View>
            <FontAwesome5 name='file-pdf' color={'black'} size={35}/>
            </View>

            <View>
                <Text style={{fontWeight:"500",fontSize:16,color:"black"}}>App Video</Text>
            </View>

        </View>
        </View>
        </View>
        </View>
    )
  }
}

export default HowtoUse

const styles = StyleSheet.create({})
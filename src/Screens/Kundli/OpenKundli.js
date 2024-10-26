import { StyleSheet, Text, View ,ImageBackground ,TextInput,Image} from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT,SCREEN_WIDTH } from '../../config/Style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { ResizeMode } from 'react-native-video'

const OpenKundli = () => {
  return (
    <ImageBackground  style={{flex:1}}
        source={require('../../assets/images/BG1.png')}
       
    >
                 {search()}
                 {kundli()}
                 { RECENTKUNDLI()}
    </ImageBackground>
   
  )
  function search() {
    return (
        <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02,paddingHorizontal:SCREEN_WIDTH*0.03 }}>
            <View style={{ borderWidth: 1.5, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.04, borderRadius: 10, borderColor: "gray", backgroundColor: "white" }}>
                <AntDesign name='search1' color={"gray"} size={25} />
                <TextInput
                    style={{ fontSize: 12 }}
                    placeholder='Search Astrologer by name...' />
            </View>
        </View>
    )
}
    function kundli(){
    return(
        <View>
                    <View style={{paddingHorizontal:SCREEN_WIDTH*0.04}}>
                        <Text style={{color:"black",fontSize:13}}>Recent Kundli</Text>
                    </View>
        </View>
    )
    }
    function RECENTKUNDLI(){
        return(
            <View style={{paddingVertical:SCREEN_HEIGHT*0.03}}>
                <View style={{alignItems:"center",justifyContent:"center"}}>
                <Image
                style={{height:SCREEN_HEIGHT*0.1,width:SCREEN_WIDTH*0.7,}}
                source={require('../../assets/images/LETTER2.png' )}/>
                <View style={{alignItems:"center" ,bottom:SCREEN_HEIGHT*0.065}}>
                    <Text style={{fontSize:10,fontWeight:"500",color:"white"}}>akshay</Text>
                    <Text  style={{fontSize:9,fontWeight:"500",color:"white"}}>26-10-2024 12:34 AM</Text>
                </View>
                </View>
                
            </View>
        )
    }
  
}

export default OpenKundli

const styles = StyleSheet.create({})
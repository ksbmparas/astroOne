import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/Style';
import Myheader from './Components/Myheader';
import Fontisto from 'react-native-vector-icons/Fontisto'

const ReferEarn = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../assets/images/BG2.png')}>

      {refer()}
      {PHOTO()}
      {WELCOMETEXT()}
      {refercode()}
    </ImageBackground>

  )
  function refer() {
    return (
      <View style={{ alignItems: "center", paddingTop: SCREEN_HEIGHT * 0.2, borderWidth: 1 }}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "500" }}>Refer & Earn</Text>
      </View>
    )
  }
  function PHOTO() {
    return (
      <View style={{ borderWidth: 1, alignItems: "center" }}>
        <Image
          style={{ height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.3, }}
          source={require('../assets/images/LOG.png')} />
      </View>
    )
  }
  function WELCOMETEXT() {
    return (
      <View style={{ alignItems: "center", paddingHorizontal: SCREEN_WIDTH * 0.11 }}>
        <Text style={{ color: "black", fontSize: 10, fontWeight: "500" }}>welcome to your sacred circle ! share the temple link to ass a follower in your Rudrakshmala.Reach 108 reffferls to become a fetured vishist,most all the thimng</Text>
      </View>
    )
  }
  function refercode() {
    return (
      <View>
        <View style={{ borderWidth: 1, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.02 }}>
          <Text style={{ color: "black", fontSize: 10, fontWeight: "500" }}>YOUR OWN EXCLUSIVE REFFERRAL CODE</Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, justifyContent: "center", gap: 15, width: SCREEN_WIDTH * 0.4, backgroundColor: "black", paddingVertical: SCREEN_HEIGHT * 0.01, borderRadius: 5, borderColor: "white", borderStyle: "dashed" }}>
            <Text style={{ fontWeight: "500", color: "white" }}>DFCR74268</Text>

            <View >
              <Fontisto name='copy' color='white' size={20} />
            </View>
          </View>
        </View>

        <View style={{flexDirection:"row" ,alignItems:"center" ,borderWidth:1 ,backgroundColor:'#FDE2B3',gap:4,width:SCREEN_WIDTH*0.5,borderRadius:20}}>
     
          <View >
            <Image
              style={{ height: SCREEN_HEIGHT * 0.05, width: SCREEN_WIDTH * 0.09 ,resizeMode:"contain"}}
              source={require('../assets/images/what.png',)} />
          </View>
          <View>
            <Text style={{fontSize:10 ,color:"white",fontWeight:"500"}}>Share the link via Whatsapp</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ReferEarn

const styles = StyleSheet.create({})
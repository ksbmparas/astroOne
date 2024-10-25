import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React ,{ useLayoutEffect }from 'react'
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT,SCREEN_WIDTH } from '../../config/Style';
import Homeheader from '../Home/HomeHeader';

const live = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View style={{flex:1}}>
      <Homeheader/>
      {alllive()}
     { card1()}
    </View>
  )

  function alllive(){
    return(
      <View>
              <View style={{paddingHorizontal:SCREEN_WIDTH*0.03,paddingTop:SCREEN_HEIGHT*0.02}}>
               < Text style={{color:"black",fontSize:13,fontWeight:"400"}}>ALL Live Astrologers</Text>
              </View>
      </View>
    )
  }
  function card1(){
    return(
      <View style={{paddingHorizontal:SCREEN_WIDTH*0.02,paddingVertical:SCREEN_HEIGHT*0.02}}>
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:SCREEN_WIDTH*0.03,paddingVertical:SCREEN_HEIGHT*0.02,borderRadius:10,backgroundColor:"white",elevation:2}}>
        <View style={{flexDirection:"row",gap:15,alignItems:"center"}}>
          <View>
            <Image 
       
           style={{ height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.2 }}
           source={require("../../assets/images/astroone.png")} />
          </View>
          <View>
            <Text style={{color:"black",fontSize:13,fontWeight:"500"}}>Krishna kumar</Text>
            <Text style={{color:"black",fontSize:10,fontWeight:"500"}}>Kundli</Text>
            <Text style={{color:"black",fontSize:10,fontWeight:"500"}}>02/04/3003 10:00</Text>
          </View>
          </View>
          <View>
            <TouchableOpacity style={{width:SCREEN_WIDTH*0.18,alignItems:"center",justifyContent:"center",borderRadius:13 ,backgroundColor:"green",paddingVertical:SCREEN_HEIGHT*0.005}}>
              <Text style={{fontSize:13,color:"white"}}>live</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default live

const styles = StyleSheet.create({})
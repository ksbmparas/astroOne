import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Myheader from './Components/Myheader'
import { SCREEN_HEIGHT ,SCREEN_WIDTH } from '../config/Style'


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
            <View style={{alignItems:"center",justifyContent:"center",paddingVertical:SCREEN_HEIGHT*0.3}}>

              <View>
                <Image
                style={{height:SCREEN_HEIGHT*0.2,width:SCREEN_WIDTH*0.4}}
                source={require('../assets/images/emptybox.png')}/>
              </View>
                <Text style={{color:"black",fontWeight:"400",fontSize:15}}>No Data Available </Text>
            </View>
        </View>
    )
  }
}

export default Following

const styles = StyleSheet.create({})
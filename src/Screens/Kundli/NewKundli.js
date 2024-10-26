import { StyleSheet, Text, View ,ImageBackground,TextInput} from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Myheader from '../Components/Myheader'

const NewKundli = () => {

    const navigation=useNavigation();
  return (
                 
    <ImageBackground  style={{flex:1}}
        source={require('../../assets/images/BG1.png')}
       
    >
       
            {name()}
            {PLACEOFBIRTH()}
            {DATEOFBIRTH()}
            {TIMEOFBIRTH()}
            {GENDER()}
            {button()}
    </ImageBackground>
  )
  function name(){
    return(
        <View style={{paddingHorizontal:SCREEN_WIDTH*0.09,gap:3,paddingTop:SCREEN_HEIGHT*0.04}}>
            <View>
                <Text style={{fontSize:10,color:"white"}}>ENTER FULL NAME</Text>
            </View>

                <View style={{backgroundColor:'#FDE2B3',borderWidth:1,borderColor:"gray",borderRadius:15}}>
                <TextInput
                
                    style={{ fontSize: 12 }}
                    />
          </View>
        </View>
    )
  }

  function PLACEOFBIRTH(){
    return(
        <View style={{paddingHorizontal:SCREEN_WIDTH*0.09,gap:3,paddingTop:SCREEN_HEIGHT*0.005}}>
            <View>
                <Text style={{fontSize:10,color:"white"}}>PLACE OF BIRTH</Text>
            </View>

                <View style={{backgroundColor:'#FDE2B3',borderWidth:1,borderColor:"gray",borderRadius:15}}>
                <TextInput
                    style={{ fontSize: 12 }}
                    />
          </View>
        </View>
    )
  }

  function DATEOFBIRTH(){
    return(
        <View style={{paddingHorizontal:SCREEN_WIDTH*0.09,gap:3,paddingTop:SCREEN_HEIGHT*0.005}}>
            <View>
                <Text style={{fontSize:10,color:"white"}}>DATE OF BIRTH</Text>
            </View>

                <View style={{backgroundColor:'#FDE2B3',borderWidth:1,borderColor:"gray",borderRadius:15}}>
                <TextInput
                    style={{ fontSize: 12 }}
                    />
          </View>
        </View>
    )
  }

  function TIMEOFBIRTH(){
    return(
        <View style={{paddingHorizontal:SCREEN_WIDTH*0.09,gap:3,paddingTop:SCREEN_HEIGHT*0.005}}>
            <View>
                <Text style={{fontSize:10,color:"white"}}>TIME OF BIRTH</Text>
            </View>

                <View style={{backgroundColor:'#FDE2B3',borderWidth:1,borderColor:"gray",borderRadius:15}}>
                <TextInput
                    style={{ fontSize: 12 }}
                    />
          </View>
        </View>
    )
  }

  function GENDER(){
    return(
        <View style={{gap:7,paddingHorizontal:SCREEN_WIDTH*0.1,paddingVertical:SCREEN_HEIGHT*0.01}}>
                    <Text style={{fontSize:10,color:"white"}}>SELECT GENDER</Text>

                    <View style={{flexDirection:"row",gap:40}}>
                    <View style={{flexDirection:"row",alignItems:"center,",gap:10 ,}}>
                        <TouchableOpacity style={{paddingVertical:SCREEN_HEIGHT*0.009,borderWidth:2,width:SCREEN_WIDTH*0.05,borderRadius:100,borderColor:"white"}}>

                        </TouchableOpacity>
                            <Text style={{fontSize:11,color:"white"}}>Male</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center,",gap:10}}>
                        <TouchableOpacity style={{paddingVertical:SCREEN_HEIGHT*0.009,borderWidth:2,width:SCREEN_WIDTH*0.05,borderRadius:100,borderColor:"white"}}>

                        </TouchableOpacity>
                            <Text style={{fontSize:11,color:"white"}}>Female</Text>
                    </View>
                    </View>
        </View>
    )
  }

  function button(){
    return(
        <View style={{alignItems:"center",paddingVertical:SCREEN_HEIGHT*0.02}}>
                    <TouchableOpacity 
                  
                    style={{paddingVertical:SCREEN_HEIGHT*0.024,alignItems:"center",backgroundColor:"white",width:SCREEN_WIDTH*0.7,borderRadius:30}}>
                        <Text  style={{ fontSize: 12,fontWeight:"500",color:"black" }}>GET YOUR KUNDLI</Text>
                    </TouchableOpacity>
        </View>
    )
  }

}

export default NewKundli

const styles = StyleSheet.create({})
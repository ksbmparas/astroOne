import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
const Homeheader = () => {
    return (
        <View>
            {myheader()}
        </View>
    )
    function myheader() {
        return (
            <View style={{flexDirection:"row" ,justifyContent:"space-between",paddingVertical:SCREEN_HEIGHT*0.015,backgroundColor:"white",paddingHorizontal:SCREEN_WIDTH*0.015}}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>

                    <TouchableOpacity>
                        <FontAwesome
                            name='bars'
                            size={25}
                            color={"black"} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: "black" ,fontSize:20 ,fontWeight:"500" }}>AstroOne</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:"center",gap:10,}}>
                        <TouchableOpacity >
                        <FontAwesome
                        name='bell-o'
                        size={23}
                        color={"orange"}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{borderWidth:1 ,borderRadius:10,paddingVertical:SCREEN_HEIGHT*0.002,paddingHorizontal:SCREEN_WIDTH*0.01,borderColor:"orange"}}>
                        <View style={{flexDirection:"row",gap:5,}}>
                                <View style={{borderWidth:1,borderRadius:100,padding:2,alignItems:"center"}} >
                                <Ionicons 
                                name='wallet-outline'
                                size={17}
                                color={"black"}/>
                                </View>

                                <Text style={{color:"orange"}}>₹ 0.00</Text>

                        </View>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Homeheader

const styles = StyleSheet.create({})


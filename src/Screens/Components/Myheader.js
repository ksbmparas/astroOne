import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { useNavigation } from '@react-navigation/native'

const Myheader = ({ title }) => {
    const navigation=useNavigation();
    return (
        <View style={{  }}>
            <View style={{paddingVertical:SCREEN_HEIGHT*0.02,flexDirection:"row",alignItems:"center",paddingHorizontal:SCREEN_WIDTH*0.03,gap:20,backgroundColor:"white"}}>
                <TouchableOpacity
                onPress={()=>navigation.goBack()}
                >
                    <AntDesign name='left' size={18} color={"black"} style={{fontWeight:"500"}} />
                </TouchableOpacity>
                <View > 
                    <Text style={{fontWeight:"500",color:"black",fontSize:15}}>{title}</Text>
                </View>
            </View>

        </View>
    )
}

export default Myheader

const styles = StyleSheet.create({})
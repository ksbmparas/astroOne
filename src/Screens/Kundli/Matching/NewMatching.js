import { StyleSheet, Text, View, ImageBackground, TextInput ,ScrollView} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/Style'

const NewMatching = () => {
    return (
        <ImageBackground style={{ flex: 1 }}
            source={require('../../../assets/images/BG1.png')}


        >
            <ScrollView>
            {boys()}
            {GIRLS()}
            { button()}
            </ScrollView>

        </ImageBackground>
    )
    function boys() {
        return (
            <View style={{ gap: 4 ,paddingHorizontal:SCREEN_WIDTH*0.06}}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, paddingTop: SCREEN_HEIGHT * 0.04 }}>
                    <Text style={{ color: "white" }}>BOY'S DETAILS</Text>
                </View>
                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <Ionicons name='person' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='Enter name'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <MaterialIcons name='date-range' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='__/__/___'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <AntDesign name='clockcircleo' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='00:00 AM'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <AntDesign name='Entypo' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='Select Location'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

            </View>
        )
    }

    function GIRLS() {
        return (
            <View style={{ gap: 4 ,paddingHorizontal:SCREEN_WIDTH*0.06}}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, paddingTop: SCREEN_HEIGHT * 0.04 }}>
                    <Text style={{ color: "white" }}>BOY'S DETAILS</Text>
                </View>
                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <Ionicons name='person' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='Enter name'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <MaterialIcons name='date-range' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='__/__/___'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <AntDesign name='clockcircleo' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='00:00 AM'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

                <View style={{ backgroundColor: '#FDE2B3', borderWidth: 1, borderColor: "gray", borderRadius: 15, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.02 }}>

                    <View>
                        <AntDesign name='Entypo' color={"gray"} size={15} />

                    </View>
                    <TextInput
                        placeholder='Select Location'
                        style={{ fontSize: 12, fontWeight: "400", color: "gray" }}
                    />
                </View>

            </View>
        )
    }

    function button(){
        return(
                <View style={{alignItems:"center",paddingVertical:SCREEN_HEIGHT*0.07}}>
                            <View style={{paddingVertical:SCREEN_HEIGHT*0.025,alignItems:"center",width:SCREEN_WIDTH*0.87,borderRadius:30,backgroundColor:"white"}}>
                                <Text style={{fontWeight:"500",color:"black"}}>Show Match</Text>
                            </View>
                </View>
        )
    }

}

export default NewMatching

const styles = StyleSheet.create({})
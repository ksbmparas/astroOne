import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Homeheader from './Homeheader'
import { SCREEN_WIDTH } from '../../config/Screen'
import { SCREEN_HEIGHT } from '../../config/Style'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Home1 = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, }}>
            <Homeheader />
            <ScrollView style={{paddingHorizontal:SCREEN_WIDTH*0.02}}>
            {ASTROONENOTE()}
            {CARD1()}
            {banner()}
            {placeofworship()}
            {BANNER2()}
            {banner3()}
            {BANNER4()}
            {banner5()}
            {banner6()}
            {visittemple()}
            </ScrollView>
        </View>
    )
    function ASTROONENOTE() {
        return (
            <View style={{  paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Auspicious and Inauspicious time</Text>
            </View>)
    }
    function CARD1() {
        return (

            <View style={{ }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: SCREEN_WIDTH * 0.03, paddingVertical: SCREEN_HEIGHT * 0.03, borderRadius: 10, backgroundColor: "white", borderColor: "gray", elevation: 1 }}>
                    <View style={{ gap: 10 }}>
                        <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.43, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.013, backgroundColor: "#40956E", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Abhijeet Mahurata</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>Coming Soon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.43, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.013, backgroundColor: "#FCCDC7", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Rahukaal</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>11.00-11.45</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ gap: 10 }}>
                        <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.43, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.013, backgroundColor: "#685F02", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Gulik period</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>11.00-11.45</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.43, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.013, backgroundColor: "#6D88D5", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Rahukaal</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>11.00-11.45</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>)
    }
    function banner() {
        return (
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02 }}>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                        source={require('../../assets/images/banner.png')} />
                </TouchableOpacity>

            </View>
        )
    }
    function placeofworship() {
        return (
            <View style={{}}>

                <View style={{paddingVertical:SCREEN_HEIGHT*0.01}}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Place of Worship</Text>
                </View>

            <View style={{paddingHorizontal:SCREEN_WIDTH*0.03,paddingVertical:SCREEN_HEIGHT*0.02 ,gap:10,borderRadius:10,backgroundColor:"white"}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View >
                    <TouchableOpacity 
                     onPress={() => navigation.navigate('Home')}
                    style={{  height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                            source={require('../../assets/images/worship1.png')} />
                    </TouchableOpacity>
                    </View>
                    <View style={{  height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                            source={require('../../assets/images/worship2.png')} />
                    </View>

                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                    <View style={{  height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                            source={require('../../assets/images/worship3.png')} />
                    </View>

                    <View style={{  height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4,  }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                            source={require('../../assets/images/worship4.png')} />
                    </View>

                </View>
                </View>

            </View>
        )
    }

    function BANNER2(){
        return(
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02 }}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Complete Horoscope Solution</Text>
                </View>
            <TouchableOpacity style={{ alignItems: "center" }}>
                <Image
                    style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                    source={require('../../assets/images/BANNER2.png')} />
            </TouchableOpacity>

        </View>
        )
    }
    function banner3(){
        return(
            <View style={{ }}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}> Horoscope Matching</Text>
            </View>
        <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                source={require('../../assets/images/banner3.png')} />
        </TouchableOpacity>

    </View>
        )
    }
    function BANNER4(){
        return(
            <View style={{ }}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Your Horoscope </Text>
            </View>
        <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                source={require('../../assets/images/BANNER4.png')} />
        </TouchableOpacity>

    </View>
        )
    }
    function banner5(){
        return(
            <View style={{ }}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Religion Collection</Text>
            </View>
        <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                source={require('../../assets/images/banner5.png')} />
        </TouchableOpacity>

    </View>
        )
    }
    function banner6(){
        return(
            <View style={{ }}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>AstroOne Special Devotee Rosery</Text>
            </View>
        <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                source={require('../../assets/images/banner7.png')} />
        </TouchableOpacity>

    </View>
        )
    }
    function visittemple(){
        return(
            <View>
                <View style={{paddingVertical:SCREEN_HEIGHT*0.02}}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Virtue of visiting famous temples</Text>
                </View>
                <ScrollView 
             horizontal={true}
                style={{flexDirection:"row" ,}}>

                    <View style={{flexDirection:"row",gap:10}}>
                    <TouchableOpacity style={{borderWidth:1,height:SCREEN_HEIGHT*0.3,width:SCREEN_WIDTH*0.39,alignItems:"center",borderRadius:10,backgroundColor:"white",borderColor:"gray",elevation:3}}>
                        <Image 
                        style={{height:SCREEN_HEIGHT*0.25,width:SCREEN_WIDTH*0.38,borderRadius:10,resizeMode:"contain"}}
                        source={require('../../assets/images/live.png')}/>
                        <Text  style={{ color: "black", fontSize: 13,  }}>उज्जैन से सीधा प्रसारण</Text>
                        <Text  style={{ color: "gray", fontSize: 13,  }}>घर बैठे दिव्यदर्शन</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth:1,height:SCREEN_HEIGHT*0.3,width:SCREEN_WIDTH*0.39,alignItems:"center",borderRadius:10,backgroundColor:"white",borderColor:"gray",elevation:3}}>
                        <Image 
                        style={{height:SCREEN_HEIGHT*0.25,width:SCREEN_WIDTH*0.38,borderRadius:10,resizeMode:"contain"}}
                        source={require('../../assets/images/live.png')}/>
                        <Text  style={{ color: "black", fontSize: 13,  }}>उज्जैन से सीधा प्रसारण</Text>
                        <Text  style={{ color: "gray", fontSize: 13,  }}>घर बैठे दिव्यदर्शन</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth:1,height:SCREEN_HEIGHT*0.3,width:SCREEN_WIDTH*0.39,alignItems:"center",borderRadius:10,backgroundColor:"white",borderColor:"gray",elevation:3}}>
                        <Image 
                        style={{height:SCREEN_HEIGHT*0.25,width:SCREEN_WIDTH*0.38,borderRadius:10,resizeMode:"contain"}}
                        source={require('../../assets/images/live.png')}/>
                        <Text  style={{ color: "black", fontSize: 13,  }}>उज्जैन से सीधा प्रसारण</Text>
                        <Text  style={{ color: "gray", fontSize: 13,  }}>घर बैठे दिव्यदर्शन</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home1

const styles = StyleSheet.create({})
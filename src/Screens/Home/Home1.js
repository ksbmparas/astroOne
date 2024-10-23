import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Homeheader from './Homeheader'
import { SCREEN_WIDTH } from '../../config/Screen'
import { SCREEN_HEIGHT } from '../../config/Style'
import { ScrollView } from 'react-native-gesture-handler'

const Home1 = () => {
    return (
        <ScrollView style={{ flex: 1, }}>
            <Homeheader />
            {ASTROONENOTE()}
            {CARD1()}
            {banner()}
            {placeofworship()}
            {BANNER2()}
            {banner3()}
            {BANNER4()}
            {banner5()}

        </ScrollView>
    )
    function ASTROONENOTE() {
        return (
            <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.02, paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Auspicious and Inauspicious time</Text>
            </View>)
    }
    function CARD1() {
        return (

            <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.03 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: SCREEN_WIDTH * 0.05, paddingVertical: SCREEN_HEIGHT * 0.03, borderRadius: 10, backgroundColor: "white", borderColor: "gray", elevation: 1 }}>
                    <View style={{ gap: 10 }}>
                        <View style={{ width: SCREEN_WIDTH * 0.4, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.01, backgroundColor: "#40956E", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Abhijeet Mahurata</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>Coming Soon</Text>
                        </View>
                        <View style={{ width: SCREEN_WIDTH * 0.4, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.01, backgroundColor: "#FCCDC7", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Rahukaal</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>11.00-11.45</Text>
                        </View>
                    </View>

                    <View style={{ gap: 10 }}>
                        <View style={{ width: SCREEN_WIDTH * 0.4, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.01, backgroundColor: "#685F02", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Gulik period</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>11.00-11.45</Text>
                        </View>
                        <View style={{ width: SCREEN_WIDTH * 0.4, alignItems: "center", justifyContent: "center", borderRadius: 10, paddingVertical: SCREEN_HEIGHT * 0.01, backgroundColor: "#6D88D5", elevation: 1 }}>
                            <Text style={{ color: "white", fontSize: 12 }}>Rahukaal</Text>
                            <Text style={{ color: "white", fontSize: 12 }}>11.00-11.45</Text>
                        </View>
                    </View>

                </View>
            </View>)
    }
    function banner() {
        return (
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02 }}>
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                        source={require('../../assets/images/banner.png')} />
                </View>

            </View>
        )
    }
    function placeofworship() {
        return (
            <View style={{paddingHorizontal:SCREEN_WIDTH*0.02}}>

                <View style={{paddingVertical:SCREEN_HEIGHT*0.01}}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Place of Worship</Text>
                </View>

            <View style={{paddingHorizontal:SCREEN_WIDTH*0.04,paddingTop:SCREEN_HEIGHT*0.02 ,gap:10}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <View >
                    <View style={{  height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4,  }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                            source={require('../../assets/images/worship1.png')} />
                    </View>
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
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                    source={require('../../assets/images/BANNER2.png')} />
            </View>

        </View>
        )
    }
    function banner3(){
        return(
            <View style={{ }}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}> Horoscope Matching</Text>
            </View>
        <View style={{ alignItems: "center" }}>
            <Image
                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                source={require('../../assets/images/banner3.png')} />
        </View>

    </View>
        )
    }
    function BANNER4(){
        return(
            <View style={{ }}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Your Horoscope </Text>
            </View>
        <View style={{ alignItems: "center" }}>
            <Image
                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                source={require('../../assets/images/BANNER4.png')} />
        </View>

    </View>
        )
    }
    function banner5(){
        return(
            <View style={{ }}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Religion Collection</Text>
            </View>
        <View style={{ alignItems: "center" }}>
            <Image
                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                source={require('../../assets/images/banner5.png')} />
        </View>

    </View>
        )
    }
}

export default Home1

const styles = StyleSheet.create({})
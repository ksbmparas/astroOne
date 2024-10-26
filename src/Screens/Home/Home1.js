import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react';
import Homeheader from './Homeheader'
import { SCREEN_WIDTH } from '../../config/Screen'
import { SCREEN_HEIGHT } from '../../config/Style'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../config/Style'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const Home1 = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return (
        <View style={{ flex: 1, }}>
            <Homeheader />
            <ScrollView style={{ paddingHorizontal: SCREEN_WIDTH * 0.02 }}>
                {/* {AstroBlog()} */}
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
                {analysis()}
                {ALMANAC()}
                {HAPPY()}
                {SHOPPING()}

            </ScrollView>

        </View>
    )
    function ASTROONENOTE() {
        return (
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}>Auspicious and Inauspicious time</Text>

            </View>)
    }

    function AstroBlog() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AstroBlog')}
                    style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>AstroBlogs</Text>
                </TouchableOpacity>
            </View>
        )
    }
    function CARD1() {
        return (

            <View style={{}}>
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
                <TouchableOpacity style={{ height: responsiveScreenHeight(6), width: responsiveScreenWidth(95), alignItems: 'center', bottom: SCREEN_HEIGHT * 0.14 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.05, width: SCREEN_WIDTH * 0.2 }}
                            source={require('../../assets/images/letter.png')}
                        />
                        <Text style={{
                            position: 'absolute',
                            fontSize: responsiveScreenFontSize(1),
                            color: Colors.black,
                            fontWeight: 'bold'
                        }}>
                            Panchang
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>)
    }
    function banner() {
        return (
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02, flexDirection: "row" }}>
                <ScrollView
                    horizontal={true}>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                            source={require('../../assets/images/banner.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                            source={require('../../assets/images/banner.png')} />
                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
    function placeofworship() {
        return (
            <View style={{}}>

                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}>Place of Worship</Text>
                </View>

                <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.03, paddingVertical: SCREEN_HEIGHT * 0.02, gap: 10, borderRadius: 10, backgroundColor: "white" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <View >
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Sanatan')}
                                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, }}>
                                <Image
                                    style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                                    source={require('../../assets/images/worship1.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Navgrah')}
                                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, }}>
                                <Image
                                    style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                                    source={require('../../assets/images/worship2.png')} />
                            </TouchableOpacity>
                        </View>


                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('VardaniBargad')}
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                                source={require('../../assets/images/worship3.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Shivalya')}
                            style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, resizeMode: "contain" }}
                                source={require('../../assets/images/worship4.png')} />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        )
    }

    function BANNER2() {
        return (
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02 }}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}>Complete Horoscope Solution</Text>
                </View>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "contain" }}
                        source={require('../../assets/images/BANNER2.png')} />
                </TouchableOpacity>

            </View>
        )
    }
    function banner3() {
        return (
            <View style={{}}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}> Horoscope Matching</Text>
                </View>
                <TouchableOpacity style={{ alignItems: "center", borderRadius: 10, borderRadius: 10, overflow: "hidden", }}>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "cover" }}
                        source={require('../../assets/images/banner3.png')} />
                </TouchableOpacity>

            </View>
        )
    }
    function BANNER4() {
        return (
            <View style={{}}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}>Your Horoscope </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Horoscope')}
                    style={{ alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "cover" }}
                        source={require('../../assets/images/BANNER4.png')} />
                </TouchableOpacity>

            </View>
        )
    }
    function banner5() {
        return (
            <View style={{}}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}>Religion Collection</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PujaSection')}
                    style={{ alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "cover" }}
                        source={require('../../assets/images/banner5.png')} />
                </TouchableOpacity>

            </View>
        )
    }
    function banner6() {
        return (
            <View style={{}}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}>AstroOne Special Devotee Rosery</Text>
                </View>
                <TouchableOpacity style={{ alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1, resizeMode: "cover" }}
                        source={require('../../assets/images/banner7.png')} />
                </TouchableOpacity>

            </View>
        )
    }
    function visittemple() {
        return (
            <View>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "800" }}>Virtue of visiting famous temples</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    style={{ flexDirection: "row", }}>

                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 1, height: SCREEN_HEIGHT * 0.3, width: SCREEN_WIDTH * 0.39, alignItems: "center", borderRadius: 10, backgroundColor: "white", borderColor: "gray", elevation: 3 }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH * 0.38, borderRadius: 10, resizeMode: "contain" }}
                                source={require('../../assets/images/live.png')} />
                            <Text style={{ color: "black", fontSize: 13, }}>उज्जैन से सीधा प्रसारण</Text>
                            <Text style={{ color: "gray", fontSize: 13, }}>घर बैठे दिव्यदर्शन</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 1, height: SCREEN_HEIGHT * 0.3, width: SCREEN_WIDTH * 0.39, alignItems: "center", borderRadius: 10, backgroundColor: "white", borderColor: "gray", elevation: 3 }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH * 0.38, borderRadius: 10, resizeMode: "contain" }}
                                source={require('../../assets/images/live.png')} />
                            <Text style={{ color: "black", fontSize: 13, }}>उज्जैन से सीधा प्रसारण</Text>
                            <Text style={{ color: "gray", fontSize: 13, }}>घर बैठे दिव्यदर्शन</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 1, height: SCREEN_HEIGHT * 0.3, width: SCREEN_WIDTH * 0.39, alignItems: "center", borderRadius: 10, backgroundColor: "white", borderColor: "gray", elevation: 3 }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.25, width: SCREEN_WIDTH * 0.38, borderRadius: 10, resizeMode: "contain" }}
                                source={require('../../assets/images/live.png')} />
                            <Text style={{ color: "black", fontSize: 13, }}>उज्जैन से सीधा प्रसारण</Text>
                            <Text style={{ color: "gray", fontSize: 13, }}>घर बैठे दिव्यदर्शन</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
    function analysis() {
        return (
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: SCREEN_HEIGHT * 0.025 }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 5 }}>
                        <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                        <View>
                            <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Contact now for astrological</Text>

                            <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>analysis for solution</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: Colors.background_theme1, width: SCREEN_WIDTH * 0.18, borderRadius: 20, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.005 }}>
                            <Text style={{ color: Colors.background_theme1, fontSize: 15, }}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    horizontal={true}
                    style={{ flexDirection: "row", paddingVertical: SCREEN_HEIGHT * 0.025 }}>

                    <View style={{ gap: 3, flexDirection: "row" }}>
                        <TouchableOpacity style={{ alignItems: "center", flexDirection: "row", width: SCREEN_WIDTH * 0.4, paddingHorizontal: SCREEN_WIDTH * 0.02, gap: 5, paddingVertical: SCREEN_HEIGHT * 0.012, borderRadius: 100, backgroundColor: Colors.background_theme1 }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.054, width: SCREEN_WIDTH * 0.111 }}
                                source={require('../../assets/images/circle.png')} />
                            <Text style={{ fontSize: 12, color: "white" }}>Lalkitab</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignItems: "center", flexDirection: "row", width: SCREEN_WIDTH * 0.4, paddingHorizontal: SCREEN_WIDTH * 0.02, gap: 5, paddingVertical: SCREEN_HEIGHT * 0.012, borderRadius: 100, backgroundColor: Colors.background_theme1 }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.054, width: SCREEN_WIDTH * 0.111 }}
                                source={require('../../assets/images/circle.png')} />
                            <Text style={{ fontSize: 12, color: "white" }}>Prashna</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignItems: "center", flexDirection: "row", width: SCREEN_WIDTH * 0.4, paddingHorizontal: SCREEN_WIDTH * 0.02, gap: 5, paddingVertical: SCREEN_HEIGHT * 0.012, borderRadius: 100, backgroundColor: Colors.background_theme1 }}>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.054, width: SCREEN_WIDTH * 0.111 }}
                                source={require('../../assets/images/circle.png')} />
                            <Text style={{ fontSize: 12, color: "white" }}>Vastu</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </View>
        )
    }
    function ALMANAC() {
        return (
            <View style={{}}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: SCREEN_HEIGHT * 0.015 }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                        <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Today's Almanac</Text>
                    </View>
                    <TouchableOpacity>
                        <Entypo
                            name='calendar'
                            color={'black'}
                            size={20} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 25, paddingHorizontal: SCREEN_WIDTH * 0.025, paddingVertical: SCREEN_HEIGHT * 0.02, borderRadius: 10, backgroundColor: Colors.background_theme1 }}>
                    <View>
                        <Image
                            style={{ height: SCREEN_HEIGHT * 0.15, width: SCREEN_WIDTH * 0.3 }}
                            source={require('../../assets/images/rishi.png')} />
                    </View>

                    <View>
                        <Text style={{ color: "white", fontSize: 13 }}>thithi</Text>
                        <Text style={{ color: "white", fontSize: 13 }}>din</Text>
                        <Text style={{ color: "white", fontSize: 13 }}>Special Diwali</Text>
                        <Text style={{ color: "white", fontSize: 13 }}>Constellation</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
    function HAPPY() {
        return (
            <View>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.025, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>AstroOne's Happy Family</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: SCREEN_WIDTH * 0.02, paddingVertical: SCREEN_HEIGHT * 0.015, paddingBottom: SCREEN_HEIGHT * 0.04, backgroundColor: "#FCCDC7", borderRadius: 10, borderColor: Colors.background_theme1, borderWidth: 1 }}>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <View>
                            <Image
                                style={{ height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.2 }}
                                source={require('../../assets/images/astroone.png')} />
                        </View>
                        <View >
                            <Text style={{ fontSize: 14, color: "black", fontWeight: "500" }}>Anuj PAL</Text>
                            <Text style={{ fontSize: 12, color: "gray" }} >Nyc work</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", }}>
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                    </View>
                </TouchableOpacity >
            </View>
        )
    }
    function SHOPPING() {
        return (
            <View style={{ paddingBottom: SCREEN_HEIGHT * 0.05 }}>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.025, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                    <Text style={{ color: Colors.background_theme1, fontSize: 20, fontWeight: "900" }}>|</Text>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>AstroOne's Happy Family</Text>
                </View>

                <ScrollView
                    horizontal={true}>
                    <View style={{ flexDirection: "row", gap: 10 }}>

                        <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.4, borderRadius: 10, backgroundColor: "white" }}>
                            <View style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, overflow: "hidden", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Image
                                    style={{ height: SCREEN_HEIGHT * 0.3, width: SCREEN_WIDTH * 0.4, resizeMode: "cover" }}
                                    source={require('../../assets/images/god.png')} />
                            </View>
                            <View style={{ alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                                <Text style={{ fontSize: 13, color: "black", fontWeight: "500" }}>E-Puja</Text>
                            </View>

                        </TouchableOpacity >

                        <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.4, borderRadius: 10, backgroundColor: "white" }}>
                            <View style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, overflow: "hidden", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Image
                                    style={{ height: SCREEN_HEIGHT * 0.3, width: SCREEN_WIDTH * 0.4, resizeMode: "cover" }}
                                    source={require('../../assets/images/god.png')} />
                            </View>
                            <View style={{ alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                                <Text style={{ fontSize: 13, color: "black", fontWeight: "500" }}>Jyoti samarghree</Text>
                            </View>

                        </TouchableOpacity >
                        <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.4, borderRadius: 10, backgroundColor: "white" }}>
                            <View style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.4, overflow: "hidden", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Image
                                    style={{ height: SCREEN_HEIGHT * 0.3, width: SCREEN_WIDTH * 0.4, resizeMode: "cover" }}
                                    source={require('../../assets/images/god.png')} />
                            </View>
                            <View style={{ alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                                <Text style={{ fontSize: 13, color: "black", fontWeight: "500" }}>Vastu</Text>
                            </View>

                        </TouchableOpacity >


                    </View>
                </ScrollView>


            </View>
        )
    }

}

export default Home1

const styles = StyleSheet.create({})
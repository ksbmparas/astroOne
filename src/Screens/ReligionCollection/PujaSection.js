import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { useNavigation } from '@react-navigation/native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign';

const aartiImages = {
    Aarti: require('../../assets/images/newarti.png'),
    Chalisa: require('../../assets/images/newchalisa.png'),
    BeejMantra: require('../../assets/images/newbeejmantra.png'),
    Kavachas: require('../../assets/images/newkavch.png'),
    VratKathas: require('../../assets/images/newvartkatha.png'),
    PoojaVidhi: require('../../assets/images/newpoojavidhi.png'),
};

const PujaSection = () => {
    const navigation = useNavigation();
    const aartiKeys = Object.keys(aartiImages);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/images/sangrahalay_bg.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign
                            name="left"
                            size={25}
                            color={Colors.black}
                            style={styles.backIcon}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.txt}>Puja Section Sangrahlaya</Text>
                    </View>
                </View>

                <FlatList
                    data={aartiKeys}
                    keyExtractor={(item) => item}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.touchable}>
                            <Image
                                source={aartiImages[item]}
                                style={styles.touchableImage}
                            />
                            <Text style={styles.touchableText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.flatListContainer}
                    ListFooterComponent={
                        <View>
                            <BookVirtualPuja />
                            <DevotionalSongs />
                        </View>
                    }
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const BookVirtualPuja = () => {
    const navigation = useNavigation()
    return (
        <View style={{padding:SCREEN_WIDTH*0.02}}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                <Text style={{ color: Colors.primaryTheme, fontSize: 20, fontWeight: "bold", marginLeft:SCREEN_WIDTH*0.01 }}>|</Text>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Book Virtual Puja</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('PujaSection')}
                style={{ alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                <Image
                    style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1 }}
                    source={require('../../assets/images/bookpooj.png')} />
            </TouchableOpacity>

        </View>
    )
}

const DevotionalSongs = () => {
    const navigation = useNavigation()
    return (
        <View style={{padding:SCREEN_WIDTH*0.02}}>
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01, flexDirection: "row", alignItems: "flex-end", gap: 5 }}>
                <Text style={{ color: Colors.primaryTheme, fontSize: 20, fontWeight: "bold",marginLeft:SCREEN_WIDTH*0.01 }}>|</Text>
                <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>Devotional Songs</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('PujaSection')}
                style={{ alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                <Image
                    style={{ height: SCREEN_HEIGHT * 0.2, width: SCREEN_WIDTH * 0.98, elevation: 1 }}
                    source={require('../../assets/images/newdesong.png')} />
            </TouchableOpacity>

        </View>
    )
}

export default PujaSection



const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        padding: 12,
        flexDirection: 'row',
        backgroundColor: Colors.white
    },
    backIcon: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
        marginTop: responsiveScreenHeight(0.2),
        marginLeft: responsiveScreenWidth(1)
    },
    txt: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: SCREEN_HEIGHT * 0.020,
        marginLeft: responsiveScreenWidth(12),
    },
    touchable: {
        flex: 1,
        alignItems: 'center',
    },
    touchableImage: {
        width: responsiveScreenWidth(28),
        height: responsiveScreenWidth(26),
        borderColor: Colors.black,
        borderRadius: 10
    },
    touchableText: {
        fontSize: responsiveScreenFontSize(1.6),
        color: Colors.white,
        fontWeight: 'bold',
        bottom: -responsiveScreenHeight(-2.5)
    },
})
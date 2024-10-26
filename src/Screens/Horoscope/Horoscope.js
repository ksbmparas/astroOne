import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, SCREEN_HEIGHT } from '../../config/Style';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const zodiacImages = {
    Aries: require('../../assets/images/astroassetszodiac/aries.png'),
    Taurus: require('../../assets/images/astroassetszodiac/taurus.png'),
    Gemini: require('../../assets/images/astroassetszodiac/gemini.png'),
    Cancer: require('../../assets/images/astroassetszodiac/cancer.png'),
    Leo: require('../../assets/images/astroassetszodiac/leo.png'),
    Virgo: require('../../assets/images/astroassetszodiac/virgo.png'),
    Libra: require('../../assets/images/astroassetszodiac/libra.png'),
    Scorpio: require('../../assets/images/astroassetszodiac/scorpio.png'),
    Sagittarius: require('../../assets/images/astroassetszodiac/sagittarius.png'),
    Capricorn: require('../../assets/images/astroassetszodiac/capricorn.png'),
    Aquarius: require('../../assets/images/astroassetszodiac/aquarius.png'),
    Pisces: require('../../assets/images/astroassetszodiac/pisces.png'),
};

const Horoscope = () => {
    const navigation = useNavigation();

    const zodiacKeys = Object.keys(zodiacImages);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/images/astroassetszodiac/backgrosdfund.png')}
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
                        <Text style={styles.txt}>Horoscope</Text>
                    </View>
                </View>

    
                <FlatList
                    data={zodiacKeys}
                    keyExtractor={(item) => item}
                    numColumns={3}  
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.touchable}>
                            <Image 
                                source={zodiacImages[item]}
                                style={styles.touchableImage} 
                            />
                            <Text style={styles.touchableText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.flatListContainer}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Horoscope

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        padding: 12,
        flexDirection: 'row'
    },
    backIcon: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
        marginTop: responsiveScreenHeight(0.4),
        marginLeft: responsiveScreenWidth(4)
    },
    txt: {
        alignSelf: 'center',
        fontWeight: 'semibold',
        color: Colors.black,
        fontSize: SCREEN_HEIGHT * 0.022,
        marginLeft: responsiveScreenWidth(10),
    },
    flatListContainer: {
        paddingHorizontal: responsiveScreenWidth(2),
        marginTop: responsiveScreenHeight(2),
    },
    touchable: {
        flex: 1,
        alignItems: 'center',
        margin: responsiveScreenWidth(1),
    },
    touchableImage: {
        width: responsiveScreenWidth(20),
        height: responsiveScreenWidth(20),
        borderColor: Colors.black,
    },
    touchableText: {
        marginTop: responsiveScreenHeight(0.5),
        fontSize: responsiveScreenFontSize(1.5),
        color: Colors.black,
        marginBottom:responsiveScreenHeight(3)
    },
})

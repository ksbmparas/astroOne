import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { useNavigation, } from '@react-navigation/native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Myheader from '../Components/Myheader'

const poojaImages = {
  Satyanarayan_Pooja: require('../../assets/images/satyaNarayanJi.jpg'),
  Durga_Pooja: require('../../assets/images/durgaji.jpg'),
  Laxmi_Pooja: require('../../assets/images/Laxmiji.jpg'),
  Mahakali_Pooja: require('../../assets/images/kaali.jpg'),
  Shiv_Pooja: require('../../assets/images/shiva.jpg'),
  Krishna_Pooja: require('../../assets/images/krishna.jpg'),
  Aarti: require('../../assets/images/newarti.png'),
  Chalisa: require('../../assets/images/newchalisa.png'),
  BeejMantra: require('../../assets/images/newbeejmantra.png'),
  Kavachas: require('../../assets/images/newkavch.png'),
  VratKathas: require('../../assets/images/newvartkatha.png'),
  PoojaVidhi: require('../../assets/images/newpoojavidhi.png'),

};

const BookPooja = () => {
  const navigation = useNavigation();
  const poojaKeys = Object.keys(poojaImages);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/sangrahalay_bg.jpg')}
        style={styles.backgroundImage}
      >
        <Myheader title={"Book Pooja"} />
        <FlatList
          data={poojaKeys}
          keyExtractor={(item) => item}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.touchable}
            >
              <View style={{
                width: responsiveScreenWidth(45),
                height: responsiveScreenWidth(60),
                alignItems: 'center',
                backgroundColor: Colors.white,
                borderRadius: 25,
                elevation: 4
              }}>
                <Image
                  source={poojaImages[item]}
                  style={styles.touchableImage}
                />
              </View>
              <Text style={styles.touchableText}>{item}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContainer}
        />
      </ImageBackground>
    </SafeAreaView >
  )
}

export default BookPooja



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
    width: responsiveScreenWidth(44),
    height: responsiveScreenWidth(40),
    borderColor: Colors.black,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 4,
  },
  touchableText: {
    fontSize: responsiveScreenFontSize(1.4),
    color: Colors.black,
    fontWeight: 'bold',
    bottom: responsiveScreenHeight(9),
  },
  flatListContainer: {
    paddingTop: responsiveScreenHeight(2)
  }
})
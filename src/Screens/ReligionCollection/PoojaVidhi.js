import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { useNavigation, } from '@react-navigation/native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'



const poojaVidhiImages = {
  Ganesh_Ji_Aarti: require('../../assets/images/ganesh1.jpg'),
  Om_jai_Jagdish_Hare_Aarti:require('../../assets/images/jagdishji.png'),
  Durga_Mata_Aarti:require('../../assets/images/durgaji.jpg'),
  Laxmi_Mata_Aarti:require('../../assets/images/Laxmiji.jpg'),
  Hanuman_Ji_Aarti:require('../../assets/images/hanumanJi.jpg'),
  Satya_Narayn_Ji_Aarti:require('../../assets/images/satyaNarayanJi.jpg'),
  Shiv_Ji_Aarti:require('../../assets/images/shiva.jpg'),
  KunjBihari_Ji_Aarti:require('../../assets/images/krishna.jpg'),
  Aarti: require('../../assets/images/newarti.png'),
  Chalisa: require('../../assets/images/newchalisa.png'),
  BeejMantra: require('../../assets/images/newbeejmantra.png'),
  Kavachas: require('../../assets/images/newkavch.png'),
  VratKathas: require('../../assets/images/newvartkatha.png'),
  PoojaVidhi: require('../../assets/images/newpoojavidhi.png'),

};

const PoojaVidhi = () => {
  const navigation = useNavigation();
  const poojaKeys = Object.keys(poojaVidhiImages);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={poojaKeys}
        keyExtractor={(item) => item}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate('DetailPujaScreens', { itemName: item })}
          >
            <View style={{
              width: responsiveScreenWidth(45),
              height: responsiveScreenWidth(60),
              alignItems:'center',
              backgroundColor:Colors.white,
              borderRadius:25,
              elevation:4
            }}>
              <Image
                source={poojaVidhiImages[item]}
                style={styles.touchableImage}
              />
            </View>
            <Text style={styles.touchableText}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView >
  )
}

export default PoojaVidhi



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
    height: responsiveScreenWidth(45),
    borderColor: Colors.black,
    borderRadius: 25,
    elevation:4,
  },
  touchableText: {
    fontSize: responsiveScreenFontSize(1.4),
    color: Colors.black,
    fontWeight: 'bold',
    bottom: -responsiveScreenHeight(-3.5)
  },
  flatListContainer: {
    paddingTop: responsiveScreenHeight(2)
  }
})
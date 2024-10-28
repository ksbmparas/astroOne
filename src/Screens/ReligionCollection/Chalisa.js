import { FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { useNavigation, } from '@react-navigation/native'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'



const chalisaImages = {
  Shri_Ganesh_Chalisa: require('../../assets/images/ganesha.jpg'),
  Shri_Vishnu_Chalisa:require('../../assets/images/Vishnuji.jpg'),
  Durga_Mata_Chalisa:require('../../assets/images/durgaji.jpg'),
  Laxmi_Mata_Chalisa:require('../../assets/images/Laxmiji.jpg'),
  Shri_Hanuman_Chalisa:require('../../assets/images/hanumanJi.jpg'),
  Shri_Satya_Narayn_Chalisa:require('../../assets/images/satyaNarayanJi.jpg'),
  Shri_Shiv_Chalisa:require('../../assets/images/shiva.jpg'),
  Shri_Krishna_Chalisa:require('../../assets/images/krishna.jpg'),
  Aarti: require('../../assets/images/newarti.png'),
  Chalisa: require('../../assets/images/newchalisa.png'),
  BeejMantra: require('../../assets/images/newbeejmantra.png'),
  Kavachas: require('../../assets/images/newkavch.png'),
  VratKathas: require('../../assets/images/newvartkatha.png'),
  PoojaVidhi: require('../../assets/images/newpoojavidhi.png'),

};

const Chalisa = () => {
  const navigation = useNavigation();
  const chalisaKeys = Object.keys(chalisaImages);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={chalisaKeys}
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
                source={chalisaImages[item]}
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

export default Chalisa



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
    elevation:4
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
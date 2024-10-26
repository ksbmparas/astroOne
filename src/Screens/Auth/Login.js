import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { useNavigation } from '@react-navigation/native'
import CountryPicker from 'react-native-country-picker-modal';


const Login = () => {
  const navigation = useNavigation()

  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [isVisible, setIsVisible] = useState(false);

  const handleSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar backgroundColor={Colors.primaryTheme} barStyle={'dark-content'} />
      <View>
        <View>
          <ImageBackground source={require('../../images/design.png')} style={styles.bgImg}>
            <Image source={require('../../images/guru.png')} style={styles.img} />
          </ImageBackground>
        </View>
        {/* Part2 */}
        <View>
          <Text style={styles.login}>LOGIN</Text>
          <Image source={require('../../images/design2.png')} style={{ resizeMode: 'contain', width: '100%', height: SCREEN_HEIGHT * 0.07, top: -SCREEN_HEIGHT * 0.02 }} />
        </View>
        {/* Part3 */}
        <View style={{ paddingHorizontal: 20, width: '100%', gap: 15 }}>

          <View style={styles.txtInp}>
            <TouchableOpacity onPress={() => setIsVisible(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CountryPicker
                countryCode={countryCode}
                withCallingCode
                withFlag
                onSelect={handleSelectCountry}
                visible={isVisible}
                onClose={() => setIsVisible(false)}
              />
              <Text style={{ color: 'black' }}>({countryCode}) +{callingCode}</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Enter your contact number"
              placeholderTextColor={Colors.lightBlack}
              style={{
                flex: 1,
                paddingLeft: 10,
                ...Fonts._14MontserratNormal,
                color: 'black'
              }}
              maxLength={10}
              keyboardType="number-pad"
            />
          </View>

          <TouchableOpacity style={{ width: '100%', paddingVertical: 15, backgroundColor: Colors.primaryTheme, borderRadius: 15, alignItems: 'center', elevation: 4 }}
            onPress={() => { navigation.navigate('Otp') }}>
            <Text style={{
              alignSelf: 'center',
              color: Colors.white,
              fontWeight: 'bold',
              fontSize: 18
            }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: '100%', paddingVertical: 15, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: Colors.primaryTheme }}
            onPress={() => { navigation.navigate('AstrologerLogin') }}>
            <Text style={{ color: Colors.primaryTheme, fontWeight: 'bold' }}>Astrologer Login</Text>
          </TouchableOpacity>

          <View style={{ width: '100%', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ borderWidth: 0.3, flex: 1 }} />
              <Text style={{ color: 'black', marginHorizontal: 10, ...Fonts._14MontserratRegular, paddingHorizontal: 50 }}>or</Text>
              <View style={{ borderWidth: 0.3, flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 25 }}>
              <Image source={require('../../images/google.png')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.10, width: SCREEN_WIDTH * 0.10 }} />
              <Image source={require('../../images/facebook.jpg')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.10, width: SCREEN_WIDTH * 0.10 }} />
            </View>
            <View style={{ width: '100%', paddingHorizontal: 40, alignItems: 'center' }}>
              <Text style={{ color: Colors.black, fontSize: 8, fontWeight: 'bold' }}>By Signing up,you acknowledge and agree to our</Text>
              <Text style={{ fontSize: 8 }}>
                <Text style={{ color: Colors.primaryTheme, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                  Terms of Use
                </Text>
                <Text style={{ color: Colors.black, fontWeight: 'bold' }}>
                  {" "}and{" "}
                </Text>
                <Text style={{ color: Colors.primaryTheme, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>



        </View>


      </View>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  bgImg: {
    elevation: 3,
    height: SCREEN_HEIGHT * 0.41,
  },
  img: {
    height: SCREEN_HEIGHT * 0.40,
    width: SCREEN_WIDTH * 0.7,
    alignSelf: 'center',
    top: SCREEN_HEIGHT * 0.04
  },
  login: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 5,
    fontSize: 25
  },
  txtInp: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#e3e2de',
    borderRadius: 10,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
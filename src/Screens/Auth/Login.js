import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { Colors, Fonts, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{ gap: 10 }}>
        {/* Part1 */}
        <View>
          <ImageBackground source={require('../../images/design.png')} style={{}} resizeMode='contain'>
            <Image source={require('../../images/guru.png')} resizeMode='cover' style={{ height: SCREEN_HEIGHT * 0.40, width: SCREEN_WIDTH * 0.75, alignSelf: 'center', top: SCREEN_HEIGHT * 0.029 }} />
          </ImageBackground>
        </View>
        {/* Part2 */}
        <View>
          <Text style={{ ...Fonts.__28MontserratRegular, alignSelf: 'center', fontWeight: '700' }}>LOGIN</Text>
          <Image source={require('../../images/design2.png')} resizeMode='contain' style={{ width: '100%', height: SCREEN_HEIGHT * 0.07 }} />
        </View>
        {/* Part3 */}
        <View style={{ paddingHorizontal: 20, width: '100%', gap: 20 }}>

          <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 4, backgroundColor: '#dcd6c6', borderRadius: 10, elevation: 4 }}>
            <TextInput placeholder='Enter your phone No.' placeholderTextColor={'#cc8981'} style={{ ...Fonts._14MontserratNormal, color: 'black' }} keyboardType='number-pad' />

          </View>

          <TouchableOpacity style={{ width: '100%', paddingVertical: 18, backgroundColor: 'orange', borderRadius: 10, alignItems: 'center', elevation:4 }} onPress={()=>{navigation.navigate('Otp')}}>
            <Text style={{ ...Fonts._14MontserratBoldWhite }}>Login</Text>
          </TouchableOpacity>

          <View style={{ width: '100%', paddingVertical: 18, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#be6f69' }}>
            <Text style={{ ...Fonts._14MontserratBoldWhite, color: 'red' }}>Astrologer Login</Text>
          </View>

          <View style={{ width: '100%', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ borderWidth: 0.3, flex: 1 }} />
              <Text style={{ color: 'black', marginHorizontal: 10, ...Fonts._14MontserratRegular }}>OR</Text>
              <View style={{ borderWidth: 0.3, flex: 1 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 40 }}>
              <Image source={require('../../images/google.png')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.10, width: SCREEN_WIDTH * 0.10 }} />
              <Image source={require('../../images/facebook.png')} resizeMode='contain' style={{ height: SCREEN_HEIGHT * 0.10, width: SCREEN_WIDTH * 0.10 }} />

            </View>
            <View style={{ width: '100%', }}>
              <Text style={{ ...Fonts._14MontserratRegular, color: 'black', }}> By Signing up,You acknowledge and agree to our Terms and condions</Text>

            </View>
          </View>






        </View>


      </View>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})
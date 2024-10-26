import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLock from 'react-native-vector-icons/MaterialIcons';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const AstrologerLogin = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={Colors.primaryTheme} barStyle={'dark-content'} />
            <View>
                <View style={{ padding: 12 }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name="left" size={25} color={Colors.black}
                            style={{
                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                textShadowOffset: { width: 0, height: 1 },
                                textShadowRadius: 1
                            }} />
                    </TouchableOpacity>
                    <View style={{ marginTop: SCREEN_HEIGHT*0.04 }}>
                        <Text style={styles.txt}>Only For Astrologer</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: SCREEN_HEIGHT*0.05, width: '100%', gap: 20, marginTop: SCREEN_HEIGHT * 0.02 }}>
                    <View style={styles.txtInp}>
                        <Icon name="user-o" size={20} color="gray" style={{ marginLeft: 5 }} />
                        <TextInput
                            placeholder="Enter your email address"
                            placeholderTextColor={Colors.lightBlack}
                            style={{
                                flex: 1,
                                paddingLeft: 10,
                                color: 'black',
                            }}
                            maxLength={10}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.txtInp}>
                        <IconLock name="lock-outline" size={20} color="gray" style={{ marginLeft: 5 }} />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={Colors.lightBlack}
                            style={{
                                flex: 1,
                                paddingLeft: 10,
                                color: 'black',
                            }}
                            maxLength={10}
                            keyboardType="email-address"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('ForgotPassword')} 
                        style={{ width: SCREEN_WIDTH * 0.3, alignSelf: 'flex-end' }}>
                        <Text style={{ alignSelf: 'flex-end', fontWeight: 'bold', fontSize:SCREEN_HEIGHT*0.015 }}>Forgot Password</Text>
                    </TouchableOpacity>
                    <View style={{paddingVertical: SCREEN_HEIGHT*0.02, borderRadius: 15, alignItems: 'center',backgroundColor:Colors.primaryTheme}}>
                        <Text style={{ color: Colors.white,fontSize:SCREEN_HEIGHT*0.019, fontWeight: 'bold' }}>Astrologer Login</Text>
                    </View>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('VerfiedAstrologer')} 
                        style={{ width: SCREEN_WIDTH * 0.4,marginTop:SCREEN_HEIGHT*0.01, alignSelf: 'center',flexDirection:'row'}}>
                        <Icon name="user-o" size={20} color="gray" style={{marginRight:5}} />
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: SCREEN_HEIGHT*0.015 }}>Verified Astrologer</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('../../assets/images/designR.png')}
                      style={{alignSelf:'center',width:responsiveScreenWidth(100), height:responsiveScreenHeight(50), resizeMode:"contain"}} 
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AstrologerLogin

const styles = StyleSheet.create({
    txt: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: SCREEN_HEIGHT*0.025
    },
    txtInp: {
        width: '100%',
        paddingHorizontal: SCREEN_HEIGHT*0.01,
        paddingVertical: SCREEN_HEIGHT*0.01,
        backgroundColor: '#e3e2de',
        borderRadius: 15,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center'
    }
})
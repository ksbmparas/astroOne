import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { launchCamera } from 'react-native-image-picker';

const ForgotPassword = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryTheme }}>
            <StatusBar backgroundColor={Colors.primaryTheme} barStyle={'dark-content'} />
            <View style={{ paddingHorizontal: SCREEN_HEIGHT * 0.02 }}>
                <View style={{ marginTop: SCREEN_HEIGHT * 0.04 }}>
                    <Text style={styles.txt}>Forgot Password</Text>
                </View>
                <View style={styles.container}>
                    <View style={{ marginBottom: SCREEN_HEIGHT * 0.03 }}>
                        <Text style={styles.txt1}>Enter email to get new password</Text>
                    </View>
                    <View style={{ paddingHorizontal: SCREEN_HEIGHT * 0.03, marginTop: SCREEN_HEIGHT * 0.02 }}>
                        <View style={styles.txtInp}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor={Colors.lightBlack}
                                style={{
                                    flex: 1,
                                    paddingLeft: 10,
                                    color: 'black',
                                }}
                                maxLength={10}
                                keyboardType="email-address"
                                selectionColor={Colors.lightBlack}
                            />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.06, marginTop: SCREEN_HEIGHT * 0.05 }}>
                        <TouchableOpacity style={{ paddingVertical: SCREEN_HEIGHT * 0.01, borderRadius: 50, alignItems: 'center', backgroundColor: Colors.primaryTheme }}>
                            <Text style={{ color: Colors.white, fontSize: responsiveScreenFontSize(2.5), fontWeight: 'bold' }}>Get Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    txt: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 20
    },
    container: {
        backgroundColor: Colors.white,
        padding: SCREEN_HEIGHT * 0.03,
        borderRadius: 20,
        marginTop: SCREEN_HEIGHT * 0.02,
        height: SCREEN_HEIGHT * 0.4
    },
    txt1: {
        alignSelf: 'center',
        fontWeight: 'semibold',
        color: Colors.primaryTheme,
        fontSize: responsiveScreenFontSize(2.2),
        elevation: 3
    },
    txtInp: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, Fonts, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style';
import { CodeField, useClearByFocusCell, Cursor } from 'react-native-confirmation-code-field';
import { useNavigation } from '@react-navigation/native';

const Otp = () => {
    const navigation = useNavigation()
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const [otpprops, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <Image source={require('../../images/design.png')} resizeMode='cover' style={{ width: '100%' }} />
            <FlatList
                ListHeaderComponent={
                    <View style={{ marginTop: SCREEN_HEIGHT * 0.05, gap: 20 }}>
                        {OtpConfirmationText()}
                        {OtpCell()}
                        <View style={{ paddingHorizontal: 20 }}>
                            {VerifyButton()}

                        </View>
                    </View>
                }
            />
        </SafeAreaView>
    );

    function VerifyButton() {
        return (
            <TouchableOpacity style={{ width: '100%', paddingVertical: 18, backgroundColor: 'orange', borderRadius: 10, alignItems: 'center', elevation: 4, }} onPress={() => { navigation.navigate('Home') }}>
                <Text style={{ ...Fonts._14MontserratBoldWhite }}>Verify</Text>
            </TouchableOpacity>
        )
    }

    function OtpCell() {
        return (
            <View style={{ flex: 0, gap: 20 }}>
                <CodeField
                    //   ref={ref}
                    {...otpprops}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text allowFontScaling={false}
                            key={index}
                            style={[
                                styles.cell,
                                isFocused && styles.focusCell,
                            ]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Text style={{ ...Fonts._14MontserratBoldWhite, color: Colors.primaryTheme, textAlign: 'center' }}>Resend OTP in 56 seconds</Text>
            </View>
        );
    }

    function OtpConfirmationText() {
        return (
            <View style={{ gap: 10 }}>
                <Text style={{ ...Fonts._14MontserratRegular, textAlign: 'center', color: '#d69547' }}>
                    Kindly check and fill the confirmation code sent to
                </Text>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ ...Fonts._14MontserratRegular, color: '#d69547' }}>6388158576</Text>
                    <Image
                        source={require('../../images/pen2.png')}
                        resizeMode='contain'
                        style={{ height: 20, width: 20 }}
                        tintColor={'#d69547'}
                    />
                </View>
            </View>
        );
    }
};

export default Otp;

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30, fontFamily: Fonts.medium },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: SCREEN_WIDTH * 0.14,
        height: SCREEN_HEIGHT * 0.06,
        lineHeight: 32,
        fontSize: 22,
        borderWidth: 1,
        borderBottomWidth: 3,
        borderRadius: 5,
        borderColor: Colors.primaryTheme,
        textAlign: 'center',
        marginHorizontal: 20,
        shadowColor: Colors.black_color6,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        color: "black",
        paddingTop: 10,
        backgroundColor: Colors.white_color

    },
    focusCell: {
        borderColor: Colors.white_color,
    },
});


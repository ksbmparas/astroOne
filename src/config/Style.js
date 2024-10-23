
import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export { SCREEN_HEIGHT, SCREEN_WIDTH }

const fontScale = PixelRatio.getFontScale()
export const getFontSize = size => size / fontScale

export const Sizes = {
    fixPadding: SCREEN_HEIGHT * 0.02,
    fixHorizontalPadding: SCREEN_WIDTH * 0.02
}
export const Colors = {
    primaryTheme: '#EA7515',
    secondryTheme: '#FBBC04',
    secondryLight: '#aad576',
    white: '#fff',
    black: '#000',
    grayA: '#6c757d',
    grayB: '#adb5bd',
    grayC: '#E2DEDE',
    grayD: '#dee2e6',
    grayE: '#e9ecef',
    grayF: '#f8f9fa',
    grayG: '#F7F7F7',
    grayDark: '#4A4A4A',
    redA: '#e76f51',
    wine: '#610F06',
    orange: '#FC4702'

}

export const Fonts = {
    __28MontserratRegular: {
        fontSize: getFontSize(22),
        color: Colors.black,
        fontFamily: 'Montserrat-Regular',
    },
    _14MontserratRegular: {
        fontSize: getFontSize(14),
        color: Colors.black,
        fontFamily: 'Montserrat-Regular',
    },
    _14MontserratBoldWhite :{
        fontSize: getFontSize(14),
        color: Colors.white,
        fontFamily: 'Montserrat-Bold',
    }





}
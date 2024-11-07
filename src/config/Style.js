
import { Dimensions, PixelRatio } from "react-native";
import { green } from "react-native-reanimated/lib/typescript/Colors";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export { SCREEN_HEIGHT, SCREEN_WIDTH }

const fontScale = PixelRatio.getFontScale()
export const getFontSize = size => size / fontScale

export const Sizes = {
    fixPadding: SCREEN_HEIGHT * 0.02,
    fixHorizontalPadding: SCREEN_WIDTH * 0.02
}
export const Colors = {
    primaryTheme: '#bf4f1b',
    secondryTheme: '#FBBC04',
    secondryLight: '#aad576',
    white: '#fff',
    black: '#000',
    lightBlack:'#8B8B8B',
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
    orange: '#FC4702',
    background_theme1:"#D56A14",
    green:"#03C04A",

}

export const colors = {
    black_color: '#000',
    black_color1: '#f8f9fa',
    black_color2: '#e9ecef',
    black_color3: '#dee2e6',
    black_color4: '#ced4da',
    black_color5: '#adb5bd',
    black_color6: '#6c757d',
    black_color7: '#495057',
    black_color8: '#343a40',
    black_color9: '#212529',
    white_color: '#fff',
    grey_color: '#adb5bd',
    green_color1: '#6a994e',
    green_color2: '#29bf12',
    yellow_color1: '#ffbc42',
    yellow_color2: '#ffdab9',
    yellow_color3: '#f4a261',
    yellow_color4: '#fffae5',
    magenta_color1: '#7209b7',
    magenta_color2: '#c77dff',
    pink_color1: '#9e0059',
    pink_color2: '#fae0e4',
    pink_color3: '#ffa6c1',
    red_color1: '#ff5a5f',
    background_theme1: '#fff',
    // background_theme2: '#FA5D08',
    background_theme2: '#F45F4B',
    background_theme4: '#F2805F',
    background_theme3: '#bdd3ff',
    orange_color: '#7d0300',
  };


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
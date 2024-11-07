import { StyleSheet, Text, TouchableOpacity, View,Dimensions,Image } from 'react-native'
import React, { useEffect } from 'react'
import { colors,getfontsize,fonts,Sizes,} from '../../config/Constants1'

const { width, height } = Dimensions.get('screen');
import { Colors ,fixPadding } from '../../config/Style';
import { connect, useSelector } from 'react-redux';
import * as HomeActions from '../../Redux/Actions/HomeActions';

const chat = ({dispatch,chatAstrologer}) => {

  console.log("chatAstrologer--",chatAstrologer)

  useEffect(()=>{
    dispatch(HomeActions.getHomeData());
  },[])
  return (
    <View>
        <TouchableOpacity
          activeOpacity={0.8}
        
          style={{
            width: width * 0.4,
            borderRadius: 10,
            marginHorizontal: 10,
             backgroundColor: "#fff",
            shadowColor: Colors.gray,
            shadowOffset: {
              width: 2,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 8,
          }}>
          <Text
            style={{
              ...fonts.white14RobotoMedium,
              textAlign: 'center',
              textTransform: 'capitalize',
            }}>
            online
          </Text>
          <View>
            <Image
              source={require('../../assets/images/flower1.png')}
              style={{
                width: width * 0.18,
                height: width * 0.18,
                borderRadius: 1000,
                borderWidth: 1,
                alignSelf:"center"
                
              }}
            />
            <Text
              allowfontscaling={false}
              style={{
                fontsize: 12,
                color: colors?.black_color,
                fontFamily: fonts.medium,
                textAlign: 'center',
                // marginBottom: Sizes.fixPadding,
                // marginTop: Sizes.fixPadding * 0.5,
              }}>
              Anuj
            </Text>
            <View
              style={{
                paddingLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  allowfontscaling={false}
                  style={{
                    fontsize:12,
                    color: colors.black_color6,
                    fontFamily: fonts.medium,
                  }}>
                  {`3/5`}
                </Text>
                {/* <Image
              source={{ uri:"https://ksbminfotech.com/wp-content/uploads/thegem-logos/logo_5f031e0e26962402549a17e954bf2b24_1x.png" }}
              style={{ width: 15, height: 15 }}
                /> */}
              </View>
              <Text
                allowfontscaling={false}
                style={{
                  fontsize:12,
                  color: Colors.primaryLight,
                  fontFamily: fonts.medium,
                  textAlign: 'center',
                  // marginBottom: Sizes.fixPadding,
                }}>
                Followers:2
              </Text>
            </View>
          </View>
        </TouchableOpacity>
    </View>
  )
}
const mapStateToProps = state => ({
 chatAstrologer: state.home.chatAstrologer,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(chat);

const styles = StyleSheet.create({})
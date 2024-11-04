import { StyleSheet, Text, View, Image, TouchableOpacity ,FlatList} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style';
import Homeheader from '../Home/Homeheader';

const live = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const images = {
    Image1: require('../../assets/images/worship4.png'),
    Image2: require('../../assets/images/rishi.png'),
    Image3: require('../../assets/images/sun.png'),
  };

  const DATA = [
    { id: '1', image: images.Image1, name: 'Balvindar Singh', EXpertise: 'Kundli', datetime: '02/04/3003 10:00', Status: "live" },
    { id: '1', image: images.Image1, name: 'acharya singh', EXpertise: 'Numrology', datetime: '02/09/3003 10:00', Status: "live" },
    { id: '1', image: images.Image1, name: 'acharya Singh akshay', EXpertise: 'Horoscope', datetime: '31/04/3003 10:00', Status: "live" },


  ];



  const renderitem = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.02, paddingVertical: SCREEN_HEIGHT * 0.01 }}>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: SCREEN_WIDTH * 0.03, paddingVertical: SCREEN_HEIGHT * 0.02, borderRadius: 10, backgroundColor: "white", elevation: 2 }}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View>
            <Image

              style={{ height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.2 }}
              source={require("../../assets/images/astroone.png")} />
          </View>
          <View>
            <Text style={{ color: "black", fontSize: 13, fontWeight: "500" }}>{item.name}</Text>
            <Text style={{ color: "black", fontSize: 10, fontWeight: "500" }}>{item.EXpertise}</Text>
            <Text style={{ color: "black", fontSize: 10, fontWeight: "500" }}>{item.datetime}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.18, alignItems: "center", justifyContent: "center", borderRadius: 13, backgroundColor: "green", paddingVertical: SCREEN_HEIGHT * 0.005 }}>
            <Text style={{ fontSize: 13, color: "white" }}>{item.Status}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
     
   
  )
  }



  return (
    <View style={{ flex: 1 }}>
      <Homeheader />
      {alllive()}
      {/* {card1()} */}
      <FlatList
                data={DATA}
                
                renderItem={renderitem}
                keyExtractor={(item) => item.id}

            />
    </View>
  )

  function alllive() {
    return (
      <View>
        <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.03, paddingTop: SCREEN_HEIGHT * 0.02 }}>
          < Text style={{ color: "black", fontSize: 13, fontWeight: "400" }}>ALL Live Astrologers</Text>
        </View>
      </View>
    )
  }
  // function card1() {
  //   return (
  //     <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.02, paddingVertical: SCREEN_HEIGHT * 0.02 }}>
  //       <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: SCREEN_WIDTH * 0.03, paddingVertical: SCREEN_HEIGHT * 0.02, borderRadius: 10, backgroundColor: "white", elevation: 2 }}>
  //         <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
  //           <View>
  //             <Image

  //               style={{ height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.2 }}
  //               source={require("../../assets/images/astroone.png")} />
  //           </View>
  //           <View>
  //             <Text style={{ color: "black", fontSize: 13, fontWeight: "500" }}>Krishna kumar</Text>
  //             <Text style={{ color: "black", fontSize: 10, fontWeight: "500" }}>Kundli</Text>
  //             <Text style={{ color: "black", fontSize: 10, fontWeight: "500" }}>02/04/3003 10:00</Text>
  //           </View>
  //         </View>
  //         <View>
  //           <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.18, alignItems: "center", justifyContent: "center", borderRadius: 13, backgroundColor: "green", paddingVertical: SCREEN_HEIGHT * 0.005 }}>
  //             <Text style={{ fontSize: 13, color: "white" }}>live</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }
}

export default live

const styles = StyleSheet.create({})
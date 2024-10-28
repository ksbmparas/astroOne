import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style'
import { TouchableOpacity } from 'react-native-gesture-handler';


const SendGift = () => {

    const images = {
        samagri: require('../../assets/images/Samagri.png'),
        flowers: require('../../assets/images/Flowers.png'),
        heart: require('../../assets/images/Heart.png'),
        chocolates: require('../../assets/images/Choclates.png'),
        clove: require('../../assets/images/clove.png'),
        sweets: require('../../assets/images/Sweets.png'),
    };

    const DATA = [
        { id: '1', image: images.samagri, title: 'Samagri', prize: 11 },
        { id: '2', image: images.flowers, title: 'Flowers', prize: 15 },
        { id: '3', image: images.heart, title: 'Heart', prize: 21 },
        { id: '4', image: images.chocolates, title: 'Chocolates', prize: 21 },
        { id: '5', image: images.clove, title: 'Clove', prize: 21 },
        { id: '6', image: images.sweets, title: 'Sweets', prize: 21 },
    ];
    const renderitem = ({ item }) => {
        return (
            
            <TouchableOpacity style={{ width: SCREEN_WIDTH * 0.35, height: SCREEN_HEIGHT * 0.21, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.02, backgroundColor: "#FBE8E1", borderRadius: 10, elevation: 5 ,marginHorizontal:SCREEN_WIDTH*0.04,marginVertical:SCREEN_HEIGHT*0.01}}>
                <Image
                    style={{ height: SCREEN_HEIGHT * 0.07, width: SCREEN_WIDTH * 0.14 }}
                    source={item.image} />
                <View style={{ gap: 2 }}>
                    <Text style={{ fontSize: 13, fontWeight: "500", color: "black" }}>{item.title}</Text>
                    <Text style={{ fontSize: 9, fontWeight: "500", color: "#D56A14" }}>Prize:$ {item.prize}</Text>
                </View>
                <View style={{ paddingVertical: SCREEN_HEIGHT * 0.01 }}>
                    <TouchableOpacity style={{ backgroundColor: "#D56A14", width: SCREEN_WIDTH * 0.3, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.01, borderRadius: 5 }}>
                        <Text style={{ color: "white,", fontSize: 12, color: "white" }}>Send Now</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
       

        )
    }
    return (
        <View style={{ flex: 1, }}>

            <View style={{paddingVertical:SCREEN_HEIGHT*0.03,alignItems:"center"}}>
            <FlatList
                // horizontal
                numColumns={2}
                data={DATA}
                renderItem={renderitem}
                keyExtractor={(item) => item.id}

            />
            </View>

        </View>
    )

}

export default SendGift

const styles = StyleSheet.create({})
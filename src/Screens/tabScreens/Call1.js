import { StyleSheet, Text, View, TextInput, Image ,FlatList} from 'react-native'
import React, { useLayoutEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../config/Style'
import Homeheader from '../Home/Homeheader'


import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style';
import { TouchableOpacity } from 'react-native-gesture-handler'


const Call1 = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const images = {
        Image1: require('../../assets/images/sun.png'),

    };

    const DATA = [
        { id: '1', image: images.Image1, name: 'Acharya Krishna Nand ji', language: 'Hindi,assambee,English' ,Rating:"1.9",follower:"210",exeperince:"1",consulationcharge:"$350" },
        { id: '1', image: images.Image1, name: 'Acharya akash ji', language: 'Hindi,assambee,English' ,Rating:"1.2",follower:"20",exeperince:"8",consulationcharge:"$50" },
        { id: '1', image: images.Image1, name: 'Acharya hari Nand ji', language: 'Hindi,assambee,English' ,Rating:"1.0",follower:"30",exeperince:"8",consulationcharge:"$35" },
        { id: '1', image: images.Image1, name: 'Acharya ram Nand ji', language: 'Hindi,assambee,English' ,Rating:"10",follower:"70",exeperince:"9",consulationcharge:"$380" },

    ];


    const renderitem = ({ item }) => {
        return (

            <View style={{paddingHorizontal:SCREEN_WIDTH*0.025,}}>
            <View style={{borderRadius:10,overflow:"hidden",backgroundColor:"white",elevation:4 ,marginVertical:SCREEN_HEIGHT*0.01}}>
            <View style={{flexDirection:"row" ,gap:20 ,paddingHorizontal:SCREEN_WIDTH*0.035,paddingVertical:SCREEN_HEIGHT*0.02,backgroundColor: "#FFDBBB"}}>
                <View>
                    <Image
                        style={{ height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.2 }}
                        source={item.image} />
                </View>
                <View style={{}}> 
                    <Text style={{ color: "black", fontSize: 13, fontWeight: "500" }}>{item.name}</Text>
                    <Text style={{ color: "gray", fontSize: 10, fontWeight: "500" }}>{item.language}</Text>
                 
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    <View style={{ flexDirection: "row", }}>
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                        <EvilIcons name='star' size={20} color={'gray'} />
                    </View>
                    <Text style={{color:"black",fontSize:11,fontWeight:"500"}}>{item.Rating}</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center",gap:10}}>
                    <AntDesign name="adduser" size={15}/>
                    <Text style={{fontSize:8,fontWeight:"500"}}>{item.follower} Followers</Text>
                    <AntDesign name="clockcircleo" size={13}/>
                    <Text style={{fontSize:8,fontWeight:"500"}}>{item.exeperince}Year Experience</Text>

                    
                    < Entypo name="eye" size={20} color={"black"}/>


                    </View>

                </View>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:SCREEN_HEIGHT*0.02,paddingHorizontal:SCREEN_WIDTH*0.12}}>

                <View style={{justifyContent:"center",alignItems:"center"}} >
                    <Text style={{color:"green",fontSize:10,fontWeight:"500"}}>Available Now</Text>
                    <Text style={{color:"gray",fontSize:10,fontWeight:"500"}}>Consult on Call</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:10,fontWeight:"500"}}>{item.consulationcharge}</Text>
                    <Text style={{color:"gray",fontSize:10,fontWeight:"500"}}>Consultation Call</Text>
                </View>


            </View>

                    <View style={{paddingHorizontal:SCREEN_WIDTH*0.04,paddingBottom:SCREEN_HEIGHT*0.02}}>
                <TouchableOpacity style={{justifyContent:"center",alignItems:"center",paddingVertical:SCREEN_HEIGHT*0.008,borderRadius:6,backgroundColor:"#D56A14"}}>
                    <Text style={{fontSize:12,color:"white",fontWeight:"500"}}>Consult to Astrologer now</Text>
                </TouchableOpacity>
                </View>

        </View>     
        </View>
         
        )
    }









    return (
        <View style={{ flex: 1,   }}>
             <Homeheader/>
            {search()}
            {/* {card1()} */}
            <View style={{}}>
            <FlatList
                data={DATA}
                
                renderItem={renderitem}
                keyExtractor={(item) => item.id}

            />
            </View>
        </View>
    )
    function search() {
        return (
            <View style={{ paddingVertical: SCREEN_HEIGHT * 0.02 ,paddingHorizontal:SCREEN_WIDTH*0.025}}>
                <View style={{ borderWidth: 1.5, flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: SCREEN_WIDTH * 0.04, borderRadius: 10, borderColor: "gray", backgroundColor: "#FFDBBB" }}>
                    <AntDesign name='search1' color={"gray"} size={25} />
                    <TextInput
                        style={{ fontSize: 12 }}
                        placeholder='Search Astrologer by name...' />
                </View>
            </View>
        )
    }
    // function card1() {
    //     return (
    //         <View style={{borderRadius:10,overflow:"hidden",backgroundColor:"white",elevation:4}}>
    //             <View style={{flexDirection:"row" ,gap:20 ,paddingHorizontal:SCREEN_WIDTH*0.035,paddingVertical:SCREEN_HEIGHT*0.02,backgroundColor: "#FFDBBB"}}>
    //                 <View>
    //                     <Image
    //                         style={{ height: SCREEN_HEIGHT * 0.1, width: SCREEN_WIDTH * 0.2 }}
    //                         source={require("../../assets/images/astroone.png")} />
    //                 </View>
    //                 <View style={{}}> 
    //                     <Text style={{ color: "black", fontSize: 13, fontWeight: "500" }}>Acharya Krishna Nand ji</Text>
    //                     <Text style={{ color: "gray", fontSize: 10, fontWeight: "500" }}>Hindi,Assamese,Bengali</Text>
                     
    //                     <View style={{flexDirection:"row",alignItems:"center"}}>
    //                     <View style={{ flexDirection: "row", }}>
    //                         <EvilIcons name='star' size={20} color={'gray'} />
    //                         <EvilIcons name='star' size={20} color={'gray'} />
    //                         <EvilIcons name='star' size={20} color={'gray'} />
    //                         <EvilIcons name='star' size={20} color={'gray'} />
    //                         <EvilIcons name='star' size={20} color={'gray'} />
    //                     </View>
    //                     <Text style={{color:"black",fontSize:11,fontWeight:"500"}}>1.9</Text>
    //                     </View>
    //                     <View style={{flexDirection:"row", alignItems:"center",gap:10}}>
    //                     <AntDesign name="adduser" size={15}/>
    //                     <Text style={{fontSize:8,fontWeight:"500"}}>210 Followers</Text>
    //                     <AntDesign name="clockcircleo" size={13}/>
    //                     <Text style={{fontSize:8,fontWeight:"500"}}>Year Experience</Text>

                        
    //                     < Entypo name="eye" size={20} color={"black"}/>


    //                     </View>

    //                 </View>
    //             </View>

    //             <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:SCREEN_HEIGHT*0.02,paddingHorizontal:SCREEN_WIDTH*0.12}}>

    //                 <View style={{justifyContent:"center",alignItems:"center"}} >
    //                     <Text style={{color:"green",fontSize:10,fontWeight:"500"}}>Available Now</Text>
    //                     <Text style={{color:"gray",fontSize:10,fontWeight:"500"}}>Consult on Call</Text>
    //                 </View>
    //                 <View style={{justifyContent:"center",alignItems:"center"}}>
    //                     <Text style={{fontSize:10,fontWeight:"500"}}>$ 350</Text>
    //                     <Text style={{color:"gray",fontSize:10,fontWeight:"500"}}>Consultation Call</Text>
    //                 </View>


    //             </View>

    //                     <View style={{paddingHorizontal:SCREEN_WIDTH*0.04,paddingBottom:SCREEN_HEIGHT*0.02}}>
    //                 <TouchableOpacity style={{justifyContent:"center",alignItems:"center",paddingVertical:SCREEN_HEIGHT*0.008,borderRadius:6,backgroundColor:"#D56A14"}}>
    //                     <Text style={{fontSize:12,color:"white",fontWeight:"500"}}>Consult to Astrologer now</Text>
    //                 </TouchableOpacity>
    //                 </View>

    //         </View>
    //     )
    // }
}

export default Call1

const styles = StyleSheet.create({})

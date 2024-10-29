import { StyleSheet, Text, View ,Image,Linking,TouchableOpacity} from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/Style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Colors from '../config/Style'

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';
import { useState } from 'react';

const DrawerContent  = () => {
  
   const navigation=useNavigation();
  return (
    <View style={{flex:1 ,}}>
        < DrawerContentScrollView  >

        {topcontent()}
        {middlecontent()}
        {BOTTOMCONTENT()}
        
        
        
        </DrawerContentScrollView>
       
        {/* {myModal()} */}
    </View>
  )
        function topcontent(){
            return(
                <View>
                    <View  style={{alignItems:"center",paddingVertical:SCREEN_HEIGHT*0.02}}>
                        <TouchableOpacity>
                        <Image
                        style={{height:SCREEN_HEIGHT*0.08,width:SCREEN_WIDTH*0.2,}}
                        source={require('../assets/images/profile.png')}/>
                            </TouchableOpacity>
                        <View style={{height:SCREEN_HEIGHT*0.03,width:SCREEN_WIDTH*0.2,alignItems:"flex-end",bottom:10,}}>
                        <TouchableOpacity style={{height:SCREEN_HEIGHT*0.025,width:SCREEN_WIDTH*0.05,alignItems:"center",borderRadius:10,backgroundColor:"#D56A14",justifyContent:"center",}}>
                        <FontAwesome5
                            name='pen'
                            size={13}
                            color={"white"}
                        />
                        </TouchableOpacity>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:13 ,fontWeight:"500",color:"black"}}>laksh kumar</Text>
                            <Text style={{fontSize:11 ,fontWeight:"500",color:"#D56A14"}}>lakshkumar123@gmail.com</Text>
                        </View>

                    </View>

                </View>
            )
        }
        function middlecontent(){
            return(
                <View style={{ paddingHorizontal:SCREEN_WIDTH*0.04,paddingVertical:SCREEN_HEIGHT*0.01}}>


                <TouchableOpacity 
                    onPress={()=> navigation.navigate('Gifts')}
                style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <FontAwesome6
                            name='gift'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Send Gift</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    onPress={()=> navigation.navigate('OrderHistory')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <MaterialCommunityIcons
                            name='message-text-clock'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Order History</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <MaterialCommunityIcons
                            name='message-text-clock'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Change Language</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                      onPress={()=> navigation.navigate('EorderHistory')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <FontAwesome6
                            name='building-columns'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>E-Order History</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    onPress={()=> navigation.navigate('Following')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <Ionicons
                            name='person-add-outline'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Following</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                       onPress={()=> navigation.navigate('HowtoUse')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <MaterialIcons
                            name='smartphone'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>


                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>How to use our App?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                       onPress={()=> navigation.navigate('CustomerTestimonials')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <MaterialCommunityIcons
                            name='account-group'
                            size={16}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Customers Testimonials</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      onPress={()=> navigation.navigate('ReferEarn')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <FontAwesome5
                            name='people-arrows'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Refer and Earn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={()=> navigation.navigate('HowtoUse')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <MaterialIcons
                            name='support-agent'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Help and Support</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                     onPress={()=> navigation.navigate('About')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <Entypo
                            name='info-with-circle'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>About AstroOne</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                     onPress={()=> navigation.navigate('Login')}
                    style={{flexDirection:"row",alignItems:"center",gap:15,paddingVertical:SCREEN_HEIGHT*0.01,borderBottomWidth:1,borderBottomColor:"gray",paddingHorizontal:SCREEN_WIDTH*0.04}}>
                    <View>
                    <Entypo
                            name='log-out'
                            size={15}
                            color={"#D56A14"}
                        />
                    </View>

                    <Text style={{fontSize:12,fontWeight:"500",color:"black"}}>Logout</Text>
                    </TouchableOpacity>

                </View>
            )
        }
        function BOTTOMCONTENT(){
            return(
                <View style={{paddingTop:SCREEN_HEIGHT*0.1}}>

                        <View style={{alignItems:"center"}}>
                                <Text style={{fontSize:18 ,color:"#D56A14",fontWeight:"500"}}>AstrOne</Text>
                        </View>

                        <View style={{alignItems:"center",gap:8}}>
                            <Text style={{fontWeight:"500",fontSize:11,color:"black"}}>Connect the cosmic dots</Text>
                            <Text style={{fontWeight:"500",fontSize:11,color:"black"}}>Folllow AstroOne for exclusive updates on:</Text>
                        </View>

                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:SCREEN_WIDTH*0.12}}>
                            <TouchableOpacity 
                                        onPress={() => Linking.openURL('https://www.facebook.com/')}
                            >
                                <Image 
                                style={{height:SCREEN_HEIGHT*0.06,width:SCREEN_WIDTH*0.12}}
                                source={require('../assets/images/faceBookL.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                               onPress={() => Linking.openURL('https://in.linkedin.com/')}
                            >
                                <Image 
                                style={{height:SCREEN_HEIGHT*0.1,width:SCREEN_WIDTH*0.12}}
                                source={require('../assets/images/LN.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.instagram.com/accounts/login/')}
                            >
                                <Image 
                                style={{height:SCREEN_HEIGHT*0.06,width:SCREEN_WIDTH*0.12}}
                                source={require('../assets/images/Instagram.png')}/>
                            </TouchableOpacity>
                        </View>


                </View>
        )}

        function myModal(){
            return(
                <Modal visible={true}>
                            <View style={{flex:1,backgroundColor: 'rgba(0, 0, 0, 0.5)',borderWidth:1,justifyContent:"center",alignItems:"center"}}>

                                <View style={{width:"80%",height:"20%",backgroundColor:"white",borderRadius:10 ,borderWidth:1}}>

                                            <View style={{alignItems:"center",paddingTop:SCREEN_HEIGHT*0.02}}>
                                                <Text style={{color:"#D56A14"}}>Change Language</Text>
                                            </View>

                        <View style={{gap:10,alignItems:"center",justifyContent:"center",paddingVertical:SCREEN_HEIGHT*0.02}}> 
                                            <View style={{flexDirection:"row",gap:5,alignItems:"center",justifyContent:"center"}}>
                                                <View style={{borderWidth:2,height:SCREEN_HEIGHT*0.02,width:SCREEN_WIDTH*0.04,borderRadius:100}}></View>
                                                <Text style={{color:"black",fontSize:12}}>Hindi</Text>
                                            </View>

                                            <View style={{flexDirection:"row",gap:5,alignItems:"center",justifyContent:"center"}}>
                                                <View style={{borderWidth:2,height:SCREEN_HEIGHT*0.02,width:SCREEN_WIDTH*0.04,borderRadius:100}}></View>
                                                <Text style={{color:"black",fontSize:12}}>English</Text>
                                            </View>
                     </View>                

                     <TouchableOpacity onPress={closeModal} style={{ alignSelf: 'center', paddingTop: SCREEN_HEIGHT * 0.01 }}>
                            <Text style={{ color: "#D56A14" }}>Close</Text>
                        </TouchableOpacity>

                                </View>


                            </View>

                </Modal>
            )
        }

       
}

export default DrawerContent

const styles = StyleSheet.create({})
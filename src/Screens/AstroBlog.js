import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import Homeheader from './Home/Homeheader';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Colors } from '../config/Style';

const AstroBlog = () => {
  const blogData = [
    { id: '1', image: require('../assets/images/youtube.png'), name: 'Blog Title 1' },
    { id: '2', image: require('../assets/images/Instagram.png'), name: 'Blog Title 2' },
    { id: '3', image: require('../assets/images/faceBookL.png'), name: 'Blog Title 3' },
  ];
  const renderCardItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <Homeheader title="Astro Blogs" />
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/images/youtube.png')} style={styles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/Instagram.png')} style={styles.iconButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/faceBookL.png')} style={styles.iconButton} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={blogData}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default AstroBlog;

const styles = StyleSheet.create({
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(6),
    paddingVertical: responsiveScreenHeight(2),
    backgroundColor: Colors.white,
  },
  iconButton: {
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(13),
    borderWidth: 1,
  },
  flatListContent: {
    padding: responsiveScreenWidth(2),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginBottom: responsiveScreenHeight(2),
    padding: responsiveScreenWidth(3),
    borderRadius: 8,
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  cardImage: {
    width: responsiveScreenWidth(22),
    height: responsiveScreenHeight(10),
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardText: {
    marginLeft: responsiveScreenWidth(4),
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
  },
});

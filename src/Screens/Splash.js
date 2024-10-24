import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/Style';
import Video from 'react-native-video';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 10000);
  }, [navigation]);

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor={Colors.primaryTheme} barStyle={'dark-content'} />
      <View style={styles.container}>
        <Video
          source={require('../assets/Videos/videoSplash.mp4')}
          style={styles.video}
          resizeMode="cover"
          // onEnd={() => navigation.replace('Login')}
          repeat={false} // Set this to true if you want the video to loop
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  video: {
    width: SCREEN_WIDTH * 1,
    height: SCREEN_HEIGHT * 1,
  },
});

export default Splash;

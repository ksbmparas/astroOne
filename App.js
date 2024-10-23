/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CountryPicker from 'react-native-country-picker-modal';
import { mainlogo, mainlogo2, mainlogo3, googlee, facebook } from '../javaproject/src/assets/images/Images';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Background Image */}
        <ImageBackground source={mainlogo} style={styles.topImage} resizeMode="cover">
          {/* Overlaying the logo image on top of the background */}
          <Image source={mainlogo2} style={styles.logoImage} />
        </ImageBackground>

        {/* Title */}
        <Text style={styles.titleText}>Login</Text>

        {/* Border Image */}
        <Image source={mainlogo3} style={styles.borderImage} />

        {/* Phone Input Field */}
        <View style={styles.inputContainer}>
          <CountryPicker
            countryCode="IN"
            withFlag
            withCallingCode
            onSelect={(country) => console.log(country)}
          />
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter Mobile Number"
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Astrologer Login Button */}
        <TouchableOpacity style={styles.astrologerLoginButton}>
          <Text style={styles.astrologerLoginText}>Astrologer Login</Text>
        </TouchableOpacity>

        {/* Social Media Login Section */}
        <View style={styles.socialMediaContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity>
            <Image source={googlee} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={facebook} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        {/* Bottom Section with Terms and Conditions */}
        <View style={styles.bottomContainer}>
          <Text style={styles.termsText}>By signing up you agree to our Terms & Conditions</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  topImage: {
    width: '100%',
    height: 300,
  },
  logoImage: {
    marginTop: -15,
    width: '100%',
    height: 500,
  },
  titleText: {
    marginTop: 150,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  borderImage: {
    width: 250,
    height: 50,
    marginTop: -10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    height: 55,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '90%',
  },
  phoneInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  loginButton: {
    marginTop: 15,
    backgroundColor: '#D66912',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  astrologerLoginButton: {
    marginTop: 15,
    backgroundColor: '#F0F0F0',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  astrologerLoginText: {
    color: '#D66912',
    fontSize: 18,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ded9fa',
  },
  orText: {
    fontSize: 11,
    color: '#b0acc2',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
  bottomContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#3d4147',
  },
});

export default App;

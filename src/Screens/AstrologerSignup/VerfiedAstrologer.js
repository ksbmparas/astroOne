import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, SCREEN_HEIGHT } from '../../config/Style'


const FormField = ({ label, value, onChangeText, placeholder, keyboardType }) => (
    <View style={styles.fieldContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
        />
    </View>
);

const VerfiedAstrologer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        address: '',
    });

    const formFields = [
        { key: 'name', label: 'Name', placeholder: 'Enter your name', keyboardType: 'default' },
        { key: 'email', label: 'Email', placeholder: 'Enter your email', keyboardType: 'email-address' },
        { key: 'age', label: 'Age', placeholder: 'Enter your age', keyboardType: 'numeric' },
        { key: 'address', label: 'Address', placeholder: 'Enter your address', keyboardType: 'default' },
    ];

    const handleInputChange = (key, value) => {
        setFormData(prevState => ({ ...prevState, [key]: value }));
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryTheme }}>
            <StatusBar backgroundColor={Colors.primaryTheme} barStyle={'dark-content'} />
            <View style={{paddingHorizontal:SCREEN_HEIGHT*0.04}}>
                <View style={{ marginTop: SCREEN_HEIGHT * 0.04}}>
                    <Text style={styles.txt}>Only For Astrologer</Text>
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={formFields}
                        renderItem={({ item }) => (
                            <FormField
                                label={item.label}
                                value={formData[item.key]}
                                placeholder={item.placeholder}
                                keyboardType={item.keyboardType}
                                onChangeText={(value) => handleInputChange(item.key, value)}
                            />
                        )}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={styles.flatListContent}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default VerfiedAstrologer

const styles = StyleSheet.create({
    txt: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 20
    },
    container: {
        backgroundColor: '#FFFFFF',
        padding: SCREEN_HEIGHT*0.03,
        borderRadius:20,
        marginTop:SCREEN_HEIGHT*0.02
      },
      flatListContent: {
        paddingBottom: 20,
      },
      fieldContainer: {
        marginBottom: 15,
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333333',
      },
      input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
      },
})
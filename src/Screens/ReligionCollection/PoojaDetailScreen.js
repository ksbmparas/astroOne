import { SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '../../config/Style';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const PoojaDetailScreen = ({ route, navigation }) => {
    const { image, name, price } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={image} style={styles.image} />
                <Text style={styles.name}>{name}</Text>

                <View style={styles.section}>
                    <Text style={styles.question}>Question 1</Text>
                    <Text style={styles.answer}>• Answer point 1</Text>
                    <Text style={styles.answer}>• Answer point 2</Text>
                    <Text style={styles.answer}>• Answer point 3</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.question}>Question 2</Text>
                    <Text style={styles.answer}>• Answer point 1</Text>
                    <Text style={styles.answer}>• Answer point 2</Text>
                    <Text style={styles.answer}>• Answer point 3</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.question}>Question 3</Text>
                    <Text style={styles.answer}>• Answer point 1</Text>
                    <Text style={styles.answer}>• Answer point 2</Text>
                    <Text style={styles.answer}>• Answer point 3</Text>
                </View>
            </ScrollView>


            <View style={styles.buttonContainer}>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={{}}>Payable Amount</Text>
                </View>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PoojaDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    image: {
        width: '100%',
        height: responsiveScreenHeight(30),
        resizeMode: 'cover',
    },
    name: {
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center',
        marginVertical: responsiveScreenHeight(1),
    },
    price: {
        fontSize: responsiveScreenFontSize(2),
        color: Colors.black,
        textAlign: 'center',
        fontWeight:'bold'
    },
    section: {
        marginHorizontal: responsiveScreenWidth(5),
        marginBottom: responsiveScreenHeight(2),
    },
    question: {
        fontSize: responsiveScreenFontSize(2),
        fontWeight: 'bold',
        color: Colors.black,
    },
    answer: {
        fontSize: responsiveScreenFontSize(1.8),
        color: Colors.gray,
        marginVertical: responsiveScreenHeight(0.5),
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: responsiveScreenHeight(2),
        alignItems: 'center',
    },
    bookButton: {
        backgroundColor: Colors.primaryTheme,
        paddingVertical: responsiveScreenHeight(0.8),
        paddingHorizontal: responsiveScreenWidth(12),
        borderRadius: 10,
    },
    bookButtonText: {
        color: Colors.white,
        fontSize: responsiveScreenFontSize(2),
    },
});

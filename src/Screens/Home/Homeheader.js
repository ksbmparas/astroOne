import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Style';


const Homeheader = ({ title = "AstroOne" }) => {
    return (
        <View>
            {myheader()}
        </View>
    );

    function myheader() {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.leftSection}>
                    <TouchableOpacity>
                        <FontAwesome
                            name="bars"
                            size={25}
                            color="black"
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.headerTitle}>{title}</Text>
                    </View>
                </View>

                <View style={styles.rightSection}>
                    <TouchableOpacity>
                        <FontAwesome
                            name="bell-o"
                            size={23}
                            color={Colors.primaryTheme}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.walletContainer}>
                        <View style={styles.walletContent}>
                            <View style={styles.walletIconContainer}>
                                <Ionicons
                                    name="wallet-outline"
                                    size={17}
                                    color={Colors.primaryTheme}
                                />
                            </View>
                            <Text style={styles.walletText}>₹ 0.00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

export default Homeheader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SCREEN_HEIGHT * 0.015,
        backgroundColor: Colors.white,
        paddingHorizontal: SCREEN_WIDTH * 0.015,
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    headerTitle: {
        color: "black",
        fontSize: 20,
        fontWeight: "500",
    },
    rightSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    walletContainer: {
        borderWidth: 1,
        borderRadius: 100,
        paddingVertical: SCREEN_HEIGHT * 0.002,
        paddingHorizontal: SCREEN_WIDTH * 0.01,
        borderColor:Colors.primaryTheme,
    },
    walletContent: {
        flexDirection: "row",
        gap: 5,
    },
    walletIconContainer: {
        borderWidth: 1,
        borderRadius: 100,
        padding: 2,
        alignItems: "center",
        borderColor:Colors.primaryTheme,
    },
    walletText: {
        color:Colors.primaryTheme,
    },
});

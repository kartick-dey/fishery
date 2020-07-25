import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';

import LinarGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor='#ccc' barStyle='dark-content'></StatusBar>
            <View style={styles.container}>
                <LinarGradient colors={['#ccc', '#43D4FF', '#43BFC7', '#43BFC7']} style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <View style={styles.imageContainer}>
                            <Animatable.Image
                                animation="bounceIn"
                                duraton="150"
                                source={require('../assets/appIcon.png')}
                                style={styles.logo}
                                resizeMode="stretch" />
                        </View>
                        <Text style={[styles.textHeader, { color: '#05375a', fontWeight: 'bold', fontSize: 35 }]}>Welcome to Fish Market</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={styles.footer}>
                        <Text style={styles.title}>Stay connected with everyone!</Text>
                        <Text>Sign in with account</Text>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { navigation.navigate("LoginScreen") }}>
                                <LinarGradient
                                    colors={['#43BFC7', '#43BFC7']}
                                    style={styles.signIn}>
                                    <Text style={styles.textSign}>Get Started</Text>
                                    <MaterialIcons name="navigate-next" color="#fff" size={20}></MaterialIcons>
                                </LinarGradient>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </LinarGradient>
            </View>
        </>
    );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#ccc',
        borderRadius: 30,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        marginBottom: 20
    },
    textHeader: {
        padding: 50,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    imageContainer: {
        width: height_logo,
        height: height_logo,
        borderWidth: 2,
        fontStyle: "italic",
        // borderColor: 'black',
        borderRadius: 90,
    },
    logo: {
        width: height_logo,
        height: height_logo,
        // backgroundColor: '#ccc'
    },
    title: {
        color: '#05375a',
        fontSize: 35,
        fontWeight: 'bold'
    },
    text: {
        color: 'gray',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default WelcomeScreen;
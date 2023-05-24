import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';



const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={30} color="#666" style={styles.icon} />
                    <TextInput
                        placeholder="Email ID"
                        style={styles.input}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="ios-lock-closed-outline" size={30} color="#666" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.loginText}>Forgot</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.secondaryText}>Or, login with ...</Text>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                        <Image source={require('../assets/images/misc/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                        <Image source={require('../assets/images/misc/facebook.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={() => { }}>
                        <Image source={require('../assets/images/misc/apple.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.registerContainer}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    contentContainer: {
        marginHorizontal: 25,
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 1,
        paddingVertical: 0,
    },
    buttonContainer: {
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
    },
    loginText: {
        color: '#AD40DF',
        fontWeight: '700',
    },
    secondaryText: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 25,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    socialButton: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    registerText: {
        color: '#AD40AF',
        fontWeight: '700',
    },
});
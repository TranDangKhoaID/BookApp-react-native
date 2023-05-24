import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';



const RegisterScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.title}>Register</Text>
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="person" size={30} color="#666" style={styles.icon} />
                    <TextInput placeholder="Full Name" style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="phone" size={30} color="#666" style={styles.icon} />
                    <TextInput placeholder="Phone" style={styles.input} keyboardType="numeric" />
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
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="ios-lock-closed-outline" size={30} color="#666" style={styles.icon} />
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.loginContainer}>
                    <Text>Already registered</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.loginText}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen

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
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    loginText: {
        color: '#AD40AF',
        fontWeight: '700',
    },
});
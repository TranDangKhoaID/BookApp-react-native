import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleRegister = () => {
        // Kiểm tra nếu mật khẩu và xác nhận mật khẩu không khớp
        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match');
            return;
        }

        // Gửi yêu cầu đăng ký đến API
        // Sử dụng các giá trị fullName, phone, email, password để gửi đi

        fetch('http://192.168.1.7:3000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: fullName,
                email,
                password,
                phone,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Registration successful');
                    // Chuyển hướng đến màn hình Đăng nhập
                    navigation.goBack();
                } else {
                    alert('Registration failed: ' + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Registration failed');
            });
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.title}>Register</Text>
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="person" size={30} color="#666" style={styles.icon} />
                    <TextInput 
                        placeholder="Full Name" 
                        style={styles.input}
                        value={fullName}
                        onChangeText={setFullName}
                     />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="phone" size={30} color="#666" style={styles.icon} />
                    <TextInput 
                        placeholder="Phone" 
                        style={styles.input} 
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={setPhone}
                     />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={30} color="#666" style={styles.icon} />
                    <TextInput
                        placeholder="Email ID"
                        style={styles.input}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="ios-lock-closed-outline" size={30} color="#666" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="ios-lock-closed-outline" size={30} color="#666" style={styles.icon} />
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.input}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
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
        backgroundColor: '#309CFF',
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
        color: '#309CFF',
        fontWeight: '700',
    },
});
import React, { useEffect, useState } from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Title, Caption, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as SecureStore from 'expo-secure-store';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  //lấy thông tin user đã đăng nhập
  useEffect(() => {
    SecureStore.getItemAsync('userData')
      .then(userData => {
        if (userData) {
          const parsedUserData = JSON.parse(userData);
          setUser(parsedUserData);
        }
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });
  }, []);
  //đăng xuất
  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('userData'); // Xóa thông tin người dùng khỏi SecureStore
      navigation.navigate('Login'); // Điều hướng đến màn hình đăng nhập
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {user && (
        <View style={styles.userInforSection}>
          <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15 }}>
            <Image 
                source={require('../assets/images/profile/avatar.jpg')}
                style={{height: 80, width: 80, borderRadius: 40, marginRight: 20}}
            />  
            <View>
              <Title
                style={[styles.title, {
                  marginTop: 15,
                  marginBottom: 5,
                }]}
              >{user.name}</Title>
              
            </View> 
          </View>  
          <View style={styles.userInforSection}>
            <View style={styles.row}>
              <Icon name="phone" size={20} style={{color:'#777777'}}/>
              <Text style={{color: '#777777', marginLeft: 20}}>{user.phone}</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" size={20} style={{color:'#777777'}}/>
              <Text style={{color: '#777777', marginLeft: 20}}>{user.email}</Text>
            </View>
          </View>    
        </View>
      )}
      <TouchableOpacity onPress={handleLogout} style={styles.btnLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
  },
  btnLogout:{
    backgroundColor: '#309CFF',
    padding: 10,
    borderRadius: 10,
    marginVertical: 30,
  }
})
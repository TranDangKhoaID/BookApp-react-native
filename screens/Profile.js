import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user && (
        <View>
          <Text>Họ tên: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Số điện thoại: {user.phone}</Text>
        </View>
      )}
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

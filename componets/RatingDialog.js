import React, { useState } from 'react';
import {StyleSheet, View, Alert,TouchableOpacity,Image, Text } from 'react-native';
import Dialog from "react-native-dialog";
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingDialog = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? 'star' : 'star-o'}
          size={30}
          style={{ color: '#FFD700', marginRight: 5 }}
          onPress={() => setRating(i)}
        />
      );
    }
    return stars;
  };
  const handleRate = () => {
    // Lưu giá trị đánh giá (rating) vào cơ sở dữ liệu hoặc thực hiện các xử lý khác
    setDialogVisible(false);
    console.log(rating)
    Alert.alert("Cảm ơn bạn đã đánh giá!");
  };

  return (
    <View>
        <TouchableOpacity  onPress={showDialog} style={styles.button_td}>
            <Image source={require('../assets/books/theodoi.png')} style={{ marginBottom: 5 }} />
            <Text style={{ color: '#000' }}>Đánh giá</Text>
        </TouchableOpacity>
        <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Đánh giá ứng dụng</Dialog.Title>
        <Dialog.Description>
          Chọn số sao bạn muốn đánh giá cho ứng dụng này:
        </Dialog.Description>
        <Dialog.Button label="Hủy" onPress={handleCancel} />
        <Dialog.Button label="Đánh giá" onPress={handleRate} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          {renderStars()}
        </View>
      </Dialog.Container>
    </View>
  );
};

export default RatingDialog;

const styles = StyleSheet.create({
    button_td: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#82DDFA'
    },
})
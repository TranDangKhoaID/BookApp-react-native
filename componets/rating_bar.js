import React from 'react';
import {StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RatingBar = ({ totalStars, defaultRating }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(defaultRating); // Số ngôi sao đầy đủ
    const hasHalfStar = defaultRating % 1 !== 0; // Kiểm tra xem có nửa ngôi sao hay không

    for (let i = 1; i <= totalStars; i++) {
      let starIconName = 'star-o';

      if (i <= fullStars) {
        starIconName = 'star';
      } else if (i === fullStars + 1 && hasHalfStar) {
        starIconName = 'star-half-o';
      }

      stars.push(
        <FontAwesome key={i} name={starIconName} size={20} color="gold" />
      );
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default RatingBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});



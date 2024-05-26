import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const RainbowLine = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Rectangle 7.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 12
  },
  image: {
    width: '100%',
  },
});

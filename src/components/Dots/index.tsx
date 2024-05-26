import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Dots = () => {
  return (
    <View style={styles.container}>
        <View style={styles.redLine}/>
        <View style={styles.dot}/>
        <View style={styles.dot}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    marginTop: 30,
    flexDirection: 'row',
    gap: 8
  },
  redLine: {
    width: 40,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'grey',
    borderRadius: 50,
  }
});

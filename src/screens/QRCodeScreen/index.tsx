import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QrCodeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <View>
          <Text>QRCode Screen</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QrCodeScreen;

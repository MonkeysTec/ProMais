import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../context/LoginContext';
import { CameraView, useCameraPermissions } from 'expo-camera';

const QRCodeScreen: React.FC = () => {

  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string>('');
  const { user, login, logout } = useAuth();
  const [permission, requestPermission] = useCameraPermissions();

  const handleBarCodeScanned = async ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    setData(data);
      try {
        try {
          const response = await api.put(`/qrcodes/v1/beep/${data}`);
          console.log(response.data);
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      } catch (error) {
        console.log(error)
      }
  };


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodeBox}>
        <CameraView
       onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        />
        
      </View>
      {scanned && <Button title={'Toque para escanear novamente'} onPress={() => setScanned(false)} />}
      <Text>{scanned ? data : 'Codigo não escaneado'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcodeBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
});

export default QRCodeScreen;

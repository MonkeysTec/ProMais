import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import api from '../../services/api';
import { useAuth } from '../../context/LoginContext';

const QRCodeScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string>('');
  const { user, login, logout } = useAuth();
  console.log(user)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  const handleBarCodeScanned = async ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    setData(data);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': user,
    };
      try {
        try {
          const response = await api.put(`/qrcodes/v1/beep/${data}`, {
            headers: {
              'Authorization': user
            },
            withCredentials: true // Habilita o envio de cookies
          });
      
          console.log(response.data);
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      } catch (error) {
        console.log(error)
      }
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para usar a câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodeBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {scanned && <Button title={'Toque para escanear novamente'} onPress={() => setScanned(false)} />}
      <Text>{data}</Text>
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

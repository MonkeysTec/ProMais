import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as S from './styles';

const QRCodeScreen: React.FC = () => {
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string>("");
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useNavigation();

  const handleBarCodeScanned = async ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setData(data);
    try {
      try {
        const response = await api.put(`/qrcodes/v1/beep/${data}`);

        if (response.data) {
          setScanned(false);
          navigation.navigate("QrCodeAfter");
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!permission) {
   
    return <View />;
  }

  if (!permission.granted) {
    
    return (
      <S.Container>
      <S.PermissionText>
        Nós precisamos de permissão para usar a câmera.
      </S.PermissionText>
      <Button onPress={requestPermission} title="Dar permissão" />
    </S.Container>
    );
  }

  return (
    <S.Container>
      <S.BarcodeBox>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </S.BarcodeBox>
      {scanned && (
        <Button
          title={"Toque para escanear novamente"}
          onPress={() => setScanned(false)}
        />
      )}
    </S.Container>
  );
};

export default QRCodeScreen;

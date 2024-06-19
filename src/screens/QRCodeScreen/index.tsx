import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

const QRCodeScreen: React.FC = () => {
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string>("");
  const { user, login, logout } = useAuth();
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
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Nós precisamos de permissão para usar a camera.
        </Text>
        <Button onPress={requestPermission} title="Dar permissão" />
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
      {scanned && (
        <Button
          title={"Toque para escanear novamente"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  barcodeBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});

export default QRCodeScreen;

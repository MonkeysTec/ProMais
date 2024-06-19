import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Fontisto from "@expo/vector-icons/Fontisto";

const QrCodeScreenBefore: React.FC = () => {
  const navigation = useNavigation();

  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [canSkip, setCanSkip] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      if (dontShowAgain === true && canSkip === true) {
        navigation.navigate("QRCodeRead");
      }
      return () => {};
    }, [dontShowAgain, canSkip]),
  );

  return (
    <>
      <RainbowLine />
      <SafeAreaView />
      {dontShowAgain === false || canSkip === false ? (
        <View style={styles.container}>
          <View style={styles.insideContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
                onPress={() => navigation.navigate("Home")}
              >
                <Ionicons name={"arrow-back"} size={30} color={"#374649"} />
                <Text
                  style={{ fontWeight: "700", color: "black", fontSize: 20 }}
                >
                  Home
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                height: "100%",
                marginTop: 50,
                alignItems: "center",
                gap: 20,
              }}
            >
              <Image
                source={require("../../assets/QrCodeTutorial.png")}
                style={{ width: 230, height: 230 }}
              />
              <Text style={{ fontSize: 16 }}>
                Use a câmera do seu smartphone para escanear o QR Code presente
                na embalagem.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setDontShowAgain(!dontShowAgain);
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  {dontShowAgain ? (
                    <Fontisto name="checkbox-active" size={24} color="black" />
                  ) : (
                    <Fontisto name="checkbox-passive" size={24} color="black" />
                  )}
                  <Text>Não mostrar isso novamente</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCanSkip(true);
                  navigation.navigate("QRCodeRead");
                }}
                style={styles.joinButton}
              >
                <Text style={styles.joinText}>Escanear QR Code!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    top: 28,
  },

  insideContainer: {
    width: "100%",
    padding: 50,
  },
  joinButton: {
    backgroundColor: "#85d151",
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#85d151",
    marginTop: 20,
  },
  joinText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default QrCodeScreenBefore;

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
import { MaterialIcons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useAuth } from "../../context/LoginContext";
import api from "../../services/api";
import ProfileScreen from "../Profile";

const QrCodeScreenAfter: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.insideContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            onPress={() => {}}
          >
            <AntDesign name="checkcircle" size={55} color="#85D151" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "800", fontSize: 35, color: "#85D151" }}>
          Parabens!
        </Text>
        <Text style={{ fontWeight: "600", fontSize: 26, color: "#85D151" }}>
          Codigo Escaneado com sucesso
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.joinButton}
        >
          <Text style={styles.joinText}>Voltar para a home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("QRCodeRead");
          }}
          style={styles.joinButton}
        >
          <Text style={styles.joinText}>Ler outro codigo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },

  insideContainer: {
    width: "100%",
    padding: 50,
  },
  joinButton: {
    backgroundColor: "#85d151",
    width: 200,
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

export default QrCodeScreenAfter;

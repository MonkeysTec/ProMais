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

const ProfileScreen: React.FC = () => {
  const { userName, logout } = useAuth();
  const navigation = useNavigation();
  const loadInBrowser = (url: any) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        <View style={styles.headerProfile}>
          <View>
            <Text style={{ color: "red", fontSize: 24, fontWeight: "600" }}>
              {userName}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.headerProfile} onPress={() => {}}>
              <View
                style={{
                  backgroundColor: "#85d151",
                  width: 66,
                  height: 66,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                }}
              >
                <Ionicons name="person-outline" size={35} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View style={{ paddingHorizontal: 40, gap: 15, marginBottom: 20 }}>
          <Text style={{ color: "black", fontWeight: "600" }}>Ajuda</Text>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => {
              navigation.navigate("ProfileConfig");
            }}
          >
            <View style={styles.iconView}>
              <Octicons name="gear" size={20} color="white" />
            </View>
            <Text>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => navigation.navigate("FAQ")}
          >
            <View style={styles.iconView}>
              <Ionicons name="chatbox-outline" size={20} color="white" />
            </View>
            <Text>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <View style={styles.iconView}>
              <FontAwesome5 name="headset" size={20} color="white" />
            </View>
            <Text>Fale conosco</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => {
              loadInBrowser(
                "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult"
              );
            }}
          >
            <View style={styles.iconView}>
              <Feather name="droplet" size={24} color="white" />
            </View>
            <Text>LubConsult</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => {
              loadInBrowser(
                "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult"
              );
            }}
          >
            <View style={styles.iconView}>
              <View style={{ alignItems: "center", width: 24, height: 12 }}>
                <Image
                  source={require("../../assets/IconTotalEnergies.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    filter: "invert(1)",
                    tintColor: "rgba(255, 255, 255, 1)",
                  }}
                />
              </View>
            </View>
            <Text>Conheça Total Energies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => navigation.navigate("Distributors")}
          >
            <View style={styles.iconView}>
              <FontAwesome6 name="users" size={20} color="white" />
            </View>
            <Text>Distribuidores participantes</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 40, gap: 15 }}>
          <Text style={{ color: "black", fontWeight: "600" }}>
            Termos de uso
          </Text>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => navigation.navigate("Rules")}
          >
            <View style={styles.iconView}>
              <Feather name="book" size={20} color="white" />
            </View>
            <Text>Regras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableBody}
            onPress={() => navigation.navigate("Terms")}
          >
            <View style={styles.iconView}>
              <AntDesign name="bars" size={20} color="white" />
            </View>
            <Text>Políticas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#85d151",
              width: "100%",
              marginTop: 20,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={logout}
          >
            <Text style={{ fontWeight: "700", color: "white" }}>
              Sair dessa conta
            </Text>
          </TouchableOpacity>
        </View>
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
  touchableBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  iconView: {
    backgroundColor: "#85d151",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default ProfileScreen;

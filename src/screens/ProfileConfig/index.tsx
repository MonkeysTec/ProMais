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
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";

const ProfileConfigScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user, userName, login, logout } = useAuth();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
          style={styles.backContainer}
        >
          <Ionicons name={"arrow-back"} size={31} color={"black"} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "red", fontSize: 24, fontWeight: "600" }}>
              {userName}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              onPress={() => {}}
            >
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
        <View style={{ paddingHorizontal: 40, gap: 20, marginBottom: 20 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            onPress={() => {
              navigation.navigate("ChangePassword");
            }}
          >
            <View
              style={{
                backgroundColor: "#85d151",
                width: 44,
                height: 44,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <MaterialIcons name="lock" size={30} color="white" />
            </View>
            <Text style={{ fontSize: 20 }}>Redefinir senha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            onPress={logout}
          >
            <View
              style={{
                backgroundColor: "#85d151",
                width: 44,
                height: 44,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <MaterialIcons name="person-off" size={30} color="white" />
            </View>
            <Text style={{ fontSize: 20 }}>Desativar minha conta</Text>
          </TouchableOpacity>
        </View>

        <View></View>
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
  backContainer: {
    marginBottom: 30,
  },

  insideContainer: {
    width: "100%",
    padding: 50,
  },
});

export default ProfileConfigScreen;

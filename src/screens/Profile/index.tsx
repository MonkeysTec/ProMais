import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

const ProfileScreen: React.FC = () => {
  const { userName, logout } = useAuth();
  const navigation = useNavigation();
  const loadInBrowser = (url: any) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <View style={stylesDefault.container}>
    <SafeAreaView />
    <View style={stylesDefault.insideContainer}>
      <View style={stylesDefault.headerProfile}>
        <View>
          <Text style={{ ...stylesDefault.RedViewSecondText, fontSize: 24 }}>
            {userName}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}} style={stylesDefault.headerProfile}>
            <View style={stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151}>
              <Ionicons name="person-outline" size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 40, gap: 15, marginBottom: 20 }}>
          <Text style={{ ...stylesDefault.SmallText_Black_30_600, marginBottom: 10 }}>Ajuda</Text>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() => navigation.navigate("ProfileConfig")}
          >
            <View style={stylesDefault.iconView}>
              <Octicons name="gear" size={20} color="white" />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() => navigation.navigate("FAQ")}
          >
            <View style={stylesDefault.iconView}>
              <Ionicons name="chatbox-outline" size={20} color="white" />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <View style={stylesDefault.iconView}>
              <FontAwesome5 name="headset" size={20} color="white" />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>Fale conosco</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() =>
              loadInBrowser(
                "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult"
              )
            }
          >
            <View style={stylesDefault.iconView}>
              <Feather name="droplet" size={24} color="white" />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>LubConsult</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() =>
              loadInBrowser(
                "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult"
              )
            }
          >
            <View style={stylesDefault.iconView}>
              <Image
                source={require("../../assets/IconTotalEnergies.png")}
                style={{
                  width: 24,
                  height: 12,
                  filter: "invert(1)",
                  tintColor: "rgba(255, 255, 255, 1)",
                }}
              />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>
              Conheça Total Energies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() => navigation.navigate("Distributors")}
          >
            <View style={stylesDefault.iconView}>
              <FontAwesome6 name="users" size={20} color="white" />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>
              Distribuidores participantes
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 40, gap: 15 }}>
          <Text style={{ ...stylesDefault.SmallText_Black_30_600, marginBottom: 10 }}>Termos de uso</Text>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() => navigation.navigate("Rules")}
          >
            <View style={stylesDefault.iconView}>
              <Feather name="book" size={20} color="white" />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>Regras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesDefault.touchableBody}
            onPress={() => navigation.navigate("Terms")}
          >
            <View style={stylesDefault.iconView}>
              <AntDesign name="bars" size={20} color="white" />
            </View>
            <Text style={stylesDefault.SmallText_Black_18_600}>Políticas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...stylesDefault.confirmButton,
              backgroundColor: "#85d151",
              marginTop: 20,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={logout}
          >
            <Text style={stylesDefault.confirmButtonText}>Sair dessa conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

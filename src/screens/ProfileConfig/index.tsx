import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,

} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

const ProfileConfigScreen: React.FC = () => {
  const navigation = useNavigation();
  const { userName, logout } = useAuth();

  return (
    <View style={stylesDefault.container}>
    <SafeAreaView />
    <RainbowLine /> {/* Assuming RainbowLine is a custom component */}
    <View style={stylesDefault.insideContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
        style={stylesDefault.backContainer}
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
          <Text style={stylesDefault.headerProfileText}>{userName}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={stylesDefault.headerProfileButton}
            onPress={() => {}}
          >
            <View style={stylesDefault.iconContainer}>
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
          <View style={stylesDefault.lockIcon}>
            <MaterialIcons name="lock" size={30} color="white" />
          </View>
          <Text style={stylesDefault.profileSettingsText}>Redefinir senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={logout}
        >
          <View style={stylesDefault.lockIcon}>
            <MaterialIcons name="person-off" size={30} color="white" />
          </View>
          <Text style={stylesDefault.profileSettingsText}>Desativar minha conta</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  </View>
  );
};

export default ProfileConfigScreen;

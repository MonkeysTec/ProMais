import React from "react";
import { SafeAreaView, Linking, View, Image } from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { MaterialIcons, Octicons, Ionicons, FontAwesome5, Feather, AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/LoginContext";
import * as S from './styles';

const ProfileScreen: React.FC = () => {
  const { userName, logout } = useAuth();
  const navigation = useNavigation();
  const loadInBrowser = (url: any) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <S.Container>
      <SafeAreaView />
      <RainbowLine />
      <S.InsideContainer>
        <S.HeaderProfile>
          <S.UserNameText>{userName}</S.UserNameText>
          <S.AvatarButton onPress={() => {}}>
            <Ionicons name="person-outline" size={35} color="white" />
          </S.AvatarButton>
        </S.HeaderProfile>
      </S.InsideContainer>
      <View style={{ flexDirection: "column" }}>
        <View style={{ paddingHorizontal: 40, gap: 15, marginBottom: 20 }}>
          <S.SectionTitle>Ajuda</S.SectionTitle>
          <S.TouchableBody onPress={() => navigation.navigate("ProfileConfig")}>
            <S.IconView>
              <Octicons name="gear" size={20} color="white" />
            </S.IconView>
            <S.OptionText>Configurações</S.OptionText>
          </S.TouchableBody>
          <S.TouchableBody onPress={() => navigation.navigate("FAQ")}>
            <S.IconView>
              <Ionicons name="chatbox-outline" size={20} color="white" />
            </S.IconView>
            <S.OptionText>FAQ</S.OptionText>
          </S.TouchableBody>
          <S.TouchableBody onPress={() => navigation.navigate("ContactUs")}>
            <S.IconView>
              <FontAwesome5 name="headset" size={20} color="white" />
            </S.IconView>
            <S.OptionText>Fale conosco</S.OptionText>
          </S.TouchableBody>
          <S.TouchableBody onPress={() => loadInBrowser("https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult")}>
            <S.IconView>
              <Feather name="droplet" size={24} color="white" />
            </S.IconView>
            <S.OptionText>LubConsult</S.OptionText>
          </S.TouchableBody>
          <S.TouchableBody onPress={() => loadInBrowser("https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult")}>
            <S.IconView>
              <View style={{ alignItems: "center", width: 24, height: 12 }}>
                <Image
                  source={require("../../assets/IconTotalEnergies.png")}
                  style={{ width: "100%", height: "100%", filter: "invert(1)", tintColor: "rgba(255, 255, 255, 1)" }}
                />
              </View>
            </S.IconView>
            <S.OptionText>Conheça Total Energies</S.OptionText>
          </S.TouchableBody>
          <S.TouchableBody onPress={() => navigation.navigate("Distributors")}>
            <S.IconView>
              <FontAwesome6 name="users" size={20} color="white" />
            </S.IconView>
            <S.OptionText>Distribuidores participantes</S.OptionText>
          </S.TouchableBody>
        </View>
        <View style={{ paddingHorizontal: 40, gap: 15 }}>
          <S.SectionTitle>Termos de uso</S.SectionTitle>
          <S.TouchableBody onPress={() => navigation.navigate("Rules")}>
            <S.IconView>
              <Feather name="book" size={20} color="white" />
            </S.IconView>
            <S.OptionText>Regras</S.OptionText>
          </S.TouchableBody>
          <S.TouchableBody onPress={() => navigation.navigate("Terms")}>
            <S.IconView>
              <AntDesign name="bars" size={20} color="white" />
            </S.IconView>
            <S.OptionText>Políticas</S.OptionText>
          </S.TouchableBody>
          <S.LogoutButton onPress={logout}>
            <S.LogoutButtonText>Sair dessa conta</S.LogoutButtonText>
          </S.LogoutButton>
        </View>
      </View>
    </S.Container>
  );
};

export default ProfileScreen;
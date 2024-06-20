import React from "react";
import { SafeAreaView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RainbowLine } from "../../components/RainbowLine";
import { useAuth } from "../../context/LoginContext";
import * as S from './styles';

const ProfileConfigScreen: React.FC = () => {
  const navigation = useNavigation();
  const { userName, logout } = useAuth();

  return (
    <S.Container>
      <SafeAreaView />
      <RainbowLine />
      <S.InsideContainer>
        <S.BackContainer onPress={() => navigation.navigate("Profile")}>
          <Ionicons name={"arrow-back"} size={31} color={"black"} />
        </S.BackContainer>
        <S.HeaderContainer>
          <S.UserNameText>{userName}</S.UserNameText>
          <S.AvatarButton onPress={() => {}}>
            <S.AvatarContainer>
              <Ionicons name="person-outline" size={35} color="white" />
            </S.AvatarContainer>
          </S.AvatarButton>
        </S.HeaderContainer>
      </S.InsideContainer>
      <S.OptionsContainer>
        <S.OptionButton onPress={() => navigation.navigate("ChangePassword")}>
          <S.OptionIconContainer>
            <MaterialIcons name="lock" size={30} color="white" />
          </S.OptionIconContainer>
          <S.OptionText>Redefinir senha</S.OptionText>
        </S.OptionButton>
        <S.OptionButton onPress={logout}>
          <S.OptionIconContainer>
            <MaterialIcons name="person-off" size={30} color="white" />
          </S.OptionIconContainer>
          <S.OptionText>Desativar minha conta</S.OptionText>
        </S.OptionButton>
      </S.OptionsContainer>
    </S.Container>
  );
};

export default ProfileConfigScreen;
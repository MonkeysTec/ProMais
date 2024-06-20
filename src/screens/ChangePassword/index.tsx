import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import * as S from './styles';

const ChangePassword = () => {
  const [step, setStep] = useState(1);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigation = useNavigation();

  const handleNext = async () => {
    if (newPassword === confirmNewPassword) {
      try {
        const dataPassword = {
          password: oldPassword,
        };
        const { data } = await api.post("/users/system/check/password/v1", dataPassword);

        if (data) {
          try {
            const newDataPassword = {
              newPassword,
            };
            console.log("Sua senha antiga confere, trocando para a nova...");

            const { data } = await api.post("/users/system/password/change/online/v1", newDataPassword);

            if (data) {
              console.log("Senha trocada com sucesso!");
            } else {
              console.log("Essa não é sua senha antiga");
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("Essa não é sua senha antiga");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Novas senhas não conferem");
    }
  };

  const handleBack = () => {
    navigation.navigate("ProfileConfig");
  };

  return (
    <S.Container>
      <SafeAreaView />
      <RainbowLine />
      <S.InsideContainer>
        <TouchableOpacity onPress={handleBack} style={styles.backContainer}>
          <Ionicons name={"arrow-back"} size={31} color={"black"} />
        </TouchableOpacity>
        {step === 1 && (
          <>
            <S.Title>Alterar senha</S.Title>
            <S.InputContainer>
              <S.Input
                onChangeText={(value) => setOldPassword(value)}
                placeholder="Insira sua senha atual"
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(value) => setNewPassword(value)}
                placeholder="Insira sua nova senha"
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(value) => setConfirmNewPassword(value)}
                placeholder="Confirme sua senha"
              />
            </S.InputContainer>
            <S.JoinButton onPress={handleNext}>
              <S.JoinText>Finalizar</S.JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </S.JoinButton>
          </>
        )}
        {step === 2 && (
          <>
            <View>
              <S.FinishTitle>Pronto!</S.FinishTitle>
              <S.ContactTextBlack>Sua senha foi alterada com sucesso!</S.ContactTextBlack>
              <S.ContactTextBlack>Acesse agora mesmo...</S.ContactTextBlack>
              <S.JoinButton onPress={handleNext}>
                <S.JoinText>Entrar</S.JoinText>
                <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
              </S.JoinButton>
            </View>
          </>
        )}
        <S.ContactContainer>
          <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
          <View>
            <S.ContactTextBlack>Não consegue acessar?</S.ContactTextBlack>
            <S.ContactTextRed>Entre em contato conosco</S.ContactTextRed>
          </View>
        </S.ContactContainer>
        <S.Image source={require("../../assets/© TotalEnergies - 2023.png")} />
      </S.InsideContainer>
    </S.Container>
  );
};

const styles = {
  backContainer: {
    marginTop: 50,
    justifyContent: "space-between",
    height: "auto",
  },
};

export default ChangePassword;
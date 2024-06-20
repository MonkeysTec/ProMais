import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as S from './styles';

const Forgot: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
    if (step === 3) navigation.replace("Login");
  };

  const handleBack = () => {
    setStep(step - 1);
    if (step === 1) navigation.replace("Start");
  };

  return (
    <S.Container>
      <SafeAreaView />
      <RainbowLine />
      <S.InsideContainer>
        <S.BackContainer onPress={handleBack}>
          {step === 3 ? (
            <AntDesign name={"checkcircle"} size={50} color={"#85d151"} />
          ) : (
            <Ionicons name={"arrow-back"} size={31} color={"#d9d9d9"} />
          )}
        </S.BackContainer>
        {step === 1 && (
          <>
            <S.Title>Esqueci minha senha</S.Title>
            <S.InputContainer>
              <S.Input placeholder="Insira seu e-mail" />
            </S.InputContainer>
            <S.JoinButton onPress={handleNext}>
              <S.JoinText>Próximo</S.JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </S.JoinButton>
          </>
        )}
        {step === 2 && (
          <>
            <S.Title>Cadastre sua nova senha</S.Title>
            <S.InputContainer>
              <S.Input placeholder="Nova senha" />
            </S.InputContainer>
            <S.InputContainer>
              <S.Input placeholder="Repita a nova senha" />
            </S.InputContainer>
            <S.JoinButton onPress={handleNext}>
              <S.JoinText>Enviar</S.JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </S.JoinButton>
          </>
        )}
        {step === 3 && (
          <>
            <View>
              <S.FinishTitle>Pronto!</S.FinishTitle>
              <S.ContactTextBlack>
                Sua senha foi trocada com sucesso!
              </S.ContactTextBlack>
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
        <S.ImageStyled source={require("../../assets/© TotalEnergies - 2023.png")} />
      </S.InsideContainer>
    </S.Container>
  );
};

export default Forgot;
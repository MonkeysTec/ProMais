import React from "react";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as S from './styles';

const QrCodeScreenAfter: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <SafeAreaView />
      <S.InsideContainer>
        <S.CheckIconContainer onPress={() => {}}>
          <AntDesign name="checkcircle" size={55} color="#85D151" />
        </S.CheckIconContainer>
        <S.CongratulationsText>Parabéns!</S.CongratulationsText>
        <S.SuccessText>Código Escaneado com sucesso</S.SuccessText>
        <S.JoinButton onPress={() => navigation.navigate("Home")}>
          <S.JoinText>Voltar para a home</S.JoinText>
        </S.JoinButton>
        <S.JoinButton onPress={() => navigation.navigate("QRCodeRead")}>
          <S.JoinText>Ler outro código</S.JoinText>
        </S.JoinButton>
      </S.InsideContainer>
    </S.Container>
  );
};

export default QrCodeScreenAfter;
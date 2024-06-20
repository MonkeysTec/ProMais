import React, { useState } from "react";
import { Text, Image } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { RainbowLine } from "../../components/RainbowLine";
import * as S from './styles';

const QrCodeScreenBefore: React.FC = () => {
  const navigation = useNavigation();
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [canSkip, setCanSkip] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      if (dontShowAgain === true && canSkip === true) {
        navigation.navigate("QRCodeRead");
      }
      return () => {};
    }, [dontShowAgain, canSkip]),
  );

  return (
    <>
      <RainbowLine />
      {dontShowAgain === false || canSkip === false ? (
        <S.Container>
          <S.InsideContainer>
            <S.FlexRow>
              <S.HomeButtonContainer onPress={() => navigation.navigate("Home")}>
                <Ionicons name={"arrow-back"} size={30} color={"#374649"} />
                <S.HomeButtonText>Home</S.HomeButtonText>
              </S.HomeButtonContainer>
            </S.FlexRow>
            <S.TutorialContainer>
              <Image source={require("../../assets/QrCodeTutorial.png")} style={{ width: 230, height: 230 }} />
              <S.TutorialText>
                Use a câmera do seu smartphone para escanear o QR Code presente
                na embalagem.
              </S.TutorialText>
              <S.CheckboxContainer onPress={() => setDontShowAgain(!dontShowAgain)}>
                {dontShowAgain ? (
                  <Fontisto name="checkbox-active" size={24} color="black" />
                ) : (
                  <Fontisto name="checkbox-passive" size={24} color="black" />
                )}
                <Text>Não mostrar isso novamente</Text>
              </S.CheckboxContainer>
              <S.JoinButton onPress={() => {
                setCanSkip(true);
                navigation.navigate("QRCodeRead");
              }}>
                <S.JoinText>Escanear QR Code!</S.JoinText>
              </S.JoinButton>
            </S.TutorialContainer>
          </S.InsideContainer>
        </S.Container>
      ) : null}
    </>
  );
};

export default QrCodeScreenBefore;
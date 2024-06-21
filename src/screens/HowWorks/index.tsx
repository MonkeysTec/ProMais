import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useAuth } from "../../context/LoginContext";
import * as S from './styles';
import { View } from "react-native";

const HowWorks: React.FC = () => {
  const { userName } = useAuth();

  return (
    <S.Container>
      <S.RedViewHeaderContainer>
        <View style={{ flexDirection: "row", alignItems: "flex-end", paddingTop:15 }}>
          <S.SectionTitle>Olá </S.SectionTitle>
          <S.SectionTitle>{userName}</S.SectionTitle>
        </View>
      </S.RedViewHeaderContainer>
      <S.ViewBody>
        <S.SectionTitle>Como funciona?</S.SectionTitle>
        <S.ImageStyled source={require("../../assets/home-img.png")} />
        <View>
          <S.RedText>Muito + Simples</S.RedText>
          <S.RedText>Muito + Facil de ganhar!</S.RedText>
        </View>
      </S.ViewBody>
      <S.ScrollViewStyled>
        <S.InfoContainer>
          <S.IconContainer>
            <MaterialCommunityIcons name="cellphone" size={40} color="white" />
          </S.IconContainer>
          <S.InfoTextContainer>
            <S.InfoTitle>Cadastre-se no programa</S.InfoTitle>
            <S.InfoDescription>
              Faça parte do nosso clube de fidelidade e tenha muitos benefícios.
            </S.InfoDescription>
          </S.InfoTextContainer>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.IconContainer>
            <Feather style={{ right: 1, top: 2 }} name="shopping-cart" size={36} color="white" />
          </S.IconContainer>
          <S.InfoTextContainer>
            <S.InfoTitle>Compre produtos TE</S.InfoTitle>
            <S.InfoDescription>
              Escaneie os códigos das caixas e aumente suas recompensas. {"\n"}+ Compras {"\n"}+ Recompensas.
            </S.InfoDescription>
          </S.InfoTextContainer>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.IconContainer>
            <AntDesign name="Trophy" size={40} color="white" />
          </S.IconContainer>
          <S.InfoTextContainer>
            <S.InfoTitle>Resgate seus prêmios{"\n"}+ SIMPLES{"\n"}+ PRÁTICO</S.InfoTitle>
            <S.InfoDescription>
              Recompensas = PIX. É isso mesmo. Seus benefícios a um clique de resgate. Basta informar sua chave PIX e aproveitar.
            </S.InfoDescription>
          </S.InfoTextContainer>
        </S.InfoContainer>
      </S.ScrollViewStyled>
    </S.Container>
  );
};

export default HowWorks;
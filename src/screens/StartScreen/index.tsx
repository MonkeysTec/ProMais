import React from "react";
import {
  SafeAreaView,
  Image,
  View,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Dots } from "../../components/Dots";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  InsideContainer,
  ImageSmall,
  Title,
  ImageBig,
  TextStyled,
  JoinButton,
  JoinText,
  LoginButton,
  LoginText,
  ContactContainer,
  ContactTextBlack,
  ContactTextRed,
  TotalEnergiesImage,
  Outline1,
} from './styles';

const StartScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <Container>
      <SafeAreaView />
      <RainbowLine />
      <InsideContainer>
        <ImageSmall
          source={require("../../assets/splashImg.png")}
        />
        <Title>Vem ser +, vem ser Pro+</Title>
        <ImageBig
          source={require("../../assets/home-img.png")}
          style={Outline1}
        />
        <TextStyled>
          Clube Pro+. O clube de fidelidade da Total Energies.
        </TextStyled>
        <Dots />
        <JoinButton onPress={handleSignUp}>
          <JoinText>Quero me cadastrar</JoinText>
        </JoinButton>
        <LoginButton onPress={handleLogin}>
          <LoginText>Entrar</LoginText>
          <Ionicons name={"arrow-forward"} size={18} color={"#000"} />
        </LoginButton>
        <ContactContainer>
          <MaterialIcons name={"headset-mic"} size={32} color={"tomato"} />
          <View>
            <ContactTextBlack>Não consegue acessar?</ContactTextBlack>
            <ContactTextRed>Entre em contato conosco</ContactTextRed>
          </View>
        </ContactContainer>
        <TotalEnergiesImage
          source={require("../../assets/© TotalEnergies - 2023.png")}
        />
      </InsideContainer>
    </Container>
  );
};

export default StartScreen;
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
<<<<<<< HEAD
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ContactUs")} style={styles.contactContainer}>
=======
        </LoginButton>
        <ContactContainer>
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286
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

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  insideContainer: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 50,
  },
  image: {
    width: 101,
    height: 61,
    resizeMode: "contain",
    marginTop: 60,
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  imageBig: {
    width: "100%",
    resizeMode: "cover",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  joinButton: {
    backgroundColor: "#85d151",
    marginTop: 100,
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  joinText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 10,
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    gap: 10,
  },
  loginText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  contactContainer: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius:25,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
  },
  contactTextBlack: {
    fontSize: 12,
    color: "#000",
    fontWeight: "800",
  },
  contactTextRed: {
    fontSize: 12,
    color: "red",
    fontWeight: "800",
  },
  totalEnergies: {
    width: 210,
    height: 30,
    resizeMode: "contain",
  },
  outline1: { color: "#000000", left: -1, top: -1 },
});

export default StartScreen;
=======
export default StartScreen;
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286

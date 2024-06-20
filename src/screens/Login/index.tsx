import React, { useState } from "react";
import {
  SafeAreaView,
  Alert,
  View,
  TouchableOpacity,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Container,
  InsideContainer,
  ImageSmall,
  InputContainer,
  Title,
  Input,
  CodeInputContainer,
  JoinButton,
  JoinText,
  LoginButton,
  LoginText,
  ContactContainer,
  ContactTextBlack,
  ContactTextRed,
  BottomContainer,
  CenteredView,
  ImageTotalEnergies,
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [modalConfirm, setModalConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/users/system/login/v1", {
        email: email,
        password: password,
      });

      if (data.status === 200) {
        setModalConfirm(true);
      } else {
        Alert.alert("Erro de Login", "Credenciais inválidas. Por favor, tente novamente.");
      }
    } catch (error) {
      Alert.alert("Erro de Login", "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
      console.error(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <SafeAreaView />
      <RainbowLine />
      <InsideContainer>
        <ImageSmall source={require("../../assets/splashImg.png")} />
        <InputContainer>
          <Title>Acesso</Title>
          <Input
            placeholder="Insira o e-mail cadastrado"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <CodeInputContainer>
            <Input
              style={{ borderWidth: 0 }}
              placeholder="Insira sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={{ position: 'relative', right: '50%' }} onPress={() => setShowPassword(!showPassword)}>
              <Entypo name={showPassword ? "eye" : "eye-with-line"} size={24} color="black" />
            </TouchableOpacity>
          </CodeInputContainer>
        </InputContainer>

        <JoinButton onPress={handleLogin}>
          <JoinText>Entrar</JoinText>
          <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
        </JoinButton>
        <LoginButton onPress={() => navigation.navigate("ForgotPassword")}>
          <LoginText>Esqueci minha senha</LoginText>
        </LoginButton>

<<<<<<< HEAD
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
            gap: 10,
          }}
        >
        </View>
          <TouchableOpacity onPress={() => navigation.navigate("ContactUs")} style={styles.contactContainer}>
=======
        <BottomContainer>
          <ContactContainer>
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286
            <MaterialIcons name={"headset-mic"} size={33} color={"tomato"} />
            <View>
              <ContactTextBlack>Não consegue acessar?</ContactTextBlack>
              <ContactTextRed>Entre em contato conosco</ContactTextRed>
            </View>
<<<<<<< HEAD
          </TouchableOpacity>
          <Image
            source={require("../../assets/© TotalEnergies - 2023.png")}
            style={{ resizeMode: "contain", width: "100%" }}
          />
      </View>
      {modalCOnfirm && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
=======
          </ContactContainer>
          <ImageTotalEnergies source={require("../../assets/© TotalEnergies - 2023.png")} />
        </BottomContainer>
      </InsideContainer>
      {modalConfirm && (
        <CenteredView>
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286
          <ModalSMSConfirm
            onClose={() => setModalConfirm(false)}
            email={email}
            phone=""
            type="LOGIN"
            password={password}
          />
        </CenteredView>
      )}
    </Container>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    paddingHorizontal: 20,
    paddingRight: 40,
    borderRadius: 25,
    marginTop: 10,
  },
  inputContainer: {
    height: "auto",
    gap: 10,
  },
  backContainer: {
    marginTop: 70,
  },
  insideContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 50,
    height: "100%",
    gap: 20,
  },
  image: {
    width: 101,
    height: 61,
    resizeMode: "contain",
    marginTop: 30,
  },
  title: {
    marginTop: 0,
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  joinButton: {
    backgroundColor: "#85d151",
    marginTop: 40,
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#85d151",
    gap: 10,
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
  },
  loginText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  contactContainer: {
    flexDirection: "row",
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

export default Login;
=======
export default Login;
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286

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

        <BottomContainer>
          <ContactContainer>
            <MaterialIcons name={"headset-mic"} size={33} color={"tomato"} />
            <View>
              <ContactTextBlack>Não consegue acessar?</ContactTextBlack>
              <ContactTextRed>Entre em contato conosco</ContactTextRed>
            </View>
          </ContactContainer>
          <ImageTotalEnergies source={require("../../assets/© TotalEnergies - 2023.png")} />
        </BottomContainer>
      </InsideContainer>
      {modalConfirm && (
        <CenteredView>
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

export default Login;
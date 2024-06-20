import React, { useState } from "react";
import { SafeAreaView, Alert, View, TouchableOpacity } from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import * as S from './styles';

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
        // Exibir mensagem de erro
        Alert.alert(
          "Erro de Login",
          "Credenciais inválidas. Por favor, tente novamente.",
        );
      }
    } catch (error) {
      // Exibir mensagem de erro
      Alert.alert(
        "Erro de Login",
        "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.",
      );
      console.error(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Container>
      <SafeAreaView />
      <RainbowLine />
      <S.InsideContainer>
        <S.StyledImage
          source={require("../../assets/splashImg.png")}
        />

        <S.InputContainer>
          <S.Title>Acesso</S.Title>
          <S.Input
            placeholder="Insira o e-mail cadastrado"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              height: 50,
              borderRadius: 50,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <S.InputPass
              placeholder="Insira sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <View>
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Entypo
                  name={showPassword ? "eye" : "eye-with-line"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </S.InputContainer>

        <View>
          <S.JoinButton onPress={handleLogin}>
            <S.JoinText>Entrar</S.JoinText>
            <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
          </S.JoinButton>
          <S.LoginButton
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          >
            <S.LoginText>Esqueci minha senha</S.LoginText>
          </S.LoginButton>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
            gap: 10,
          }}
        />
        <S.ContactContainer>
          <MaterialIcons name={"headset-mic"} size={33} color={"tomato"} />
          <View>
            <S.ContactTextBlack>Não consegue acessar?</S.ContactTextBlack>
            <S.ContactTextRed>
              Entre em contato conosco
            </S.ContactTextRed>
          </View>
        </S.ContactContainer>
        <S.TotalEnergies
          source={require("../../assets/© TotalEnergies - 2023.png")}
          style={{ resizeMode: "contain", width: "100%" }}
        />
      </S.InsideContainer>
      {modalConfirm && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <ModalSMSConfirm
            onClose={() => {
              setModalConfirm(false);
            }}
            email={email}
            phone=""
            type="LOGIN"
            password={password}
          />
        </View>
      )}
    </S.Container>
  );
};

export default Login;
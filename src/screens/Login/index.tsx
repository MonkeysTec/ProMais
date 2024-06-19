import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import axios from "axios";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import Entypo from "@expo/vector-icons/Entypo";
import { stylesDefault } from "../../components/Styled";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [modalCOnfirm, setModalConfim] = useState(false);

  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const { data } = await api.post("/users/system/login/v1", {
        email: email,
        password: password,
      });

      if (data.status === 200) {
        setModalConfim(true);
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
    <View style={stylesDefault.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={stylesDefault.insideContainer}>
        <Image
          source={require("../../assets/splashImg.png")}
          style={stylesDefault.image}
        />

        <View style={stylesDefault.inputContainer}>
          <Text style={stylesDefault.title}>Acesso</Text>
          <TextInput
            style={stylesDefault.input}
            placeholder="Insira o e-mail cadastrado"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={stylesDefault.codeInputContainer}>
            <TextInput
              style={stylesDefault.input}
              placeholder="Insira sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
              <Entypo
                name={showPassword ? "eye" : "eye-with-line"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={handleLogin} style={stylesDefault.joinButton}>
            <Text style={stylesDefault.joinText}>Entrar</Text>
            <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
            style={stylesDefault.loginButton}
          >
            <Text style={stylesDefault.loginText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={stylesDefault.bottomContainer}>
          <TouchableOpacity style={stylesDefault.contactContainer}>
            <MaterialIcons name={"headset-mic"} size={33} color={"tomato"} />
            <View>
              <Text style={stylesDefault.contactTextBlack}>Não consegue acessar?</Text>
              <Text style={stylesDefault.contactTextRed}>
                Entre em contato conosco
              </Text>
            </View>
          </TouchableOpacity>
          <Image
            source={require("../../assets/© TotalEnergies - 2023.png")}
            style={{ resizeMode: "contain", width: "100%" }}
          />
        </View>
      </View>
      {modalCOnfirm && (
        <View style={stylesDefault.centeredView}>
          <ModalSMSConfirm
            onClose={() => setModalConfim(false)}
            email={email}
            phone=""
            type="LOGIN"
            password={password}
          />
        </View>
      )}
    </View>
  );
};

export default Login;

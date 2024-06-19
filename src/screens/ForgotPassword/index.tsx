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
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import Moment from "moment";
import SignUp from "../SignUp";
import stylesDefault from "../../components/Styled";

const ForgotPassword: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [email1, setEmail1] = useState("");
  const [name, setName] = useState("");
  const [dataBirth, setData] = useState("");
  const [typeModal, setTypeModal] = useState<"EMAIL" | "SMS">("EMAIL");
  const [modalSms, setModalSms] = useState(false);
  const [phone, setPhone] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const handleSendEmailCode = async () => {
    setStep(step + 1);
  };
  const handleCheckEmailCode = async () => {
    setStep(step + 1);
    try {
      const data = {
        toEmail: email1,
      };
      const response = await api.post(
        "/tempcode/send/toresetpassword/v1/",
        data,
      );
      if (response) {
        console.log(response.data);
        setStep(step + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleNext = async () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step !== 1) {
      setStep(step - 1);
    } else {
      navigation.goBack();
    }
  };
  const handleFinalRegister = () => {
    
  };
  const handleCodeSms = (code:string, company:string) => {
    
  };

  return (
    <View style={stylesDefault.container}>
    <SafeAreaView />
    <RainbowLine />
    <View style={stylesDefault.insideContainer}>
      <View style={stylesDefault.header}>
        <TouchableOpacity onPress={handleBack} style={stylesDefault.backContainer}>
          {step === 4 ? (
            <AntDesign name={"checkcircle"} size={50} color={"#85d151"} />
          ) : (
            <Ionicons name={"arrow-back"} size={31} color={"black"} />
          )}
        </TouchableOpacity>
        <Text style={stylesDefault.counter}>{step}/3</Text>
      </View>
      {step === 1 && (
        <View style={stylesDefault.stepContainer}>
          <Text style={stylesDefault.title}>Esqueci minha senha</Text>
          <View style={stylesDefault.inputContainer}>
            <TextInput
              style={stylesDefault.input}
              onChangeText={(e) => setEmail1(e)}
              placeholder="Insira seu e-mail cadastrado"
            />
          </View>
          <TouchableOpacity onPress={handleSendEmailCode} style={stylesDefault.joinButton}>
            <Text style={stylesDefault.joinText}>Próximo</Text>
            <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
          </TouchableOpacity>
        </View>
      )}
      {step === 2 && (
        <View style={stylesDefault.stepContainer}>
          <Text style={stylesDefault.title}>Confirmação</Text>
          <Text>
            Enviamos uma confirmação de segurança no e-mail {email1}
          </Text>
          <View style={stylesDefault.inputContainer}>
            <TextInput
              style={stylesDefault.input}
              onChangeText={(e) => setName(e)}
              placeholder="Insira o código aqui"
            />
          </View>
          <TouchableOpacity onPress={handleCheckEmailCode} style={stylesDefault.joinButton}>
            <Text style={stylesDefault.joinText}>Próximo</Text>
            <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
          </TouchableOpacity>
        </View>
      )}
      {step === 3 && (
        <View style={stylesDefault.stepContainer}>
          <Text style={stylesDefault.title}>Finalize seu cadastro</Text>
          <View style={stylesDefault.inputContainer}>
            <TextInput
              style={stylesDefault.input}
              onChangeText={(e) => setPassword(e)}
              placeholder="Insira uma senha"
            />
          </View>
          <View style={stylesDefault.inputContainer}>
            <TextInput
              style={stylesDefault.input}
              onChangeText={(e) => setPassword2(e)}
              placeholder="Confirme sua senha"
            />
          </View>
          <TouchableOpacity onPress={handleFinalRegister} style={stylesDefault.joinButton}>
            <Text style={stylesDefault.joinText}>Finalizar</Text>
            <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
          </TouchableOpacity>
        </View>
      )}
      {step === 4 && (
        <View style={stylesDefault.stepContainer}>
          <Text style={stylesDefault.finishTitle}>Eba!</Text>
          <Text style={stylesDefault.contactTextBlack}>
            Sua conta foi criada com sucesso!
          </Text>
          <Text style={stylesDefault.contactTextBlack}>Acesse agora mesmo...</Text>
          <TouchableOpacity onPress={handleNext} style={stylesDefault.joinButton}>
            <Text style={stylesDefault.joinText}>Entrar</Text>
            <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
          </TouchableOpacity>
        </View>
      )}
      <View style={stylesDefault.bottomContainer}>
        <TouchableOpacity style={stylesDefault.contactContainer}>
          <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
          <View>
            <Text style={stylesDefault.contactTextBlack}>Não consegue acessar?</Text>
            <Text style={stylesDefault.contactTextRed}>Entre em contato conosco</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/© TotalEnergies - 2023.png")}
          style={stylesDefault.image}
        />
      </View>
    </View>
    {modalSms && (
      <ModalSMSConfirm
        phone={phone}
        type={typeModal}
        email={email1}
        code={(code, company) => handleCodeSms(code, company)}
      />
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 5,
  },
  backContainer: {
    marginTop: 70,
    flexDirection: "row",
  },
  insideContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  image: {
    width: 101,
    height: 61,
    resizeMode: "contain",
  },
  counter: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
  },
  finishTitle: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: "bold",
    color: "#85d151",
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
    marginTop: 30,
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
    width: 250,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  loginText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  contactContainer: {
    flexDirection: "row",
    marginTop: 100,
    alignItems: "center",
    gap: 10,
  },
  contactTextBlack: {
    fontSize: 16,
    color: "#000",
    fontWeight: "800",
  },
  contactTextRed: {
    fontSize: 16,
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

export default ForgotPassword;

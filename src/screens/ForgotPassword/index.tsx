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

const ForgotPassword: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [email1, setEmail1] = useState("");
  const [name, setName] = useState("");
  const [dataBirth, setData] = useState("");
  const [typeModal, setTypeModal] = useState<"EMAIL" | "SMS">("EMAIL");
  const [modalSms, setModalSms] = useState(false);
  const [phone, setPhone] = useState("");
  const [emailCode, setEmailCode] = useState('')


  

  const handleSendEmailCode = async () => {
    setStep(step + 1);
    /* try{
      const data = {
        toEmail: email1
      };
        const response = await api.post("/tempcode/send/toresetpassword/v1/", data)
        if(response){
          console.log(response.data);
        
        }
    }catch(error){
      console.log(error)
    } */
   
  };
  const handleCheckEmailCode = async () => {
    setStep(step + 1);
    try{
      const data = {
        toEmail: email1
      };
        const response = await api.post("/tempcode/send/toresetpassword/v1/", data)
        if(response){
          console.log(response.data)
          setStep(step + 1);
        }
    }catch(error){
      console.log(error)
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

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleBack} style={styles.backContainer}>
            {step === 4 ? (
              <AntDesign name={"checkcircle"} size={50} color={"#85d151"} />
            ) : (
              <Ionicons name={"arrow-back"} size={31} color={"black"} />
            )}
          </TouchableOpacity>
          <Text style={styles.counter}>{step}/3</Text>
        </View>
        {step === 1 && (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <Text style={styles.title}>Esqueci minha senha</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setEmail1(e)}
                placeholder="Insira seu e-mail cadastrado"
              />
            </View>
            <TouchableOpacity onPress={handleSendEmailCode} style={styles.joinButton}>
              <Text style={styles.joinText}>Próximo</Text>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </TouchableOpacity>
          </View>
        )}
        {step === 2 && (
          <>
            <Text style={styles.title}>Confirmação</Text>
            <Text >Enviamos uma confirmação de segurança no e-mail {email1}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setName(e)}
                placeholder="Insira o código aqui"
              />
            </View>
            
           
            <TouchableOpacity onPress={handleCheckEmailCode} style={styles.joinButton}>
              <Text style={styles.joinText}>Próximo</Text>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </TouchableOpacity>
          </>
        )}
        {step === 3 && (
          <>
            <Text style={styles.title}>Finalize seu cadastro</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setPassword(e)}
                placeholder="Insira uma senha"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setPassword2(e)}
                placeholder="Confirme sua senha"
              />
            </View>
            <TouchableOpacity
              onPress={handleFinalRegister}
              style={styles.joinButton}
            >
              <Text style={styles.joinText}>Finalizar</Text>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </TouchableOpacity>
          </>
        )}
        {step === 4 && (
          <>
            <View>
              <Text style={styles.finishTitle}>Eba!</Text>
              <Text style={styles.contactTextBlack}>
                Sua conta foi criado com sucesso!
              </Text>
              <Text style={styles.contactTextBlack}>Acesse agora mesmo...</Text>
              <TouchableOpacity onPress={handleNext} style={styles.joinButton}>
                <Text style={styles.joinText}>Entrar</Text>
                <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
              </TouchableOpacity>
            </View>
          </>
        )}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.contactContainer}>
            <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
            <View>
              <Text style={styles.contactTextBlack}>Não consegue acessar?</Text>
              <Text style={styles.contactTextRed}>
                Entre em contato conosco
              </Text>
            </View>
          </TouchableOpacity>
          <Image
            source={require("../../assets/© TotalEnergies - 2023.png")}
            style={styles.image}
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

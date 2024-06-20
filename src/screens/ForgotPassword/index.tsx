import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import * as S from './styles';

const ForgotPassword: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [email1, setEmail1] = useState("");
  const [name, setName] = useState("");
  const [dataBirth, setData] = useState("");
  const [typeModal, setTypeModal] = useState<"EMAIL" | "SMS">("EMAIL");
  const [modalSms, setModalSms] = useState(false);
  const [phone, setPhone] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

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
  const handleFinalRegister = async () => {
   
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

  function handleCodeSms(code: string, company: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <S.Container>
      <SafeAreaView />
      <RainbowLine />
      <S.InsideContainer>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <S.BackContainer onPress={handleBack}>
            {step === 4 ? (
              <AntDesign name={"checkcircle"} size={50} color={"#85d151"} />
            ) : (
              <Ionicons name={"arrow-back"} size={31} color={"black"} />
            )}
          </S.BackContainer>
          <S.Counter>{step}/3</S.Counter>
        </View>
        {step === 1 && (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <S.Title>Esqueci minha senha</S.Title>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setEmail1(e)}
                placeholder="Insira seu e-mail cadastrado"
              />
            </S.InputContainer>
            <S.JoinButton onPress={handleSendEmailCode}>
              <S.JoinText>Próximo</S.JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </S.JoinButton>
          </View>
        )}
        {step === 2 && (
          <>
            <S.Title>Confirmação</S.Title>
            <Text>
              Enviamos uma confirmação de segurança no e-mail {email1}
            </Text>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setName(e)}
                placeholder="Insira o código aqui"
              />
            </S.InputContainer>

            <S.JoinButton onPress={handleCheckEmailCode}>
              <S.JoinText>Próximo</S.JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </S.JoinButton>
          </>
        )}
        {step === 3 && (
          <>
            <S.Title>Finalize seu cadastro</S.Title>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setPassword(e)}
                placeholder="Insira uma senha"
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setPassword2(e)}
                placeholder="Confirme sua senha"
              />
            </S.InputContainer>
            <S.JoinButton onPress={handleFinalRegister}>
              <S.JoinText>Finalizar</S.JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </S.JoinButton>
          </>
        )}
        {step === 4 && (
          <>
            <View>
              <S.FinishTitle>Eba!</S.FinishTitle>
              <S.ContactTextBlack>
                Sua conta foi criada com sucesso!
              </S.ContactTextBlack>
              <S.ContactTextBlack>Acesse agora mesmo...</S.ContactTextBlack>
              <S.JoinButton onPress={handleNext}>
                <S.JoinText>Entrar</S.JoinText>
                <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
              </S.JoinButton>
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
          <S.ContactContainer>
            <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
            <View>
              <S.ContactTextBlack>Não consegue acessar?</S.ContactTextBlack>
              <S.ContactTextRed>Entre em contato conosco</S.ContactTextRed>
            </View>
          </S.ContactContainer>
          <S.ImageStyled source={require("../../assets/© TotalEnergies - 2023.png")} />
        </View>
      </S.InsideContainer>
      {modalSms && (
        <ModalSMSConfirm
          phone={phone}
          type={typeModal}
          email={email1}
          code={(code, company) => handleCodeSms(code, company)}
        />
      )}
    </S.Container>
  );
};

export default ForgotPassword;
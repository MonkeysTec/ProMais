import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import {
  Container,
  InsideContainer,
  Title,
  Input,
  InputContainer,
  JoinButton,
  JoinText,
  ContactContainer,
  ContactTextBlack,
  ContactTextRed,
  BottomContainer,
  CenteredView,
  ImageTotalEnergies,
  Header,
  BackContainer,
  Counter,
  StepContainer,
  FinishTitle,
} from "./styles";

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
      const data = { toEmail: email1 };
      const response = await api.post("/tempcode/send/toresetpassword/v1/", data);
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

  const handleFinalRegister = () => {};

  const handleCodeSms = (code:string, company:string) => {};

  return (
    <Container>
      <SafeAreaView />
      <RainbowLine />
      <InsideContainer>
        <Header>
          <BackContainer onPress={handleBack}>
            {step === 4 ? (
              <AntDesign name={"checkcircle"} size={50} color={"#85d151"} />
            ) : (
              <Ionicons name={"arrow-back"} size={31} color={"black"} />
            )}
          </BackContainer>
          <Counter>{step}/3</Counter>
        </Header>
        {step === 1 && (
          <StepContainer>
            <Title>Esqueci minha senha</Title>
            <InputContainer>
              <Input
                onChangeText={(e) => setEmail1(e)}
                placeholder="Insira seu e-mail cadastrado"
              />
            </InputContainer>
            <JoinButton onPress={handleSendEmailCode}>
              <JoinText>Próximo</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </StepContainer>
        )}
        {step === 2 && (
          <StepContainer>
            <Title>Confirmação</Title>
            <Text>Enviamos uma confirmação de segurança no e-mail {email1}</Text>
            <InputContainer>
              <Input
                onChangeText={(e) => setName(e)}
                placeholder="Insira o código aqui"
              />
            </InputContainer>
            <JoinButton onPress={handleCheckEmailCode}>
              <JoinText>Próximo</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </StepContainer>
        )}
        {step === 3 && (
          <StepContainer>
            <Title>Finalize seu cadastro</Title>
            <InputContainer>
              <Input
                onChangeText={(e) => setPassword(e)}
                placeholder="Insira uma senha"
              />
            </InputContainer>
            <InputContainer>
              <Input
                onChangeText={(e) => setPassword2(e)}
                placeholder="Confirme sua senha"
              />
            </InputContainer>
            <JoinButton onPress={handleFinalRegister}>
              <JoinText>Finalizar</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </StepContainer>
        )}
        {step === 4 && (
          <StepContainer>
            <FinishTitle>Eba!</FinishTitle>
            <ContactTextBlack>Sua conta foi criada com sucesso!</ContactTextBlack>
            <ContactTextBlack>Acesse agora mesmo...</ContactTextBlack>
            <JoinButton onPress={handleNext}>
              <JoinText>Entrar</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </StepContainer>
        )}
        <BottomContainer>
          <ContactContainer>
            <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
            <View>
              <ContactTextBlack>Não consegue acessar?</ContactTextBlack>
              <ContactTextRed>Entre em contato conosco</ContactTextRed>
            </View>
          </ContactContainer>
          <ImageTotalEnergies source={require("../../assets/© TotalEnergies - 2023.png")} />
        </BottomContainer>
      </InsideContainer>
      {modalSms && (
        <ModalSMSConfirm
          phone={phone}
          type={typeModal}
          email={email1}
          code={(code, company) => handleCodeSms(code, company)}
        />
      )}
    </Container>
  );
};

export default ForgotPassword;
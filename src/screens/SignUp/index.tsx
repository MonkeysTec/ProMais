import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import Moment from "moment";
import {
  Container,
  InsideContainer,
  Input,
  InputContainer,
  BackContainer,
  ImageSmall,
  Counter,
  Title,
  FinishTitle,
  JoinButton,
  JoinText,
  LoginButton,
  LoginText,
  ContactContainer,
  ContactTextBlack,
  ContactTextRed,
  TotalEnergiesImage,
} from './styles';
const SignUp: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [email1, setEmail1] = useState("");
  const [name, setName] = useState("");
  const [dataBirth, setData] = useState("");
  const [typeModal, setTypeModal] = useState<"EMAIL" | "SMS">("EMAIL");

  const [modalSms, setModalSms] = useState(false);

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [code, setCode] = useState("");
  const [company, setCompany] = useState("");

  ///api/tempcode/v1/toregister/email
  const handleCodeSms = async (code: string, company: string) => {
    setCode(code);
    setCompany(company);
    setModalSms(false);
  };

  const handleFinalRegister = async () => {
    if (password !== password2) {
      return Alert.alert("Senhas não são iguais,verifique");
    }
    const parts = name.trim().split(" ");
    const firstName = parts.shift();
    const lastName = parts.join(" ");
    let dateVar = Moment(dataBirth, "DD/MM/YYYY");

    try {
      const { data } = await api.post(
        "/users/v1",
        {
          email: email1,
          firstName,
          lastName,
          password: password,
          primaryPhone: phone,
          isReceivePush: true,
          isReceiveSMS: true,
          isReceiveEmail: true,
          companyUser: {
            company: company,
            dateBirth: dateVar.utc().format(),
            document: cpf,
          },
        },
        {
          headers: {
            temp_auth_code: code,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = async () => {
    if (step === 1) {
      setTypeModal("EMAIL");
      setModalSms(true);
    }
    if (step === 2) {
      setTypeModal("SMS");
      setModalSms(true);
    }
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
    <Container>
      <SafeAreaView />
      <RainbowLine />
      <InsideContainer>
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <BackContainer onPress={handleBack}>
            {step === 4 ? (
              <AntDesign name={"checkcircle"} size={50} color={"#85d151"} />
            ) : (
              <Ionicons name={"arrow-back"} size={31} color={"black"} />
            )}
          </BackContainer>
          <Counter>{step}/3</Counter>
        </View>
        {step === 1 && (
          <View style={{ flexDirection: "column", justifyContent: "space-between", height: "auto" }}>
            <Title>Faça seu cadastro</Title>
            <InputContainer>
              <Input onChangeText={(e) => setEmail1(e)} placeholder="Insira seu e-mail" />
            </InputContainer>
            <JoinButton onPress={handleNext}>
              <JoinText>Próximo</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </View>
        )}
        {step === 2 && (
          <>
            <Title>Continue seu cadastro</Title>
            <InputContainer>
              <Input onChangeText={(e) => setName(e)} placeholder="Nome completo" />
            </InputContainer>
            <InputContainer>
              <Input onChangeText={(e) => setCpf(e)} placeholder="Insira seu CPF" />
            </InputContainer>
            <InputContainer>
              <Input onChangeText={(e) => setData(e)} placeholder="Insira a data de nascimento" />
            </InputContainer>
            <InputContainer>
              <Input onChangeText={(e) => setPhone(e)} placeholder="Insira seu telefone" />
            </InputContainer>
            <JoinButton onPress={handleNext}>
              <JoinText>Próximo</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </>
        )}
        {step === 3 && (
          <>
            <Title>Finalize seu cadastro</Title>
            <InputContainer>
              <Input onChangeText={(e) => setPassword(e)} placeholder="Insira uma senha" />
            </InputContainer>
            <InputContainer>
              <Input onChangeText={(e) => setPassword2(e)} placeholder="Confirme sua senha" />
            </InputContainer>
            <JoinButton onPress={handleFinalRegister}>
              <JoinText>Finalizar</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </>
        )}
        {step === 4 && (
          <View>
            <FinishTitle>Eba!</FinishTitle>
            <ContactTextBlack>Sua conta foi criado com sucesso!</ContactTextBlack>
            <ContactTextBlack>Acesse agora mesmo...</ContactTextBlack>
            <JoinButton onPress={handleNext}>
              <JoinText>Entrar</JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </JoinButton>
          </View>
        )}
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <ContactContainer>
            <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
            <View>
              <ContactTextBlack>Não consegue acessar?</ContactTextBlack>
              <ContactTextRed>Entre em contato conosco</ContactTextRed>
            </View>
          </ContactContainer>
          <TotalEnergiesImage source={require("../../assets/© TotalEnergies - 2023.png")} />
        </View>
      </InsideContainer>
      {modalSms && (
        <ModalSMSConfirm phone={phone} type={typeModal} email={email1} code={(code, company) => handleCodeSms(code, company)} />
      )}
    </Container>
  );
};

export default SignUp;

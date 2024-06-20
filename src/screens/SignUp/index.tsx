import React, { useState } from "react";
import { SafeAreaView, Alert, View, TouchableOpacity } from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { ModalSMSConfirm } from "../../components/Modal/SmsConfirm";
import Moment from "moment";
import * as S from "./styles";

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

  const handleCodeSms = async (code: string, company: string) => {
    setCode(code);
    setCompany(company);
    setModalSms(false);
  };
  const handleContact = () => {
    navigation.navigate("ContactUs");
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
        }
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
          <S.ColumnView>
            <S.Title>Faça seu cadastro</S.Title>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setEmail1(e)}
                placeholder="Insira seu e-mail"
              />
            </S.InputContainer>
            <S.JoinButton onPress={handleNext}>
              <S.JoinText>Próximo</S.JoinText>
              <Ionicons name={"arrow-forward"} size={18} color={"#fff"} />
            </S.JoinButton>
          </S.ColumnView>
        )}
        {step === 2 && (
          <>
            <S.Title>Continue seu cadastro</S.Title>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setName(e)}
                placeholder="Nome completo"
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setCpf(e)}
                placeholder="Insira seu CPF"
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setData(e)}
                placeholder="Insira a data de nascimento"
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.Input
                onChangeText={(e) => setPhone(e)}
                placeholder="Insira seu telefone"
              />
            </S.InputContainer>
            <S.JoinButton onPress={handleNext}>
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
        ></View>
        <S.ContactContainer onPress={() => navigation.navigate("ContactUs")}>
          <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
          <View>
            <S.ContactTextBlack>Não consegue acessar?</S.ContactTextBlack>
            <S.ContactTextRed>Entre em contato conosco</S.ContactTextRed>
          </View>
        </S.ContactContainer>
        <S.StyledImage
          source={require("../../assets/© TotalEnergies - 2023.png")}
        />
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

export default SignUp;

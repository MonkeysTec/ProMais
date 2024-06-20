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
<<<<<<< HEAD
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
         >
         </View>
      </View>
          <TouchableOpacity style={styles.contactContainer}>
=======
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <ContactContainer>
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286
            <MaterialIcons name={"headset-mic"} size={45} color={"tomato"} />
            <View>
              <ContactTextBlack>Não consegue acessar?</ContactTextBlack>
              <ContactTextRed>Entre em contato conosco</ContactTextRed>
            </View>
<<<<<<< HEAD
          </TouchableOpacity>
          <Image
          
            source={require("../../assets/© TotalEnergies - 2023.png")}
            style={styles.image}
          />
=======
          </ContactContainer>
          <TotalEnergiesImage source={require("../../assets/© TotalEnergies - 2023.png")} />
        </View>
      </InsideContainer>
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286
      {modalSms && (
        <ModalSMSConfirm phone={phone} type={typeModal} email={email1} code={(code, company) => handleCodeSms(code, company)} />
      )}
    </Container>
  );
};

<<<<<<< HEAD
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
    paddingHorizontal: 40,
  },
  image: {
    width: 101,
    height: 61,
    resizeMode: "contain",
    alignSelf:'center'
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
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius:25,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal:40,
    marginTop:50
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

=======
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286
export default SignUp;

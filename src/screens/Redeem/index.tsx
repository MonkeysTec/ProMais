import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as S from './styles';

export const Redeem: React.FC = () => {
  const { user, userName, login, logout, sendPushNotification } = useAuth();
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const [pixTransferType, setPixTransferType] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [totalBalanceAmount, setTotalBalanceAmount] = useState(0);
  const [name, setName] = useState("");
  const [amountToReclaim, setAmountToReclaim] = useState<Number>();
  const [errorType, setErrorType] = useState("");

  const tryTransferReclaim = async () => {
    try {
      if (!pixKey) {
        console.error("pixKey is undefined");
        return;
      }

      const data = {
        pixKey: pixKey,
        value: amountToReclaim,
        pixType: pixTransferType,
      };

      const response = await api.post("/points/rescue/v1/", data);

      if (response) {
        try {
          const { data } = await api.get("/rescues/v1/");
          console.log(data);
          if (data.results[0]) {
            if (
              data.results[0].paymentStatusName === "Cancelado" ||
              data.results[0].paymentStatusName === null
            ) {
              setStep(6);
              setErrorType("Chave Pix Não Válida!");
              sendPushNotification({
                title: "Erro ao efetuar o resgate",
                body: `Favor verificar se essa chave pix é valida para o tipo de chave selecionada`,
              });
            }
            if (data.results[0].paymentStatusName === "Pago") {
              setStep(5);
              sendPushNotification({
                title: "Resgate efetuado com sucesso!",
                body: `Um pix de ${pixTransferType} com chave ${pixKey} de valor ${amountToReclaim} foi efetuado com sucesso!`,
              });
            }
            if (
              data.results[0].paymentStatusName === "Dados de entrada inválidos"
            ) {
              setStep(6);
              setErrorType("Dados de entrada inválidos!");
              sendPushNotification({
                title: "Erro ao efetuar o resgate",
                body: `Dados de entrada inválidos!`,
              });
            }
          }
        } catch (error) {
          console.log("Rescues: ", error);
        }
      }
    } catch (error) {
      console.log("Erro ao tentar transferir o valor: ", error);
      sendPushNotification({
        title: "Erro ao efetuar o resgate",
        body: `Verifique os dados inseridos e valor acima de 100 reais!`,
      });

      setStep(6);
      setErrorType("Valor minimo de 100 reais ou chave inválida");
    }
  };

  const getBalance = async () => {
    const { data } = await api.get("/points/values/v1/");

    if (data.result.availableMonetayValue) {
      setTotalBalanceAmount(data.result.availableMonetayValue.toFixed(2));
    }
  };

  const getUserName = async () => {
    const { data } = await api.get("/users/me/v1/");

    if (data) {
      let nameUser = "";
      nameUser += data.token.user.firstName;
      nameUser += " ";
      nameUser += data.token.user.lastName;
      setName(nameUser);
    }
  };

  useEffect(() => {
    getBalance();
    getUserName();
  }, []);
  return (
    <S.Container>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
        {/*  <Ionicons name="reload" size={24} color="white" /> */}
      </View>
      <View style={{ width: "100%", height: "auto", padding: 20, marginTop: -50 }}>
        {step === 1 && (
          <S.CardBalance>
            <Ionicons
              onPress={() => navigation.navigate("Home")}
              name={"arrow-back"}
              size={31}
              color={"#374649"}
            />
            <S.HeaderText>Como deseja transferir?</S.HeaderText>
            <S.LoginButton onPress={() => { setStep(2); setPixTransferType("cpf"); }}>
              <S.FlexRow>
                <FontAwesome6 name="pix" size={24} color="red" />
                <S.LoginText>CPF</S.LoginText>
              </S.FlexRow>
              <Ionicons name={"arrow-forward"} size={31} color={"#374649"} />
            </S.LoginButton>
            <S.LoginButton onPress={() => { setStep(2); setPixTransferType("cnpj"); }}>
              <S.FlexRow>
                <FontAwesome6 name="pix" size={24} color="red" />
                <S.LoginText>CNPJ</S.LoginText>
              </S.FlexRow>
              <Ionicons name={"arrow-forward"} size={31} color={"#374649"} />
            </S.LoginButton>
            <S.LoginButton onPress={() => { setStep(2); setPixTransferType("phone"); }}>
              <S.FlexRow>
                <FontAwesome6 name="pix" size={24} color="red" />
                <S.LoginText>Celular</S.LoginText>
              </S.FlexRow>
              <Ionicons name={"arrow-forward"} size={31} color={"#374649"} />
            </S.LoginButton>
            <S.LoginButton onPress={() => { setStep(2); setPixTransferType("email"); }}>
              <S.FlexRow>
                <FontAwesome6 name="pix" size={24} color="red" />
                <S.LoginText>Email</S.LoginText>
              </S.FlexRow>
              <Ionicons name={"arrow-forward"} size={31} color={"#374649"} />
            </S.LoginButton>
            <S.LoginButton onPress={() => { setStep(2); setPixTransferType("key"); }}>
              <S.FlexRow>
                <FontAwesome6 name="pix" size={24} color="red" />
                <S.LoginText>Chave Aleatória</S.LoginText>
              </S.FlexRow>
              <Ionicons name={"arrow-forward"} size={31} color={"#374649"} />
            </S.LoginButton>
          </S.CardBalance>
        )}
        {step === 2 && (
          <S.CardBalance>
            <Ionicons onPress={() => setStep(1)} name={"arrow-back"} size={31} color={"#374649"} />
            <S.HeaderText>
              Informe os dados da chave de transferência para
              {pixTransferType === "cpf" && " CPF: "}
              {pixTransferType === "cnpj" && " CPNJ: "}
              {pixTransferType === "phone" && " Celular: "}
              {pixTransferType === "key" && " Chave Aleatória: "}
              {pixTransferType === "email" && " Email: "}
            </S.HeaderText>
            {pixTransferType === "cpf" && (
              <S.Input
                placeholder={`Insira ${pixTransferType}`}
                onChangeText={(value) => setPixKey(value)}
                value={pixKey}
                maxLength={11}
              />
            )}
            {pixTransferType === "cnpj" && (
              <S.Input
                placeholder={`Insira ${pixTransferType}`}
                onChangeText={(value) => setPixKey(value)}
                maxLength={14}
                value={pixKey}
              />
            )}
            {pixTransferType === "phone" && (
              <S.Input
                placeholder={`Insira ${pixTransferType}`}
                onChangeText={(value) => setPixKey(value)}
                maxLength={12}
                value={pixKey}
              />
            )}
            {pixTransferType === "key" && (
              <S.Input
                placeholder={`Insira ${pixTransferType}`}
                onChangeText={(value) => setPixKey(value)}
                maxLength={32}
                value={pixKey}
              />
            )}
            {pixTransferType === "email" && (
              <S.Input
                placeholder={`Insira ${pixTransferType}`}
                onChangeText={(value) => setPixKey(value)}
                maxLength={40}
                value={pixKey}
              />
            )}
            <S.JoinButton onPress={() => { if (pixKey.length > 5) setStep(3); }}>
              <S.JoinText>Continuar</S.JoinText>
            </S.JoinButton>
          </S.CardBalance>
        )}
        {step === 3 && (
          <S.CardBalance>
            <Ionicons onPress={() => setStep(2)} name={"arrow-back"} size={31} color={"#374649"} />
            <S.HeaderText>Qual o valor do resgate?</S.HeaderText>
            <S.AmountText>
              Saldo disponível para resgate em conta:{" "}
              <S.HighlightText>R$ {totalBalanceAmount}</S.HighlightText>
            </S.AmountText>
            <S.Input
              placeholder="0,00"
              onChangeText={(value) => {
                const decimalValue = Number(value.replace(/[^0-9]/g, "")) / 100;
                setAmountToReclaim(decimalValue.toFixed(2));
              }}
              value={amountToReclaim?.toString()}
            />
            <S.JoinButton onPress={() => setStep(4)}>
              <S.JoinText>Continuar</S.JoinText>
            </S.JoinButton>
            <S.WarningText>Mínimo: 100,00 reais</S.WarningText>
          </S.CardBalance>
        )}
        {step === 4 && (
          <S.CardBalance>
            <Ionicons onPress={() => setStep(3)} name={"arrow-back"} size={31} color={"#374649"} />
            <S.HeaderText>Você está transferindo para:</S.HeaderText>
            <View
              style={{
                borderWidth: 1,
                borderColor: "black",
                height: 200,
                width: "95%",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: 600, marginTop: 10 }}>
                Chave pix
              </Text>
              <Text style={{ fontSize: 14, color: "#a9a9a9", fontWeight: 600 }}>
                {pixTransferType === "cpf" && "CPF: "}
                {pixTransferType === "cnpj" && "CPNJ: "}
                {pixTransferType === "phone" && "Celular: "}
                {pixTransferType === "key" && "Chave Aleatória: "}
                {pixTransferType === "email" && "Email: "}
                {pixKey}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 10 }}>
                Valor a ser transferido
              </Text>
              <Text style={{ fontSize: 14, color: "#a9a9a9", fontWeight: 600 }}>
                R$ {amountToReclaim}
              </Text>
            </View>
            <S.JoinButton onPress={() => { tryTransferReclaim(); setStep(7); }}>
              <S.JoinText>Continuar</S.JoinText>
            </S.JoinButton>
          </S.CardBalance>
        )}
        {step === 5 && (
          <S.CardBalance>
            <Ionicons name={"arrow-back"} onPress={() => setStep(4)} size={31} color={"#374649"} />
            <S.FlexRow>
              <AntDesign name="checkcircle" size={55} color="#85D151" />
              <S.HeaderText>Resgate realizado com sucesso</S.HeaderText>
            </S.FlexRow>
            <ScrollView
              style={{
                borderWidth: 1,
                borderColor: "#a9a9a9",
                height: 200,
                width: "95%",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <Text style={{ fontSize: 14, color: "#a9a9a9", fontWeight: 600 }}></Text>
            </ScrollView>
            <S.FlexRow>
              <Feather name="send" size={18} color="red" />
              <S.SubTitleText style={{ color: "red", textDecorationLine: "underline" }}>
                Compartilhar comprovante
              </S.SubTitleText>
            </S.FlexRow>
            <S.JoinButton onPress={() => navigation.navigate("Home")}>
              <S.JoinText>
                {step !== 5 ? "Continuar" : "Tela inicial"}
              </S.JoinText>
            </S.JoinButton>
          </S.CardBalance>
        )}
        {step === 6 && (
          <S.CardBalance>
            <S.FlexRow>
              <AntDesign name="closecircle" size={24} color="red" />
              <S.HeaderText>Houve um erro no resgate</S.HeaderText>
            </S.FlexRow>
            <S.SubTitleTextBold>Verifique as regras a seguir</S.SubTitleTextBold>
            <S.SubTitleText>-Resgate minimo: 100,00 reais</S.SubTitleText>
            <S.SubTitleText>-Se a chave pix é um CPF, escolha o CPF na primeira página (o mesmo para as outras opções)</S.SubTitleText>
            <S.SubTitleText>
              Caso tenha verificado as regras acima, e ainda sim deu erro, por
              gentileza, contate o suporte.
            </S.SubTitleText>
            <S.JoinButton onPress={() => navigation.navigate("Home")}>
              <S.JoinText>Voltar a Home</S.JoinText>
            </S.JoinButton>
          </S.CardBalance>
        )}
        {step === 7 && (
          <S.CardBalance>
            <S.FlexRow>
              <AntDesign name="exclamationcircle" size={24} color="orange" />
              <S.HeaderText>Em processamento...</S.HeaderText>
            </S.FlexRow>
            <S.SubTitleTextBold>Por favor aguarde nesta página!</S.SubTitleTextBold>
            <S.SubTitleText>-Esse processamento pode durar até 30 segundos</S.SubTitleText>
            <S.JoinButton onPress={() => navigation.navigate("Home")}>
              <S.JoinText>Voltar a Home</S.JoinText>
            </S.JoinButton>
          </S.CardBalance>
        )}
        <S.CardWarning>
          <S.FlexRow>
            <AntDesign name="exclamationcircle" size={20} color={"red"} />
            <S.SubTitleTextBold style={{ color: "red" }}>Atenção:</S.SubTitleTextBold>
          </S.FlexRow>
          <S.SubTitleText>
            Você só pode realizar transferências via PIX para sua conta
            pessoal. Não é permitido a transferência para terceiros pelo
            aplicativo do Clube Pro+.
          </S.SubTitleText>
        </S.CardWarning>
      </View>
    </S.Container>
  );
};
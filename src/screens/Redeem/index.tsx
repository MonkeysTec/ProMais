import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import axios from "axios";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

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
    <View style={stylesDefault.container}>
  <View style={stylesDefault.RedViewHeaderContainer}>
    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
      <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
      <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
    </View>
    {/*  <Ionicons name="reload" size={24} color="white" /> */}
  </View>
  <View style={stylesDefault.ViewBody}>
    {step === 1 && (
      <View style={styles.cardBalance}>
        <Ionicons
          onPress={() => navigation.navigate("Home")}
          name={"arrow-back"}
          size={31}
          color={"#374649"}
        />
        <Text style={styles.text}>Como deseja transferir?</Text>
        <TouchableOpacity
          onPress={() => {
            setStep(2);
            setPixTransferType("cpf");
          }}
          style={stylesDefault.loginButton}
        >
          <Text style={stylesDefault.loginText}>CPF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStep(2);
            setPixTransferType("cnpj");
          }}
          style={stylesDefault.loginButton}
        >
          <Text style={stylesDefault.loginText}>CNPJ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStep(2);
            setPixTransferType("phone");
          }}
          style={stylesDefault.loginButton}
        >
          <Text style={stylesDefault.loginText}>Celular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStep(2);
            setPixTransferType("email");
          }}
          style={stylesDefault.loginButton}
        >
          <Text style={stylesDefault.loginText}>E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStep(2);
            setPixTransferType("key");
          }}
          style={stylesDefault.loginButton}
        >
          <Text style={stylesDefault.loginText}>Chave aleatória</Text>
        </TouchableOpacity>
      </View>
    )}
    {step === 2 && (
      <View style={styles.cardBalance}>
        <Ionicons
          onPress={() => setStep(1)}
          name={"arrow-back"}
          size={31}
          color={"#374649"}
        />
        <Text style={styles.text}>
          Informe os dados da chave de transferência para
          {pixTransferType === "cpf" && " CPF: "}
          {pixTransferType === "cnpj" && " CPNJ: "}
          {pixTransferType === "phone" && " Celular: "}
          {pixTransferType === "key" && " Chave Aleatória: "}
          {pixTransferType === "email" && " Email: "}
        </Text>
        {pixTransferType === "cpf" ? (
          <TextInput
            style={stylesDefault.input}
            placeholder={`Insira ${pixTransferType}`}
            onChangeText={(value) => {
              setPixKey(value);
            }}
            value={pixKey}
            maxLength={11}
          />
        ) : null}
        {pixTransferType === "cnpj" ? (
          <TextInput
            style={stylesDefault.input}
            placeholder={`Insira ${pixTransferType}`}
            onChangeText={(value) => {
              setPixKey(value);
            }}
            maxLength={14}
            value={pixKey}
          />
        ) : null}
        {pixTransferType === "phone" ? (
          <TextInput
            style={stylesDefault.input}
            placeholder={`Insira ${pixTransferType}`}
            onChangeText={(value) => {
              setPixKey(value);
            }}
            maxLength={12}
            value={pixKey}
          />
        ) : null}
        {pixTransferType === "key" ? (
          <TextInput
            style={stylesDefault.input}
            placeholder={`Insira ${pixTransferType}`}
            onChangeText={(value) => {
              setPixKey(value);
            }}
            maxLength={32}
            value={pixKey}
          />
        ) : null}
        {pixTransferType === "email" ? (
          <TextInput
            style={stylesDefault.input}
            placeholder={`Insira ${pixTransferType}`}
            onChangeText={(value) => {
              setPixKey(value);
            }}
            maxLength={40}
            value={pixKey}
          />
        ) : null}

        <TouchableOpacity
          onPress={() => {
            if (pixKey.length > 5) {
              setStep(3);
            }
          }}
          style={stylesDefault.joinButton}
        >
          <Text style={stylesDefault.joinText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    )}
    {step === 3 && (
      <View style={styles.cardBalance}>
        <Ionicons
          onPress={() => setStep(2)}
          name={"arrow-back"}
          size={31}
          color={"#374649"}
        />
        <Text style={styles.text}>Qual o valor do resgate?</Text>
        <Text style={stylesDefault.SmallText_Black_18_600}>
          Saldo disponível par resgate em conta:{" "}
          <Text style={stylesDefault.SmallText_Black_30_600}>
            R$ {totalBalanceAmount}
          </Text>
        </Text>

        <View style={stylesDefault.inputContainer}>
          <Text style={stylesDefault.currencySymbol}>R$</Text>
          <TextInput
            style={stylesDefault.inputAmount}
            placeholder="0,00"
            onChangeText={(value) => {
              const decimalValue =
                Number(value.replace(/[^0-9]/g, "")) / 100;
              setAmountToReclaim(decimalValue.toFixed(2));
            }}
            value={amountToReclaim?.toString()}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            setStep(4);
          }}
          style={stylesDefault.joinButton}
        >
          <Text style={stylesDefault.joinText}>Continuar</Text>
        </TouchableOpacity>
        <Text style={stylesDefault.minValueText}>
          Mínimo: 100,00 reais
        </Text>
      </View>
    )}
    {step === 4 && (
      <View style={styles.cardBalance}>
        <Ionicons
          onPress={() => setStep(3)}
          name={"arrow-back"}
          size={31}
          color={"#374649"}
        />
        <Text style={styles.text}>Você está transferindo para:</Text>
        <View style={stylesDefault.transferInfoContainer}>
          <Text style={stylesDefault.transferInfoTitle}>Chave pix</Text>
          <Text style={stylesDefault.transferInfoSubtitle}>
            {pixTransferType === "cpf" ? "CPF: " : null}
            {pixTransferType === "cnpj" ? "CPNJ: " : null}
            {pixTransferType === "phone" ? "Celular: " : null}
            {pixTransferType === "key" ? "Chave Aleatória: " : null}
            {pixTransferType === "email" ? "Email: " : null}
            {pixKey}
          </Text>
          <Text style={stylesDefault.transferInfoTitle}>
            Valor a ser transferido
          </Text>
          <Text style={stylesDefault.transferInfoSubtitle}>
            R$ {amountToReclaim}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            tryTransferReclaim();
            setStep(7);
          }}
          style={stylesDefault.joinButton}
        >
          <Text style={stylesDefault.joinText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    )}
    {step === 5 && (
      <View style={styles.cardBalance}>
        <Ionicons
          name={"arrow-back"}
          onPress={() => setStep(4)}
          size={31}
          color={"#374649"}
        />
        <View style={stylesDefault.successContainer}>
          <TouchableOpacity
            style={stylesDefault.successButton}
            onPress={() => {}}
          >
            <AntDesign name="checkcircle" size={55} color="#85D151" />
          </TouchableOpacity>
          <Text style={styles.text}>Resgate realizado com sucesso</Text>
        </View>
        <ScrollView style={stylesDefault.receiptContainer}>
          <Text style={stylesDefault.receiptText}></Text>
        </ScrollView>
        <View style={stylesDefault.shareContainer}>
          <Feather name="send" size={18} color="red" />
          <Text style={stylesDefault.shareText}>Compartilhar comprovante</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={stylesDefault.joinButton}
        >
          <Text style={stylesDefault.joinText}>
            {step !== 5 ? "Continuar" : "Tela inicial"}
          </Text>
        </TouchableOpacity>
      </View>
    )}
    {step === 6 && (
      <View style={styles.cardBalance}>
        <View style={stylesDefault.errorContainer}>
          <TouchableOpacity
            style={stylesDefault.errorButton}
            onPress={() => {}}
          >
            <AntDesign name="closecircle" size={55} color="red" />
          </TouchableOpacity>
          <Text style={stylesDefault.errorText}>Houve um erro no resgate</Text>
        </View>
        <Text style={stylesDefault.errorTitle}>Verifique as regras a seguir</Text>
        <Text style={stylesDefault.errorRule}>-Resgate minimo: 100,00 reais</Text>
        <Text style={stylesDefault.errorRule}>
          -Se a chave pix é um CPF, escolha o CPF na primeira pagina(o mesmo
          para as outras opções)
        </Text>
        <Text style={stylesDefault.errorRule}>
          Caso tenha verificado as regras acima, e ainda sim deu erro, por
          gentileza, contate o suporte.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={stylesDefault.joinButton}
        >
          <Text style={stylesDefault.joinText}>Voltar a Home</Text>
        </TouchableOpacity>
      </View>
    )}
    {step === 7 && (
      <View style={styles.cardBalance}>
        <View style={stylesDefault.processingContainer}>
          <TouchableOpacity
            style={stylesDefault.processingButton}
            onPress={() => {}}
          >
            <AntDesign name="exclamationcircle" size={24} color="orange" />
          </TouchableOpacity>
          <Text style={styles.text}>Em processamento...</Text>
        </View>
        <Text style={stylesDefault.processingText}>
          Por favor aguarde nesta página!
        </Text>
        <Text style={stylesDefault.processingDetail}>
          -Esse processamento pode durar até 30 segundos
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={stylesDefault.joinButton}
        >
          <Text style={stylesDefault.joinText}>Voltar a Home</Text>
        </TouchableOpacity>
      </View>
    )}
    {step === 8 && (
      <View style={styles.cardWarning}>
        <View style={stylesDefault.warningHeader}>
          <AntDesign name="exclamationcircle" size={20} color={"red"} />
          <Text style={stylesDefault.warningText}>Atenção:</Text>
        </View>
        <Text style={stylesDefault.warningMessage}>
          Você só pode realizar transferências via PIX para sua conta
          pessoal. Não é permitido a transferência para terceiros pelo
          aplicativo do Clube Pro+.
        </Text>
      </View>
    )}
  </View>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F3F3F3",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    width: "100%",
  },
  containerRed: {
    backgroundColor: "red",
    height: 200,
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  cardBalance: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    gap: 20,
    padding: 20,
  },
  text_subTitleSize: {
    fontSize: 14,
  },
  text_subTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  cardWarning: {
    width: "80%",
    backgroundColor: "#d9d9d9",
    height: 150,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 20,
    paddingLeft: 20,
    gap: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    height: 50,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: "95%",

    fontSize: 20,
    fontWeight: "700",
  },
  loginButton: {
    width: "95%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
  },
  loginText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  joinButton: {
    backgroundColor: "#85d151",
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#85d151",
  },
  joinText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

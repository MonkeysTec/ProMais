import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import api from "../../services/api";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";
import * as S from './styles';

const ContactUsScreen: React.FC = () => {
  const { user, userName, login, logout } = useAuth();
  const [name, setName] = useState("");
  const [assunto, setAssunto] = useState("");
  const [descrição, setDescrição] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const aboutOptions = [
    "Acesso",
    "Elogio",
    "Reclamação",
    "Sugestão",
    "Dúvidas",
    "Redefinição de senha",
    "Outros",
  ];

  const sendEmail = async () => {
    try {
      const data = {
        email: name,
        title: assunto,
        description: descrição,
      };

      const response = await api.post("/email/contactus/v1/", data);
      console.log(response);
      if (response) {
        setShowConfirmModal(true);
      }
    } catch (error) {
      console.log("Erro ao tentar enviar email: ", error);
    }
  };

  const navigation = useNavigation();
  return (
    <>
      {showConfirmModal ? (
        <S.Container>
          <SafeAreaView />
          <S.InsideContainer>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <S.JoinButton onPress={() => {}}>
                <AntDesign name="checkcircle" size={55} color="#85D151" />
              </S.JoinButton>
            </View>
            <S.JoinText style={{ fontWeight: "800", fontSize: 30, color: "#85D151" }}>
              Boa!{"\n"}Sua mensagem foi enviada
            </S.JoinText>
            <S.JoinText style={{ fontWeight: "500", fontSize: 20, color: "black" }}>
              Recebemos seu recado e em breve, nossa equipe Pro+ entrará em
              contato com você!
            </S.JoinText>
            <S.JoinButton onPress={() => {
              navigation.navigate("Home");
            }}>
              <S.JoinText>Voltar para a home</S.JoinText>
            </S.JoinButton>
          </S.InsideContainer>
        </S.Container>
      ) : (
        <S.Container>
          <View style={stylesDefault.RedViewHeaderContainer}>
            <View style={{ flexDirection: "row", alignItems: "flex-end", paddingTop:15 }}>
              <S.JoinText>Olá </S.JoinText>
              <S.JoinText>{userName}</S.JoinText>
            </View>
          </View>
          <View style={{ padding: 20, top: -50 }}>
            <View style={{ width: "100%", height: "auto", padding: 30, backgroundColor: "white", borderRadius: 20 }}>
              <View style={{ marginBottom: 20 }}>
                <S.JoinText style={{ color: "red", fontWeight: "800", fontSize: 29 }}>Fale conosco</S.JoinText>
              </View>
              <View>
                <S.Input
                  value={name}
                  onChangeText={(text) => setName(text)}
                  placeholder="Email para contato"
                />
              </View>
              <S.PickerContainer>
                <Picker style={{ bottom: 10 }} selectedValue={assunto} onValueChange={(itemValue) => setAssunto(itemValue)}>
                  {aboutOptions.map((item, index) => (
                    <Picker.Item label={item} value={index} key={index} />
                  ))}
                </Picker>
              </S.PickerContainer>
              <S.DescriptionInput
                value={descrição}
                onChangeText={(text) => setDescrição(text)}
                placeholder="Descrição"
                multiline
                numberOfLines={4}
              />
              <View>
                <S.Button onPress={() => sendEmail()}>
                  <S.ButtonText>Enviar</S.ButtonText>
                </S.Button>
              </View>
            </View>
          </View>
        </S.Container>
      )}
    </>
  );
};

export default ContactUsScreen;
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import api from "../../services/api";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

const ContactUsScreen: React.FC = () => {
  const { userName} = useAuth();
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
        <View style={stylesDefault.container}>
          <SafeAreaView />
          <View style={stylesDefault.insideContainer}>
            <View style={stylesDefault.row}>
              <TouchableOpacity
                style={stylesDefault.row}
                onPress={() => {}}
              >
                <AntDesign name="checkcircle" size={55} color="#85D151" />
              </TouchableOpacity>
            </View>
            <Text style={stylesDefault.confirmTitle}>
              Boa!
              {"\n"}
              Sua mensagem foi enviada
            </Text>
            <Text style={stylesDefault.confirmText}>
              Recebemos seu recado e em breve, nossa equipe Pro+ entrará em
              contato com você!
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={stylesDefault.confirmButton}
            >
              <Text style={stylesDefault.confirmButtonText}>
                Voltar para a home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={stylesDefault.container}>
          <View style={stylesDefault.RedViewHeaderContainer}>
            <View style={stylesDefault.row}>
              <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
              <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
            </View>
          </View>
          <View style={stylesDefault.contentContainer}>
            <View style={stylesDefault.formContainer}>
              <Text style={stylesDefault.formTitle}>Fale conosco</Text>
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Email para contato"
                style={stylesDefault.input}
              />
              <View style={stylesDefault.pickerContainer}>
                <Picker
                  style={stylesDefault.picker}
                  selectedValue={assunto}
                  onValueChange={(itemValue) => setAssunto(itemValue)}
                >
                  {aboutOptions.map((item, index) => (
                    <Picker.Item label={item} value={index} key={index} />
                  ))}
                </Picker>
              </View>
              <TextInput
                style={stylesDefault.textArea}
                value={descrição}
                onChangeText={(text) => setDescrição(text)}
                placeholder="Descrição"
                multiline
                numberOfLines={4}
              />
              <TouchableOpacity
                onPress={() => sendEmail()}
                style={stylesDefault.button}
              >
                <Text style={stylesDefault.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F3F3F3",
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    width: "100%",
  },
  containerRed: {
    backgroundColor: "red",
    height: 150,
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#85D151",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 200,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  insideContainer: {
    width: "100%",
    padding: 50,
  },
  joinButton: {
    backgroundColor: "#85d151",
    width: 200,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#85d151",
    marginTop: 20,
  },
  joinText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ContactUsScreen;

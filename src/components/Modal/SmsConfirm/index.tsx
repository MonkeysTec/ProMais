import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import api from "../../../services/api";
import { useAuth } from "../../../context/LoginContext";
import { stylesDefault } from "../../Styled";

interface ModalSms {
  email: string;
  code?: (code: string, company: string) => void;
  type: "EMAIL" | "SMS" | "LOGIN";
  phone: string;
  password?: string;
  onClose?: () => void;
}
export const ModalSMSConfirm = ({
  email,
  password,
  code,
  type,
  phone,
  onClose,
}: ModalSms) => {
  const { user, login, logout } = useAuth();

  const [modalVisible, setModalVisible] = useState(true);

  const [smscode, setSmsCode] = useState(["", "", "", ""]);

  const [warningType, setWarningType] = useState("");
  const [company, setCompany] = useState("");
  const [codeResponse, setCodeResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const [canSendSmsAgain, setCanSendSmsAgain] = useState(true);
  const handleCodeInvite = async () => {
    setLoading(true);
    if (type === "EMAIL") {
      try {
        const response = await api.get(`/tempcode/v1/toregister/${email}`);
        setCompany(response.data.company);
        setCodeResponse(response.data.b);
        const { data } = await api.post(`/tempcode/check/email/v1/`, {
          toEmail: email,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);

        return console.log(error);
      }
    }
    if (type === "SMS") {
      try {
        const { data } = await api.post(`/tempcode/check/number/v1/`, {
          toPhone: phone,
        });
        setLoading(false);
        setModalVisible(false);

        return data;
      } catch (error) {
        setLoading(false);

        return console.log(error);
      }
    }
    if (type === "LOGIN") {
      try {
        const { data } = await api.post("/users/system/login/v1", {
          email: email,
          password: password,
        });

        setLoading(false);
      } catch (error) {
        
      }
    }
  };
  useEffect(() => {
    //handleCodeInvite()
  }, []);

  const handleConfirmSms = async () => {
    if (type === "EMAIL") {
      try {
        const { data } = await api.post(
          `/tempcode/check/v1/${smscode.join("")}`,
          {
            type: "CHECK_EMAIL",
            email: email,
          },
        );
        code?.(codeResponse, company);
      } catch (error: any) {
        if (error.response.data.message === "Código incorreto.") {
          return setWarningType("WrongCode");
        }
        if (error.response.data.message) {
          return setWarningType("ManyTries");
        } else {
          return setWarningType("Block");
        }
      }
    } else if (type === "SMS") {
      try {
        const { data } = await api.post(
          `/tempcode/check/v1/${smscode.join("")}`,
          {
            type: "CHECK_NUMBER",
            phone: phone,
          },
        );
        setModalVisible(false);
      } catch (error) {
        
      }
    } else {
      try {
        const { data } = await api.post(
          `/users/system/login/validateotp/v1`,
          {
            email: email,
          },
          {
            headers: {
              temp_auth_code: smscode.join(""),
            },
          },
        );
        const user = await api.get("/users/me/v1");
        login(user.data);
        setModalVisible(false);
      } catch (error) {
        
      }
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
    <View style={stylesDefault.centeredView}>
      <View style={stylesDefault.modalView}>
        <View style={stylesDefault.modalHeader}>
          <Text style={stylesDefault.modalHeaderText}>Confirmação</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={35} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={stylesDefault.modalText}>
          Digite o código de segurança{" "}
          {type === "SMS"
            ? "enviado via SMS para o número de telefone informado"
            : "enviado para o email informado"}
        </Text>
        <View style={stylesDefault.warningContainer}>
          {warningType === "ManyTries" && (
            <View style={stylesDefault.warningBox}>
              <FontAwesome6 name="x" size={16} color="white" />
              <Text style={stylesDefault.warningText}>
                Você tentou 5 vezes. Aguarde 30 minutos para tentar novamente
              </Text>
            </View>
          )}
          {warningType === "WrongCode" && (
            <View style={stylesDefault.warningBox}>
              <FontAwesome6 name="x" size={16} color="white" />
              <Text style={stylesDefault.warningText}>Código incorreto</Text>
            </View>
          )}
          {warningType === "Block" && (
            <View style={stylesDefault.warningBox}>
              <FontAwesome6 name="x" size={16} color="white" />
              <Text style={stylesDefault.warningText}>
                Você foi bloqueado por excesso de tentativas. Entre em contato
                com o Suporte do Programa.
              </Text>
            </View>
          )}
        </View>
        <View style={stylesDefault.codeInputContainer}>
          <TextInput
            style={stylesDefault.codeInput}
            placeholder="CODE"
            maxLength={4}
            onChangeText={(text) => {
              const newSmsCode = [...smscode];
              for (let i = 0; i < text.length; i++) {
                newSmsCode[i] = text[i];
              }
              setSmsCode(newSmsCode);
            }}
          />
          {smscode.map((digit, index) => (
            <View
              key={index}
              style={[
                stylesDefault.codeDigit,
                { display: warningType ? "none" : "flex" },
              ]}
            >
              <Text style={stylesDefault.codeDigitText}>{digit}</Text>
            </View>
          ))}
          {warningType && (
            <View style={stylesDefault.lockIcon}>
              <MaterialCommunityIcons name="lock" size={24} color="grey" />
            </View>
          )}
        </View>
        <View style={stylesDefault.sendAgainContainer}>
          <TouchableOpacity
            style={stylesDefault.sendAgainButton}
            onPress={() => (loading ? {} : handleCodeInvite())}
          >
            <Text style={stylesDefault.sendAgainText}>
              {loading ? <ActivityIndicator /> : "Enviar novamente"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleConfirmSms}
          style={stylesDefault.confirmButton}
        >
          <Text style={stylesDefault.confirmButtonText}>Próximo</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
  /* Modal Styles */

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    top: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: 500,
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
});

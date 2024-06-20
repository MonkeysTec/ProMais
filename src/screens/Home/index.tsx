import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import { HomeNewInfo } from "../../components/Modal/HomeNewInfo";
import { useAuth } from "../../context/LoginContext";
import api from "../../services/api";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { stylesDefault } from "../../components/Styled";
const menuItems = [
  { title: "Movimentações loja", icon: "filetext1", modal: "PdvNetMovements" },
  { title: "Extrato", icon: "filetext1", modal: "Extract" },
  { title: "Codigo escaneado", icon: "scan1", modal: "ScannedCodes" },
  { title: 'Indique um "bipador"', icon: "user", path: "Bipador" },
  { title: "Conheça Total Energies", icon: "", path: "browserTotalEnergies" },
  { title: "LubConsult", icon: "tool", path: "lubconsult" },
  { title: "Como funciona", icon: "questioncircleo", path: "HowWorks" },
  { title: "FAQ", icon: "infocirlceo", path: "FAQ" },
];

const HomeScreen: React.FC = () => {
  const {
    userName,
    expoPushToken,
    sendPushNotification,
    selectPdvStore,
    pdvSelectedStore,
  } = useAuth();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [extractType, setExtractType] = useState("General" || "Reclaim");
  const [showPasswordSaldo, setShowPasswordSaldo] = useState(false);
  const [showPasswordExtratoQrCode, setShowPasswordExtratoQrCode] =
    useState(false);
  const [showPasswordExtratoPix, setShowPasswordExtratoPix] = useState(false);
  const [showPasswordCodesQrCode, setShowPasswordCodesQrCode] = useState(false);
  const [ExtractRescuesData, setExtractRescuesData] = useState([]);
  const [ExtractGeneralData, setExtractGeneralData] = useState([]);
  const [userMonetaryBalance, setUserMonetaryBalance] = useState("");
  const [isPdvFilho, setIsPdvFilho] = useState(false);
  const [PdvNetMovementData, setPdvNetMovementData] = useState([
    {
      cnpj: "1231231231",
      pdvName: "Troca de óleo - ipiranga",
      generatedValue: "100,00",
    },
    {
      cnpj: "7341234434",
      pdvName: "Troca de óleo - morumbi",
      generatedValue: "520,00",
    },
    {
      cnpj: "6342343445",
      pdvName: "Troca de óleo - zona norte",
      generatedValue: "325,00",
    },
  ]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const loadInBrowser = (url: any) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  const getBalance = async () => {
    const { data } = await api.get("/points/values/v1/");

    if (data.result.availableMonetayValue) {
      setUserMonetaryBalance(data.result.availableMonetayValue.toFixed(2));
    }
  };

  const getExtractGeneral = async () => {
    const { data } = await api.get("/points/v1/?onlyValid=true");

    if (data.results) {
      setExtractGeneralData(data.results);
    }
  };

  const getExtractRescues = async () => {
    try {
      const { data } = await api.get("/rescues/v1/");
      if (data.results) {
        setExtractRescuesData(data.results);
      }
    } catch (error) {
      console.log("Rescues: ", error);
    }
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  /* DEMONSTRATION BELOW PDF FILHO */
  const simulateUserBeingPdfFilho = () => {
    setIsPdvFilho(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getBalance();
      getExtractGeneral();
      getExtractRescues();
    }, 15000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (pdvSelectedStore === "") {
        navigation.navigate("SelectPdvStore");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [pdvSelectedStore]);

  useEffect(() => {
    getBalance();
    getExtractGeneral();
    getExtractRescues();
    /* DEMONSTRATION BELLOW PDF FILHO*/
    simulateUserBeingPdfFilho();
  }, []);

  useEffect(() => {
    if (expoPushToken) {
      handleNewsNotification();
    }
  }, [expoPushToken]);

  const handleNewsNotification = async () => {
    sendPushNotification({
      title: "Bem vindo ao App!",
      body: "Essa é a Home do Clube Pro +!",
    });
  };

  return (
    <View style={styles.container}>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
      </View>
      <View>
        <HomeNewInfo />
      </View>
      <View style={stylesDefault.ViewBody}>
        <View style={styles.cardBalance}>
          <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
            <Text style={stylesDefault.SmallText_Black_18_600}>Saldo</Text>
            <TouchableOpacity
              onPress={() => setShowPasswordSaldo(!showPasswordSaldo)}
            >
              <Entypo
                style={{ padding: 5 }}
                name={showPasswordSaldo ? "eye" : "eye-with-line"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {showPasswordSaldo && (
            <Text style={stylesDefault.SmallText_Black_30_600}>
              R$ {userMonetaryBalance.replace(/\./g, ",")}
            </Text>
          )}
          {showPasswordSaldo &&
            /* Correto para esconder o resgate ao pdv filho: !isPdvFilho */ isPdvFilho && (
              <TouchableOpacity
                onPress={() => navigation.navigate("Redeem")}
                style={styles.greenButton}
              >
                <FontAwesome
                  name="dollar"
                  size={20}
                  color="white"
                  style={styles.icon}
                />
                <Text style={styles.greenButtonText}>Resgatar agora</Text>
              </TouchableOpacity>
            )}
        </View>
      </View>
      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (
                item.path &&
                item.path !== "lubconsult" &&
                item.path !== "browserTotalEnergies"
              ) {
                navigation.navigate(item.path);
              }
              if (item.path === "lubconsult") {
                loadInBrowser(
                  "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult"
                );
              }
              if (item.modal) {
                setModalType(item.modal);
                setModalVisible(true);
              }
              if (item.path === "browserTotalEnergies") {
                loadInBrowser(
                  "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult"
                );
              }
            }}
          >
            {!item.icon ? (
              <View style={stylesDefault.View_Row_VCenter_W24_H12}>
                <Image
                  source={require("../../assets/IconTotalEnergies.png")}
                  style={stylesDefault.Image_W100_H100_Tint_Red}
                />
              </View>
            ) : (
              <AntDesign name={item.icon} size={24} color="red" />
            )}
            <Text style={styles.menuItemText}>{item.title}</Text>
            <View
              style={
                stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
              }
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Products")}
        >
          <Feather name="box" size={24} color="red" />
          <Text style={styles.menuItemText}>Produtos participantes</Text>
          <View
            style={
              stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
            }
          >
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>
        {/* DEMONSTRATION STORE TO BEEP */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("SelectPdvStore")}
        >
         <MaterialIcons name="device-unknown" size={24} color="red" />
          <Text style={styles.menuItemText}>
            Loja selecionada:{" "}
            <Text style={{ fontWeight: "700" }}>{pdvSelectedStore}</Text>
          </Text>
          <View
            style={
              stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
            }
          >
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>
        {modalVisible ? (
          <View>
            {modalType === "Extract" ? (
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={styles.modalExtractView}>
                      <TouchableOpacity
                        style={{ elevation: 2 }}
                        onPress={closeModal}
                      >
                        <Ionicons name="close" size={24} color="black" />
                      </TouchableOpacity>
                      {extractType === "General" ? (
                        <View style={styles.eyeViewStyles}>
                          <TouchableOpacity
                            onPress={() =>
                              setShowPasswordExtratoQrCode(
                                !showPasswordExtratoQrCode
                              )
                            }
                          >
                            <Entypo
                              name={
                                showPasswordExtratoQrCode
                                  ? "eye"
                                  : "eye-with-line"
                              }
                              size={24}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      ) : null}
                      {extractType === "Reclaim" ? (
                        <View style={styles.eyeViewStyles}>
                          <TouchableOpacity
                            onPress={() =>
                              setShowPasswordExtratoPix(!showPasswordExtratoPix)
                            }
                          >
                            <Entypo
                              name={
                                showPasswordExtratoQrCode
                                  ? "eye"
                                  : "eye-with-line"
                              }
                              size={24}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        borderBottomColor: "grey",
                        borderBottomWidth: 1,
                        width: "100%",
                        justifyContent: "center",
                        gap: 30,
                      }}
                    >
                      <TouchableOpacity
                        style={
                          extractType !== "General"
                            ? styles.notselectedExtractButton
                            : styles.selectedExtractButton
                        }
                        onPress={() => setExtractType("General")}
                      >
                        <Text
                          style={
                            extractType !== "General"
                              ? styles.notselectedExtractButtonText
                              : styles.selectedExtractButtonText
                          }
                        >
                          Geral
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={
                          extractType !== "Reclaim"
                            ? styles.notselectedExtractButton
                            : styles.selectedExtractButton
                        }
                        onPress={() => setExtractType("Reclaim")}
                      >
                        <Text
                          style={
                            extractType !== "Reclaim"
                              ? styles.notselectedExtractButtonText
                              : styles.selectedExtractButtonText
                          }
                        >
                          Resgate
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalViewContainer}>
                      {extractType === "General" ? (
                        <ScrollView style={styles.scrollViewContainer}>
                          {ExtractGeneralData.map((item, index) => (
                            <View
                              key={index}
                              style={styles.modalViewColumnContainer}
                            >
                              <View style={{ flexDirection: "column" }}>
                                <Text style={styles.modalDarkMainText}>
                                  {formatDate(item.created_at)}
                                </Text>
                                <Text style={styles.modalSmallGreyText}>
                                  QR Code:{" "}
                                  {showPasswordExtratoQrCode
                                    ? item.qrcode
                                    : "**************"}
                                </Text>
                              </View>
                              <Text style={styles.modalGreenText}>
                                R${" "}
                                {showPasswordExtratoQrCode
                                  ? item.totalMonetaryValue.toFixed(2)
                                  : "*********"}
                              </Text>
                            </View>
                          ))}
                        </ScrollView>
                      ) : null}
                      {extractType === "Reclaim" ? (
                        <ScrollView style={styles.scrollViewContainer}>
                          {ExtractRescuesData.map((item, index) => (
                            <View
                              key={index}
                              style={styles.modalViewColumnContainer}
                            >
                              <View style={{ flexDirection: "column" }}>
                                <Text style={styles.modalSmallGreyText}>
                                  {formatDate(item.created_at)}
                                </Text>
                                <Text style={styles.modalDarkMainText}>
                                  Transferência
                                </Text>
                                <Text style={styles.modalSmallGreyText}>
                                  Chave Pix:{" "}
                                  {showPasswordExtratoPix
                                    ? item.pixKey
                                    : "*********"}
                                </Text>
                                <Text style={styles.modalSmallGreyText}>
                                  Status: {item.paymentStatusName}
                                </Text>
                              </View>
                              <Text style={styles.modalGreenText}>
                                R${" "}
                                {showPasswordExtratoPix
                                  ? item.totalMonetaryValue.toFixed(2)
                                  : "*********"}
                              </Text>
                            </View>
                          ))}
                        </ScrollView>
                      ) : null}
                    </View>
                  </View>
                </View>
              </Modal>
            ) : null}
            {modalType === "ScannedCodes" ? (
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <TouchableOpacity
                        style={{ elevation: 2 }}
                        onPress={closeModal}
                      >
                        <Ionicons name="close" size={24} color="black" />
                      </TouchableOpacity>
                      <View style={styles.eyeViewStyles}>
                        <TouchableOpacity
                          onPress={() =>
                            setShowPasswordCodesQrCode(!showPasswordCodesQrCode)
                          }
                        >
                          <Entypo
                            name={
                              showPasswordCodesQrCode ? "eye" : "eye-with-line"
                            }
                            size={24}
                            color="black"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        marginBottom: 20,
                      }}
                    >
                      <Text style={{ fontWeight: "400", fontSize: 16 }}>
                        Códigos escaneados
                      </Text>
                    </View>
                    <View style={styles.modalViewContainer}>
                      <ScrollView style={styles.scrollViewContainer}>
                        {ExtractGeneralData.map((item, index) => (
                          <View
                            key={index}
                            style={styles.modalViewColumnContainer}
                          >
                            <View style={{ flexDirection: "column" }}>
                              <Text style={styles.modalSmallGreyText}>
                                Escaneado em: {formatDate(item.created_at)}
                              </Text>
                              <Text style={styles.modalDarkMainText}>
                                {item.productaName}
                              </Text>
                              <Text style={styles.modalSmallGreyText}>
                                QR Code:{" "}
                                {showPasswordCodesQrCode
                                  ? item.qrcode
                                  : "******"}
                              </Text>
                            </View>
                            <Text style={styles.modalGreenText}>
                              {showPasswordCodesQrCode
                                ? "+" + item.totalPoints.toFixed(2)
                                : "***"}{" "}
                              pts
                            </Text>
                          </View>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </Modal>
            ) : null}
            {modalType === "PdvNetMovements" ? (
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <TouchableOpacity
                        style={{ elevation: 2 }}
                        onPress={closeModal}
                      >
                        <Ionicons name="close" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        marginBottom: 20,
                      }}
                    >
                      <Text style={{ fontWeight: "400", fontSize: 16 }}>
                        Movimentações por PDV
                      </Text>
                    </View>
                    <View style={styles.modalViewContainer}>
                      <View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text>CNPJ</Text>
                        <Text>NOME PDV</Text>
                        <Text>VALOR GERADO</Text>
                      </View>
                      <ScrollView style={styles.scrollViewContainerPdvNet}>
                        {PdvNetMovementData.map((item, index) => (
                          <View
                            key={index}
                            style={styles.modalViewColumnContainerPdvNet}
                          >
                            <View
                              style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              <Text style={{}}>{item.cnpj}</Text>
                              <Text style={{}}>{item.pdvName}</Text>
                              <Text style={{}}>{item.generatedValue}</Text>
                            </View>
                          </View>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </Modal>
            ) : null}
          </View>
        ) : null}
      </ScrollView>
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
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    width: "80%",
  },
  containerRed: {
    backgroundColor: "red",
    height: 120,
    width: "100%",
    paddingHorizontal: 30,
    marginBottom: 40,
    justifyContent: "space-between",
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  cardBalance: {
    width: "100%",
    backgroundColor: "white",
    height: "auto",
    borderRadius: 8,
    marginTop: -30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,

    gap: 20,
  },
  text_subTitleSize: {
    fontSize: 14,
  },
  text_subTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    paddingLeft: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  underline: {
    height: 1,
    backgroundColor: "black",
    width: "100%",
    marginTop: 4,
  },
  greenButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#85D151",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 200,
    width: "auto",
  },
  icon: {
    marginRight: 10,
  },
  greenButtonText: {
    color: "white",
    fontSize: 16,
  },
  menu: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  menuItemChooseStoreBeep: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  menuItemIcon: {
    marginRight: 10,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  outline1: { color: "#000000", left: -1, top: -1 },
  imageBig: {
    width: "80%",
    resizeMode: "cover",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8,
  },

  /* Modal Styles */

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    top: 240,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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
    width: "100%",
    height: "40%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonmodal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedExtractButton: {
    padding: 10,
    borderTopColor: "grey",
    borderTopWidth: 1,
    borderLeftColor: "grey",
    borderLeftWidth: 1,
    borderRightColor: "grey",
    borderRightWidth: 1,
    borderBottomColor: "white",
    borderBottomWidth: 4,
    top: 4,
    borderRadius: 5,
  },
  selectedExtractButtonText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  notselectedExtractButtonText: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
  notselectedExtractButton: {
    padding: 10,
  },
  modalSmallGreyText: {
    color: "#a1a1a1",
    fontSize: 12,
  },
  modalDarkMainText: {
    color: "black",
    fontSize: 16,
    maxWidth: 200,
  },
  modalGreenText: {
    color: "#85D151",
    fontSize: 16,
    fontWeight: "800",
  },
  modalViewColumnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    padding: 10,
  },
  modalViewColumnContainerPdvNet: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  eyeViewStyles: {
    position: "absolute",
    top: 0,
    right: 40,
  },
  modalViewContainer: {
    flexDirection: "column",
    gap: 10,
  },
  scrollViewContainer: {
    maxHeight: "auto",
    marginBottom: 50,
  },
  scrollViewContainerPdvNet: {
    maxHeight: "auto",
    marginBottom: 50,
  },
  modalExtractView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default HomeScreen;

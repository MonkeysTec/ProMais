import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  Linking,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import { HomeNewInfo } from "../../components/Modal/HomeNewInfo";
import { useAuth } from "../../context/LoginContext";
import api from "../../services/api";
import Feather from "@expo/vector-icons/Feather";
import { stylesDefault } from "../../components/Styled";
import { Container, RedViewHeaderContainer, CardBalance, GreenButton, GreenButtonText, MenuItem, MenuItemText, CenteredView, ModalView, EyeViewStyles, ModalViewContainer, ModalViewColumnContainer, ModalSmallGreyText, ModalDarkMainText, ModalGreenText } from "./Styled";

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
  const [showPasswordExtratoQrCode, setShowPasswordExtratoQrCode] = useState(false);
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
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
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
    return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
  };

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
    if (pdvSelectedStore !== "") {
      getBalance();
      getExtractGeneral();
      getExtractRescues();
      simulateUserBeingPdfFilho();
    } else {
      navigation.navigate("SelectPdvStore");
    }
  }, [pdvSelectedStore]);

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
    <Container>
      <RedViewHeaderContainer>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <RedViewFirstText>Olá</RedViewFirstText>
          <RedViewSecondText>{userName}</RedViewSecondText>
        </View>
      </RedViewHeaderContainer>
      <View>
        <HomeNewInfo />
      </View>
      <ViewBody>
        <CardBalance>
          <ViewRowHSpaceBetweenVCenterW100>
            <SmallTextBlack18600>Saldo</SmallTextBlack18600>
            <TouchableOpacity onPress={() => setShowPasswordSaldo(!showPasswordSaldo)}>
              <Entypo style={{ padding: 5 }} name={showPasswordSaldo ? "eye" : "eye-with-line"} size={24} color="black" />
            </TouchableOpacity>
          </ViewRowHSpaceBetweenVCenterW100>
          {showPasswordSaldo && (
            <SmallTextBlack30600>
              R$ {userMonetaryBalance.replace(/\./g, ",")}
            </SmallTextBlack30600>
          )}
          {showPasswordSaldo && !isPdvFilho && (
            <GreenButton onPress={() => navigation.navigate("Redeem")}>
              <FontAwesome name="dollar" size={20} color="white" style={styles.icon} />
              <GreenButtonText>Resgatar agora</GreenButtonText>
            </GreenButton>
          )}
        </CardBalance>
      </ViewBody>
      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onPress={() => {
            if (item.path && item.path !== "lubconsult" && item.path !== "browserTotalEnergies") {
              navigation.navigate(item.path);
            }
            if (item.path === "lubconsult") {
              loadInBrowser("https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult");
            }
            if (item.modal) {
              setModalType(item.modal);
              setModalVisible(true);
            }
            if (item.path === "browserTotalEnergies") {
              loadInBrowser("https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult");
            }
          }}>
            {!item.icon ? (
              <ViewRowVCenterW24H12>
                <Image source={require("../../assets/IconTotalEnergies.png")} style={stylesDefault.Image_W100_H100_Tint_Red} />
              </ViewRowVCenterW24H12>
            ) : (
              <AntDesign name={item.icon} size={24} color="red" />
            )}
            <MenuItemText>{item.title}</MenuItemText>
            <ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
              <Ionicons name="chevron-forward" size={24} color="white" />
            </ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
          </MenuItem>
        ))}
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Products")}>
          <Feather name="box" size={24} color="red" />
          <MenuItemText>Produtos participantes</MenuItemText>
          <ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("SelectPdvStore")}>
          <Feather name="box" size={24} color="red" />
          <MenuItemText>
            Loja selecionada: <Text style={{ fontWeight: "700" }}>{pdvSelectedStore}</Text>
          </MenuItemText>
          <ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
            <Ionicons name="chevron-forward" size={24} color="white" />
          </ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
        </TouchableOpacity>
        {modalVisible && (
          <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
            <CenteredView>
              <ModalView>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "flex-end" }}>
                  <TouchableOpacity style={{ elevation: 2 }} onPress={closeModal}>
                    <Ionicons name="close" size={24} color="black" />
                  </TouchableOpacity>
                  <EyeViewStyles>
                    <TouchableOpacity onPress={() => setShowPasswordCodesQrCode(!showPasswordCodesQrCode)}>
                      <Entypo name={showPasswordCodesQrCode ? "eye" : "eye-with-line"} size={24} color="black" />
                    </TouchableOpacity>
                  </EyeViewStyles>
                </View>
                <View style={{ flexDirection: "row", width: "100%", marginBottom: 20 }}>
                  <Text style={{ fontWeight: "400", fontSize: 16 }}>Códigos escaneados</Text>
                </View>
                <ModalViewContainer>
                  <ScrollView style={styles.scrollViewContainer}>
                    {ExtractGeneralData.map((item, index) => (
                      <ModalViewColumnContainer key={index}>
                        <View style={{ flexDirection: "column" }}>
                          <ModalSmallGreyText>Escaneado em: {formatDate(item.created_at)}</ModalSmallGreyText>
                          <ModalDarkMainText>{item.productaName}</ModalDarkMainText>
                          <ModalSmallGreyText>QR Code: {showPasswordCodesQrCode ? item.qrcode : "******"}</ModalSmallGreyText>
                        </View>
                        <ModalGreenText>
                          {showPasswordCodesQrCode ? "+" + item.totalPoints.toFixed(2) : "***"} pts
                        </ModalGreenText>
                      </ModalViewColumnContainer>
                    ))}
                  </ScrollView>
                </ModalViewContainer>
              </ModalView>
            </CenteredView>
          </Modal>
        )}
      </ScrollView>
    </Container>
  );
};
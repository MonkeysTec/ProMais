import React, { useEffect, useState } from "react";
import { Linking, View, Modal, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, AntDesign, FontAwesome, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeNewInfo } from "../../components/Modal/HomeNewInfo";
import { useAuth } from "../../context/LoginContext";
import api from "../../services/api";
import { stylesDefault } from "../../components/Styled";
import * as S from './styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const menuItems = [
  { title: "Movimentações loja", icon: "finance", modal: "PdvNetMovements" },
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
    pdvSelectedStore,
    typeAccountSelected,
    sendPushNotification,
    selectPdvStore,
  } = useAuth();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [extractType, setExtractType] = useState("General");
  const [showPasswordSaldo, setShowPasswordSaldo] = useState(false);
  const [showPasswordExtratoQrCode, setShowPasswordExtratoQrCode] = useState(false);
  const [showPasswordExtratoPix, setShowPasswordExtratoPix] = useState(false);
  const [showPasswordCodesQrCode, setShowPasswordCodesQrCode] = useState(false);
  const [ExtractRescuesData, setExtractRescuesData] = useState([]);
  const [ExtractGeneralData, setExtractGeneralData] = useState([]);
  const [userMonetaryBalance, setUserMonetaryBalance] = useState("");
 /* New Demonstration PdvNet */
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
      console.error("Couldn't load page", err),
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
      if (typeAccountSelected === "") {
        navigation.navigate("SelectTypeAccount");
      } else {
        if (pdvSelectedStore === "") {
          navigation.navigate("SelectPdvStore");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [pdvSelectedStore, typeAccountSelected]);

  useEffect(() => {
    getBalance();
    getExtractGeneral();
    getExtractRescues();
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
    <S.Container>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end", paddingTop:15 }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
          <Text style={stylesDefault.RedViewSecondText}>({typeAccountSelected})</Text>
        </View>
      </View>
      <View>
        <HomeNewInfo />
      </View>
      <View style={stylesDefault.ViewBody}>
        <S.CardBalance>
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
            typeAccountSelected === "Rede" && (
              <S.GreenButton
                onPress={() => navigation.navigate("Redeem")}
              >
                <FontAwesome
                  name="dollar"
                  size={20}
                  color="white"
                  style={S.icon}
                />
                <S.GreenButtonText>  Resgatar agora</S.GreenButtonText>
              </S.GreenButton>
            )}
        </S.CardBalance>
      </View>
      <S.Menu>
        {menuItems.map((item, index) => (
          <S.MenuItem
            key={index}
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
                  "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult",
                );
              }
              if (item.modal) {
                setModalType(item.modal);
                setModalVisible(true);
              }
              if (item.path === "browserTotalEnergies") {
                loadInBrowser(
                  "https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult",
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
            ) : (item.icon === "finance" ? 
              <MaterialCommunityIcons name="finance" size={24} color="red" />
                  :
              <AntDesign name={item.icon} size={24} color="red" />
            )}
            <S.MenuItemText>{item.title}</S.MenuItemText>
            <View
              style={
                stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
              }
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
          </S.MenuItem>
        ))}
        <S.MenuItem
          onPress={() => navigation.navigate("Products")}
        >
          <Feather name="box" size={24} color="red" />
          <S.MenuItemText>Produtos participantes</S.MenuItemText>
          <View
            style={
              stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
            }
          >
            <Ionicons name="chevron-forward" size={24} color="white" />
          </View>
        </S.MenuItem>
        {typeAccountSelected === "Rede" &&
          <S.MenuItem
            onPress={() => navigation.navigate("SelectPdvStore")}
          >
            <MaterialIcons name="phone-android" size={24} color="red" />
            <S.MenuItemText>
              Loja selecionada:{" "}
              <Text style={{ fontWeight: "700" }}>{pdvSelectedStore}</Text>
            </S.MenuItemText>
            <View
              style={
                stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
              }
            >
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
          </S.MenuItem>
        }
        {modalVisible ? (
          <View>
            {modalType === "Extract" ? (
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
              >
                <S.ModalCenteredView>
                  <S.ModalView>
                    <S.ModalExtractView>
                      <TouchableOpacity
                        style={{ elevation: 2 }}
                        onPress={closeModal}
                      >
                        <Ionicons name="close" size={24} color="black" />
                      </TouchableOpacity>
                      {extractType === "General" ? (
                        <S.EyeViewStyles>
                          <TouchableOpacity
                            onPress={() =>
                              setShowPasswordExtratoQrCode(
                                !showPasswordExtratoQrCode,
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
                        </S.EyeViewStyles>
                      ) : null}
                      {extractType === "Reclaim" ? (
                        <S.EyeViewStyles>
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
                        </S.EyeViewStyles>
                      ) : null}
                    </S.ModalExtractView>
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
                        onPress={() => setExtractType("General")}
                      >
                        {extractType !== "General" ?
                          <S.NotSelectedExtractButtonText>
                            Geral
                          </S.NotSelectedExtractButtonText>
                          :
                          <S.SelectedExtractButtonText>
                            Geral
                          </S.SelectedExtractButtonText>
                        }

                      </TouchableOpacity>
                      <TouchableOpacity
                        style={
                          extractType !== "Reclaim"
                            ? S.NotSelectedExtractButton
                            : S.SelectedExtractButton
                        }
                        onPress={() => setExtractType("Reclaim")}
                      >
                        {extractType !== "Reclaim" ?
                          <S.NotSelectedExtractButtonText>
                            Resgate
                          </S.NotSelectedExtractButtonText>
                          :
                          <S.SelectedExtractButtonText>
                            Resgate
                          </S.SelectedExtractButtonText>
                        }
                      </TouchableOpacity>
                    </View>
                    <S.ModalViewContainer>
                      {extractType === "General" ? (
                        <S.ScrollViewContainer>
                          {ExtractGeneralData.map((item, index) => (
                            <S.ModalViewColumnContainer
                              key={index}
                            >
                              <View style={{ flexDirection: "column" }}>
                                <S.ModalDarkMainText>
                                  {formatDate(item.created_at)}
                                </S.ModalDarkMainText>
                                <S.ModalSmallGreyText>
                                  QR Code:{" "}
                                  {showPasswordExtratoQrCode
                                    ? item.qrcode
                                    : "**************"}
                                </S.ModalSmallGreyText>
                              </View>
                              <S.ModalGreenText>
                                R${" "}
                                {showPasswordExtratoQrCode
                                  ? item.totalMonetaryValue.toFixed(2)
                                  : "*********"}
                              </S.ModalGreenText>
                            </S.ModalViewColumnContainer>
                          ))}
                        </S.ScrollViewContainer>
                      ) : null}
                      {extractType === "Reclaim" ? (
                        <S.ScrollViewContainer>
                          {ExtractRescuesData.map((item, index) => (
                            <S.ModalViewColumnContainer
                              key={index}
                            >
                              <View style={{ flexDirection: "column" }}>
                                <S.ModalSmallGreyText>
                                  {formatDate(item.created_at)}
                                </S.ModalSmallGreyText>
                                <S.ModalDarkMainText>
                                  Transferência
                                </S.ModalDarkMainText>
                                <S.ModalSmallGreyText>
                                  Chave Pix:{" "}
                                  {showPasswordExtratoPix
                                    ? item.pixKey
                                    : "*********"}
                                </S.ModalSmallGreyText>
                                <S.ModalSmallGreyText>
                                  Status: {item.paymentStatusName}
                                </S.ModalSmallGreyText>
                              </View>
                              <S.ModalGreenText>
                                R${" "}
                                {showPasswordExtratoPix
                                  ? item.totalMonetaryValue.toFixed(2)
                                  : "*********"}
                              </S.ModalGreenText>
                            </S.ModalViewColumnContainer>
                          ))}
                        </S.ScrollViewContainer>
                      ) : null}
                    </S.ModalViewContainer>
                  </S.ModalView>
                </S.ModalCenteredView>
              </Modal>
            ) : null}
            {modalType === "ScannedCodes" ? (
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
              >
                <S.ModalCenteredView>
                  <S.ModalView>
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
                      <S.EyeViewStyles>
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
                      </S.EyeViewStyles>
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
                    <S.ModalViewContainer>
                      <S.ScrollViewContainer>
                        {ExtractGeneralData.map((item, index) => (
                          <S.ModalViewColumnContainer
                            key={index}
                          >
                            <View style={{ flexDirection: "column" }}>
                              <S.ModalSmallGreyText>
                                Escaneado em: {formatDate(item.created_at)}
                              </S.ModalSmallGreyText>
                              <S.ModalDarkMainText>
                                {item.productaName}
                              </S.ModalDarkMainText>
                              <S.ModalSmallGreyText>
                                QR Code:{" "}
                                {showPasswordCodesQrCode
                                  ? item.qrcode
                                  : "******"}
                              </S.ModalSmallGreyText>
                            </View>
                            <S.ModalGreenText>
                              {showPasswordCodesQrCode
                                ? "+" + item.totalPoints.toFixed(2)
                                : "***"}{" "}
                              pts
                            </S.ModalGreenText>
                          </S.ModalViewColumnContainer>
                        ))}
                      </S.ScrollViewContainer>
                    </S.ModalViewContainer>
                  </S.ModalView>
                </S.ModalCenteredView>
              </Modal>
            ) : null}
            {modalType === "PdvNetMovements" ? (
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
              >
                <S.ModalCenteredView>
                  <S.ModalView>
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
                    <S.ModalViewContainer>
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
                      <S.ScrollViewContainer>
                        {PdvNetMovementData.map((item, index) => (
                          <S.ModalViewColumnContainer
                            key={index}
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
                          </S.ModalViewColumnContainer>
                        ))}
                      </S.ScrollViewContainer>
                    </S.ModalViewContainer>
                  </S.ModalView>
                </S.ModalCenteredView>
              </Modal>
            ) : null}
          </View>
        ) : null}
      </S.Menu>
    </S.Container>
  );
};

export default HomeScreen;
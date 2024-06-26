import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal, Linking, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ModalSMSConfirm } from '../../components/Modal/SmsConfirm';
import { useNavigation } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import { HomeNewInfo } from '../../components/Modal/HomeNewInfo';
import { useAuth } from '../../context/LoginContext';
import DeviceInfo from 'react-native-device-info';
import api from '../../services/api';
import Feather from '@expo/vector-icons/Feather';
const menuItems = [
  { title: 'Extrato', icon: 'filetext1', modal: 'Extract' },
  { title: 'Codigo escaneado', icon: 'scan1', modal: 'ScannedCodes' },
  { title: 'Indique um "bipador"', icon: 'user', path: 'Bipador' },
  { title: 'Conheça Total Energies', icon: '', path: 'browserTotalEnergies' },
  { title: 'LubConsult', icon: 'tool', path: 'lubconsult' },
  { title: 'Como funciona', icon: 'questioncircleo', path: 'HowWorks' },
  { title: 'FAQ', icon: 'infocirlceo', path: 'FAQ' },
];
import * as Notifications from 'expo-notifications'
import { sendPushNotification, useNotifications } from '../Notification';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen: React.FC = () => {
  const { user, userName,expoPushToken, login, logout, sendPushNotification } = useAuth();
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [extractType, setExtractType] = useState('General' || 'Reclaim')
  const [showPasswordSaldo, setShowPasswordSaldo] = useState(false);
  const [showPasswordExtratoQrCode, setShowPasswordExtratoQrCode] = useState(false);
  const [showPasswordExtratoPix, setShowPasswordExtratoPix] = useState(false);
  const [showPasswordCodesQrCode, setShowPasswordCodesQrCode] = useState(false);
  const [ExtractRescuesData, setExtractRescuesData] = useState([])
  const [ExtractGeneralData, setExtractGeneralData] = useState([])
  const [userMonetaryBalance, setUserMonetaryBalance] = useState('');
  const [name, setName] = useState('');

  const closeModal = () => {
    setModalVisible(false);
  };

  const loadInBrowser = (url: any) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const getBalance = async () => {
    const { data } = await api.get('/points/values/v1/');

    if (data.result.availableMonetayValue) {
      setUserMonetaryBalance(data.result.availableMonetayValue.toFixed(2));
    }
  }

  const getExtractGeneral = async () => {

    const { data } = await api.get('/points/v1/?onlyValid=true');

    if (data.results) {
      setExtractGeneralData(data.results);
    }
  }

  const getExtractRescues = async () => {
    try {
      const { data } = await api.get('/rescues/v1/');
      if (data.results) {
        setExtractRescuesData(data.results);
      }
    } catch (error) {
      console.log('Rescues: ', error)
    }

  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();


    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
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
    getBalance();
    getExtractGeneral();
    getExtractRescues();
    
  }, [])
  useEffect(() => {
    if(expoPushToken){
      handleNewsNotification();
    }
  },[expoPushToken])


  const handleNewsNotification = async () => {
   
    sendPushNotification({ title: 'Bem vindo ao App!', body: 'Essa é a Home do Clube Pro +!' })

  }
  const handleCallNotification = async () => {
    sendPushNotification({ title: 'Você clicou no botao da home!', body: 'Isso é um teste' })

  }
  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá {userName}</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      <View>
        <HomeNewInfo />
      </View>
      <View style={styles.cardBalance}>
        <View style={{ position: 'absolute', top: 10, right: 10 }} >
          <TouchableOpacity onPress={() => setShowPasswordSaldo(!showPasswordSaldo)}>
            <Entypo name={showPasswordSaldo ? 'eye' : 'eye-with-line'} size={24} color="black" />
          </TouchableOpacity>
          <Button onPress={handleCallNotification} title='chamar notificacao' />

        </View>

        <Text style={{ color: 'black', fontWeight: '600' }}>Saldo</Text>
        <Text style={{ color: 'black', fontWeight: '600', fontSize: 30 }}>
          {showPasswordSaldo ? userMonetaryBalance : '********'}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="filetext1" size={24} color="#A6A6A6" />
          <TouchableOpacity onPress={() => {
            setModalType('Extract');
            setExtractType('General')
            setModalVisible(true);
          }} style={styles.button}>
            <Text style={styles.buttonText}>Ver extrato</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() =>
          navigation.navigate('Redeem')
        } style={styles.greenButton}>
          <FontAwesome name="dollar" size={20} color="white" style={styles.icon} />
          <Text style={styles.greenButtonText}>Resgatar agora</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/home-img.png')} style={[styles.outline1, styles.imageBig]} />
      <Text style={styles.text}>Clube Pro+. O clube de fidelidade da Total Energies.</Text>

      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index} style={styles.menuItem}
            onPress={() => {
              if (item.path && item.path !== 'lubconsult' && item.path !== 'browserTotalEnergies') {
                navigation.navigate(item.path)
              }
              if (item.path === 'lubconsult') {
                loadInBrowser('https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult')
              }
              if (item.modal) {
                setModalType(item.modal)
                setModalVisible(true)
              }
              if (item.path === 'browserTotalEnergies') {
                loadInBrowser('https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult')
              }
            }}>
            {!item.icon ?
              <View style={{ alignItems: 'center', width: 24, height: 12 }} >
                <Image source={require('../../assets/IconTotalEnergies.png')}
                  style={{ width: '100%', height: '100%' }} />
              </View> : <AntDesign name={item.icon} size={24} color="#000" />}
            <Text style={styles.menuItemText}>{item.title}</Text>

            <Ionicons name="chevron-forward" size={24} color="#000" />
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Products')}
        >
          <Feather name="box" size={24} color="black" />
          <Text style={styles.menuItemText}>Produtos participantes</Text>
        </TouchableOpacity>
        {modalVisible ?
          <View>
            {modalType === 'Extract' ?
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
                        onPress={closeModal}>
                        <Ionicons name="close" size={24} color="grey" />
                      </TouchableOpacity>
                      {extractType === 'General' ?
                        <View style={styles.eyeViewStyles} >
                          <TouchableOpacity onPress={() => setShowPasswordExtratoQrCode(!showPasswordExtratoQrCode)}>
                            <Entypo name={showPasswordExtratoQrCode ? 'eye' : 'eye-with-line'} size={24} color="black" />
                          </TouchableOpacity>
                        </View> : null}
                      {extractType === 'Reclaim' ?
                        <View style={styles.eyeViewStyles} >
                          <TouchableOpacity onPress={() => setShowPasswordExtratoPix(!showPasswordExtratoPix)}>
                            <Entypo name={showPasswordExtratoQrCode ? 'eye' : 'eye-with-line'} size={24} color="black" />
                          </TouchableOpacity>
                        </View> : null}
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', justifyContent: 'center', gap: 30 }}>
                      <TouchableOpacity
                        style={extractType !== 'General' ?
                          styles.notselectedExtractButton :
                          styles.selectedExtractButton}
                        onPress={() => setExtractType('General')} >
                        <Text style={extractType !== 'General' ?
                          styles.notselectedExtractButtonText :
                          styles.selectedExtractButtonText}>Geral</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={extractType !== 'Reclaim' ? styles.notselectedExtractButton : styles.selectedExtractButton}
                        onPress={() => setExtractType('Reclaim')}  >
                        <Text style={extractType !== 'Reclaim' ?
                          styles.notselectedExtractButtonText :
                          styles.selectedExtractButtonText}>Resgate</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalViewContainer} >
                      {extractType === 'General' ?
                        <ScrollView style={styles.scrollViewContainer} >
                          {ExtractGeneralData.map((item, index) => (
                            <View key={index} style={styles.modalViewColumnContainer}>
                              <View style={{ flexDirection: 'column' }} >
                                <Text style={styles.modalDarkMainText}>
                                  {formatDate(item.created_at)}</Text>
                                <Text style={styles.modalSmallGreyText} >
                                  QR Code: {showPasswordExtratoQrCode ? item.qrcode : "**************"}</Text>
                              </View>
                              <Text
                                style={styles.modalGreenText}>
                                R$ {showPasswordExtratoQrCode ? item.totalMonetaryValue.toFixed(2) : "*********"}</Text>
                            </View>
                          ))}
                        </ScrollView> : null}
                      {extractType === 'Reclaim' ?
                        <ScrollView style={styles.scrollViewContainer} >
                          {ExtractRescuesData.map((item, index) => (
                            <View key={index} style={styles.modalViewColumnContainer}>
                              <View style={{ flexDirection: 'column' }} >
                                <Text style={styles.modalSmallGreyText}>{formatDate(item.created_at)}</Text>
                                <Text style={styles.modalDarkMainText}>
                                  Transferência</Text>
                                <Text style={styles.modalSmallGreyText} >
                                  Chave Pix: {showPasswordExtratoPix ? item.pixKey : "*********"}</Text>
                                <Text style={styles.modalSmallGreyText} >
                                  Status: {item.paymentStatusName}</Text>
                              </View>
                              <Text style={styles.modalGreenText}>
                                R$ {showPasswordExtratoPix ? item.totalMonetaryValue.toFixed(2) : "*********"}</Text>
                            </View>
                          ))}
                        </ScrollView> : null}
                    </View>
                  </View>
                </View>
              </Modal>
              : null}
            {modalType === 'ScannedCodes' ?
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
                      <TouchableOpacity
                        style={{ elevation: 2 }}
                        onPress={closeModal}>
                        <Ionicons name="close" size={24} color="grey" />
                      </TouchableOpacity>
                      <View style={styles.eyeViewStyles} >
                        <TouchableOpacity onPress={() => setShowPasswordCodesQrCode(!showPasswordCodesQrCode)}>
                          <Entypo name={showPasswordCodesQrCode ? 'eye' : 'eye-with-line'} size={24} color="black" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', marginBottom: 20 }}>
                      <Text style={{ fontWeight: '400', fontSize: 16 }} >
                        Códigos escaneados
                      </Text>
                    </View>
                    <View style={styles.modalViewContainer} >
                      <ScrollView style={styles.scrollViewContainer} >
                        {ExtractGeneralData.map((item, index) => (
                          <View key={index} style={styles.modalViewColumnContainer}>
                            <View style={{ flexDirection: 'column' }} >
                              <Text style={styles.modalSmallGreyText} >Escaneado em: {formatDate(item.created_at)}</Text>
                              <Text style={styles.modalDarkMainText}>{item.productaName}</Text>
                              <Text style={styles.modalSmallGreyText} >QR Code: {showPasswordCodesQrCode ? item.qrcode : '******'}</Text>
                            </View>
                            <Text style={styles.modalGreenText}>
                              {showPasswordCodesQrCode ? '+' + item.totalPoints.toFixed(2) : '***'} pontos</Text>
                          </View>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </Modal>
              : null}
          </View>
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F3F3'
  }, text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    width: '80%'
  },
  containerRed: {
    backgroundColor: 'red',
    height: 200,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBalance: {
    width: '80%',
    backgroundColor: 'white',
    height: 230,
    borderRadius: 8,
    marginTop: -70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 30,
    paddingLeft: 20,
    gap: 20,
  },
  text_subTitleSize: {
    fontSize: 14
  },
  text_subTitle: {
    marginTop: 10,
    fontWeight: "bold"
  },
  button: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  buttonText: {
    color: '#A6A6A6',
    fontSize: 16,
  },
  underline: {
    height: 1,
    backgroundColor: '#A6A6A6',
    width: '100%',
    marginTop: 4,
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#85D151',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 200,
    width: 200
  },
  icon: {
    marginRight: 10,
  },
  greenButtonText: {
    color: 'white',
    fontSize: 16,
  },
  menu: {
    width: '90%',
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
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
  outline1: { color: '#000000', left: -1, top: -1 },
  imageBig: {
    width: '80%',
    resizeMode: 'cover',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8
  },

  /* Modal Styles */

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    top: 240

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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '40%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonmodal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  selectedExtractButton: {
    padding: 10,
    borderTopColor: 'grey', borderTopWidth: 1,
    borderLeftColor: 'grey', borderLeftWidth: 1,
    borderRightColor: 'grey', borderRightWidth: 1,
    borderBottomColor: 'white', borderBottomWidth: 4,
    top: 4, borderRadius: 5
  },
  selectedExtractButtonText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  },
  notselectedExtractButtonText: {
    color: "grey",
    fontWeight: "bold",
    textAlign: "center"
  },
  notselectedExtractButton: {
    padding: 10,

  },
  modalSmallGreyText: {
    color: '#a1a1a1',
    fontSize: 12
  },
  modalDarkMainText: {
    color: 'black',
    fontSize: 16,
    maxWidth: 200
  },
  modalGreenText: {
    color: '#85D151',
    fontSize: 16,
    fontWeight: '800'
  },
  modalViewColumnContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 1,
    padding: 10
  },
  eyeViewStyles: {
    position: 'absolute',
    top: 0,
    right: 40
  },
  modalViewContainer: {
    flexDirection: 'column', gap: 10
  },
  scrollViewContainer: {
    maxHeight: 'auto',
    marginBottom: 50
  },
  modalExtractView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end'
  },

});

export default HomeScreen;

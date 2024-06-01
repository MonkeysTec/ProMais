import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ModalSMSConfirm } from '../../components/Modal/SmsConfirm';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/LoginContext';

const menuItems = [
  { title: 'Extrato', icon: 'filetext1', modal: 'Extract' },
  { title: 'Codigo escaneado', icon: 'scan1', modal: 'ScannedCodes' },
  { title: 'Indique um "bipador"', icon: 'user', path: 'Bipador' },
  { title: 'Conheça Total Energies', icon: 'smileo', path: 'News' },
  { title: 'LubConsult', icon: 'tool' },
  { title: 'Como funciona', icon: 'questioncircleo' },
  { title: 'FAQ', icon: 'infocirlceo' },
];


const HomeScreen: React.FC = () => {
const navigation = useNavigation()
const { user, login, logout } = useAuth();
//logout()
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [extractType, setExtractType] = useState('General' || 'Reclaim')
  const closeModal = () => {
    setModalVisible(false);
  };

  const ExtractGeneralSample = [
    {
      date: '23/03/2023',
      QrCode: '112233445566',
      Value: '30,00'

    },
    {
      date: '25/03/2023',
      QrCode: '883999299323',
      Value: '40,00'

    },
    {
      date: '27/03/2023',
      QrCode: '06356343234',
      Value: '12,30'

    },
    {
      date: '29/03/2023',
      QrCode: '622356343234',
      Value: '30,10'

    },
    {
      date: '30/03/2023',
      QrCode: '99356343234',
      Value: '10,65'

    },
  ]
  const ExtractReclaimSample = [
    {
      date: '23/03/2023',
      Key: '112233445566',
      Type: 'Chave Pix',
      Method: 'Transferência',
      Value: '30,00'

    },
    {
      date: '25/03/2023',
      Key: '883999299323',
      Type: 'Chave Pix',
      Method: 'Transferência',
      Value: '40,00'

    },
    {
      date: '30/03/2023',
      Key: '06356343234',
      Type: 'Chave Pix',
      Method: 'Transferência',
      Value: '50,30'

    },
  ]

  const ScannedCodesSample = [
    {
      date: '23/03/2023',
      QrCode: '112233445566',
      Points: '30',
      ProductName: 'Teclado Gamer'

    },
    {
      date: '25/03/2023',
      QrCode: '883999299323',
      Points: '40',
      ProductName: 'Mouse Gamer'

    },
    {
      date: '27/03/2023',
      QrCode: '06356343234',
      Points: '12',
      ProductName: 'Monitor Gamer'

    },
    {
      date: '29/03/2023',
      QrCode: '622356343234',
      Points: '30',
      ProductName: 'Garrafa Gamer'

    },
    {
      date: '30/03/2023',
      QrCode: '99356343234',
      Points: '10',
      ProductName: 'Cabo HDMI Gamer'

    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá Max</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      <View style={styles.cardBalance}>
        <Text style={{ color: 'black', fontWeight: '600' }}>Saldo</Text>
        <Text style={{ color: 'black', fontWeight: '600', fontSize: 30 }}>R$420,00</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="filetext1" size={24} color="#A6A6A6" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver extrato</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.greenButton}>
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
              if (item.path) {

                navigation.navigate(item.path)
              }
              if (item.modal) {
                setModalType(item.modal)
                setModalVisible(true)
              }

            }}>
            <AntDesign name={item.icon} size={24} color="#000" />
            <Text style={styles.menuItemText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={24} color="#000" />
          </TouchableOpacity>
        ))}
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
                    <View style={{
                      flexDirection: 'row',
                      width: '100%', justifyContent: 'flex-end'
                    }}>

                      <TouchableOpacity
                        style={{ elevation: 2 }}
                        onPress={closeModal}
                      >
                        <Ionicons name="close" size={24} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <View style={{
                      flexDirection: 'row', borderBottomColor: 'grey',
                      borderBottomWidth: 1,
                      width: '100%', justifyContent: 'center', gap: 30
                    }}>

                      <TouchableOpacity
                        style={extractType !== 'General' ?
                          styles.notselectedExtractButton :
                          styles.selectedExtractButton}
                        onPress={() => setExtractType('General')}
                      >
                        <Text style={extractType !== 'General' ?
                          styles.notselectedExtractButtonText :
                          styles.selectedExtractButtonText}>Geral</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={extractType !== 'Reclaim' ? styles.notselectedExtractButton : styles.selectedExtractButton}
                        onPress={() => setExtractType('Reclaim')}
                      >
                        <Text style={extractType !== 'Reclaim' ?
                          styles.notselectedExtractButtonText :
                          styles.selectedExtractButtonText}>Resgate</Text>
                      </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'column', gap: 10 }} >

                      {extractType === 'General' ?
                        <ScrollView style={{ maxHeight: 'auto', marginBottom: 50 }} >
                          {ExtractGeneralSample.map((item, index) => (
                            <View key={index}style={styles.modalViewColumnContainer}>
                              <View style={{ flexDirection: 'column' }} >
                                <Text style={styles.modalDarkMainText}>
                                  {item.date}</Text>
                                <Text style={styles.modalSmallGreyText} >
                                  QR Code #{item.QrCode}</Text>
                              </View>
                              <Text
                                style={styles.modalGreenText}>
                                R$ {item.Value}</Text>
                            </View>
                          ))}
                        </ScrollView> : null}
                      {extractType === 'Reclaim' ?
                        <ScrollView style={{ maxHeight: 'auto', marginBottom: 50 }} >
                          {ExtractReclaimSample.map((item, index) => (
                              <View key={index} style={styles.modalViewColumnContainer}>
                                <View style={{ flexDirection: 'column' }} >
                                  <Text style={styles.modalSmallGreyText}>{item.date}</Text>
                                  <Text style={styles.modalDarkMainText}>
                                    {item.Method}</Text>
                                  <Text style={styles.modalSmallGreyText} >
                                    {item.Type}: {item.Key}</Text>
                                </View>
                                <Text style={styles.modalGreenText}>
                                  R$ {item.Value}</Text>
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
                onRequestClose={closeModal}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{
                      flexDirection: 'row',
                      width: '100%', justifyContent: 'flex-end'
                    }}>
                      <TouchableOpacity
                        style={{ elevation: 2 }}
                        onPress={closeModal}>
                        <Ionicons name="close" size={24} color="grey" />
                      </TouchableOpacity>
                    </View>
                    <View style={{
                      flexDirection: 'row',
                      width: '100%', marginBottom: 20
                    }}>
                      <Text style={{ fontWeight: '400', fontSize: 16 }} >
                        Códigos escaneados
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'column', gap: 10 }} >
                      <ScrollView style={{ maxHeight: 'auto', marginBottom: 50 }} >
                        {ScannedCodesSample.map((item, index) => (
                          <View key={index} style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between', width: '100%',
                            borderBottomColor: '#dbdbdb', borderBottomWidth: 1,
                            padding: 10
                          }}>
                            <View style={{ flexDirection: 'column' }} >
                              <Text style={styles.modalSmallGreyText} >Escaneado em: {item.date}</Text>
                              <Text style={styles.modalDarkMainText}>Produto {item.ProductName}</Text>
                              <Text style={styles.modalSmallGreyText} >QR Code #{item.QrCode}</Text>
                            </View>
                            <Text style={styles.modalGreenText}>
                              + {item.Points} pontos</Text>
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
    fontSize: 16
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
  }

});

export default HomeScreen;

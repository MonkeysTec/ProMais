import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

interface ModalNewInfo {
  NewInfos: Array<NewInfoModel>
}
interface NewInfoModel {
  Title: string,
  Date: string,
  Description: string,
  Others: string,

}
export const HomeNewInfo = (NewInfo: ModalNewInfo) => {


  const [modalVisible, setModalVisible] = useState(true);
  const closeModal = () => {
    setModalVisible(false);
  };




  return (

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
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={{ width: '100%', alignItems: 'center' }}>
              {NewInfo.NewInfos.map((item, index) => {
                return (
                  <View style={{ width: '100%', marginBottom: 20 }} key={index}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color:'red' }}>{item.Title}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color:'grey' }}>{item.Description}</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.Others}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color:'grey'  }}>{item.Date}</Text>
                  </View>
                )
              })}
            </View>
          </ScrollView>


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

    top: 0

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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: 500
  },
  joinButton: {
    backgroundColor: '#85d151',
    marginTop: 30,
    width: 150,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#85d151',
    gap: 10
  },
  joinText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

});
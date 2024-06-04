import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../services/api';


interface NewInfoModel {
  id: string;
  created_at: string;
  title: string;
  shortDescription: string;
  expiresOn: string;
  update_at: string;
  imageURL: string;
  status: string;
  type: string;
  urlToMore: string;

}
export const HomeNewInfo = () => {


  const [modalVisible, setModalVisible] = useState(true);
  const closeModal = () => {
    setModalVisible(false);
  };

  const [newsData, setNewsData] = useState<NewInfoModel[]>([])


  const newsGet = async() => {
    
    const { data } = await api.get('/news/v1/?onlyNotExpired=true&status=ACTIVE');

    setNewsData(data.results)
  }
  
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed
    const year = date.getUTCFullYear();

    // Format the date as DD/MM/YYYY
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  };

  useEffect(() => {
    newsGet();
  },[])
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
              {newsData.map((item, index) => {
                return (
                  <View style={{ width: '100%', marginBottom: 20 }} key={index}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color:'red' }}>{item.title}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color:'grey' }}>{item.shortDescription}</Text>
                   {/*  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.Others}</Text> */}
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color:'grey'  }}>{formatDate(item.created_at)}</Text>
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
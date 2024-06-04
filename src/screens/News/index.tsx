import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CardNews from '../../components/CardNews';
import api from '../../services/api';
import axios from 'axios';
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


const News: React.FC = () => {
  const [newsData, setNewsData] = useState<NewInfoModel[]>([])
  const [name, setName] = useState('');
  const getUserName = async () => {

    const { data } = await api.get('/users/me/v1/');

    if (data) {
      let nameUser = '';
      nameUser += data.token.user.firstName;
      nameUser += ' ';
      nameUser += data.token.user.lastName;
      setName(nameUser)
    }
  }

  const newsGet = async() => {
    
    const { data } = await api.get('/news/v1/?onlyNotExpired=true&status=ACTIVE');

    setNewsData(data.results)
  }

  useEffect(() => {
    newsGet();
    getUserName();
  },[])




  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed
    const year = date.getUTCFullYear();

    // Format the date as DD/MM/YYYY
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  };

const data = [
    {
      date: '28/05/2024',
      title: 'Lorem ipsum dolor',
      description: `Lorem ipsum dolor site`,
      image: 'https://via.placeholder.com/150',
    },
    // Add more data objects as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá {name}</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      {newsData.map((item, index) => (
        <CardNews
          key={index}
          date={formatDate(item.created_at)}
          title={item.title}
          description={item.shortDescription.substring(0, 100)}
          image={item.imageURL}
          
        />
      ))}
      

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#F3F3F3'
  },  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    width:'80%'
  },
  containerRed: {
    backgroundColor: 'red',
    height: 150,
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
  text_subTitleSize:{
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
    width:200
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
});

export default News;

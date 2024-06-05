import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CardNews from '../../components/CardNews';
import api from '../../services/api';
import axios from 'axios';
import FAQScreen from '../FAQ';
import { useAuth } from '../../context/LoginContext';

interface Product {
  amountBox: number;
  company: string | null;
  created_at: string;
  description: string;
  gamma: string;
  isOnCampaign: number;
  monetaryValue: number;
  name: string;
  photoURL: string;
  points: number;
  short_name: string;
  sku: number;
  status: string;
  update_at: string;
  _id: string;
}

const ProductsScreen: React.FC = () => {

  const { user,userName, login, logout } = useAuth();

  const [productsNew, setProductsNew] = useState<Product[]>([])


  const getProducts = async () => {

    const { data } = await api.get('/product/v1/?isOnCampaign=1&status=ACTIVE');
    
    setProductsNew(data.results);
  }
  useEffect(() => {
    getProducts();
  },[])


  const products = [
    {
      Category: 'Produto Teste',
      Name: 'Produto 1',
      Points: '20',
      ImageUrl: 'https://static9.depositphotos.com/1008971/1197/i/450/depositphotos_11973427-stock-photo-tea-cup-on-white.jpg'
    },
    {
      Category: 'Produto Teste 2',
      Name: 'Produto 42',
      Points: '40',
      ImageUrl: ''
    },
    {
      Category: 'Produto Teste 3',
      Name: 'Produto 52',
      Points: '25',
      ImageUrl: ''
    },
    {
      Category: 'Produto Teste 4',
      Name: 'Produto 11',
      Points: '10',
      ImageUrl: ''
    },
    {
      Category: 'Produto Teste 5',
      Name: 'Produto 88',
      Points: '20',
      ImageUrl: ''
    },
    {
      Category: 'Produto Teste 6',
      Name: 'Produto 93',
      Points: '25',
      ImageUrl: ''
    },
    {
      Category: 'Produto Teste 7',
      Name: 'Produto 11',
      Points: '10',
      ImageUrl: ''
    },
    {
      Category: 'Produto Teste 8',
      Name: 'Produto 09',
      Points: '20',
      ImageUrl: ''
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá {userName}</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      <View style={{ padding: 40 }} >


        <Text style={{ fontWeight: '700', color: 'red', fontSize: 22, marginBottom: 15 }} >
          Produtos participantes
        </Text>
       
        <View style={{ backgroundColor: 'white', borderRadius: 15, padding: 15, height: '75%' }} >

          <ScrollView style={{ width: '100%', height: '100%' }} >
            {productsNew.map((prod, index) => (
              <TouchableOpacity key={index} style={{
                flexDirection: 'row',


                paddingVertical: 15,
                borderBottomWidth: 1, borderBottomColor: '#F3F3F3'
              }} >
                <View style={{ flexDirection: 'row' }} >

                  <View style={{ width: 80, height: 80, borderWidth: 1, borderColor: 'grey' }} >
                    {prod.photoURL ?
                      <Image source={{ uri: prod.photoURL }}
                        style={{ width: '100%', height: '100%' }} />
                      :
                      null}
                  </View>
                  <View style={{ marginLeft: 20 }} >
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '400' }} >
                      {prod.gamma}
                    </Text>
                    <Text style={{ color: 'red', fontSize: 16, fontWeight: '700' }} >
                      {prod.name}
                    </Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', marginTop: 5 }} >
                      {prod.points} Pontos
                    </Text>

                  </View>
                </View>

              </TouchableOpacity>

            ))}


          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: '#F3F3F3',
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
    height: 150,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

});

export default ProductsScreen;

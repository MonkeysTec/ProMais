import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CardNews from '../../components/CardNews';
import api from '../../services/api';
import axios from 'axios';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAuth } from '../../context/LoginContext';


const HowWorks: React.FC = () => {
  const { user, userName, login, logout } = useAuth();
  const [name, setName] = useState('');



  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá {userName}</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      <View style={{
        flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
        width: '100%',
        height: '100%', padding: 20
      }} >
        <Text style={{ fontWeight: '600', fontSize: 20 }}>Como funciona?</Text>
        <Image source={require('../../assets/home-img.png')}
          style={{ borderWidth: 2, borderColor: 'white', borderRadius: 10, marginTop: 10, width: '100%', }} />
        <Text style={{ fontWeight: '700', fontSize: 20, color: 'red', marginTop: 20 }}>Muito + Simples</Text>
        <Text style={{ fontWeight: '700', fontSize: 20, color: 'red' }}>Muito + Facil de ganhar!</Text>
        <View style={{flexDirection:'column'}} >
          <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center', gap:20, margin:-5 }} >
            <View style={{backgroundColor:'red', justifyContent:'center', 
            alignItems:'center',  width:60,height:60, borderRadius:50, top:5}}  >
            <MaterialCommunityIcons name="cellphone" size={40} color="white" />
            </View>
            <View style={{ flexDirection: 'column', width:'80%' }}>
              <Text style={{ fontWeight: '700', fontSize: 16, color: 'red', marginTop: 20 }}>Cadastre-se no programa</Text>
              <Text style={{ fontWeight: '500', fontSize: 14 }}>Faça parte do nosso clube de fidelidade e tenha muitos benefícios.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center', gap:20, margin:-5 }} >
            <View style={{backgroundColor:'red', justifyContent:'center', 
            alignItems:'center',  width:60,height:60, borderRadius:50, top:5}}  >
            <MaterialCommunityIcons name="cellphone" size={40} color="white" />
            </View>
            <View style={{ flexDirection: 'column', width:'80%' }}>
              <Text style={{ fontWeight: '700', fontSize: 16, color: 'red', marginTop: 20 }}>Cadastre-se no programa</Text>
              <Text style={{ fontWeight: '500', fontSize: 14 }}>Escaneie os códigos das caixas e aumente suas recompensas. {'\n'}+ Compras {'\n'}+ Recompensas.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center', gap:20, margin:-5 }} >
            <View style={{backgroundColor:'red', justifyContent:'center', 
            alignItems:'center',  width:60,height:60, borderRadius:50, top:5}}  >
            <MaterialCommunityIcons name="cellphone" size={40} color="white" />
            </View>
            <View style={{ flexDirection: 'column', width:'80%' }}>
              <Text style={{ fontWeight: '700', fontSize: 16, color: 'red', marginTop: 20 }}>Resgate seus prêmios{'\n'}+ SIMPLES{'\n'}+ PRÁTICO</Text>
              <Text style={{ fontWeight: '500', fontSize: 14 }}>Recompensas = PIX. É isso mesmo. Seus benefícios a um clique de resgate. Basta informar sua chave PIX e aproveitar.</Text>
            </View>
          </View>
          
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F3F3'
  },

  containerRed: {
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

});

export default HowWorks;

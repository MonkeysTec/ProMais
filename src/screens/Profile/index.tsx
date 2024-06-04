import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, Linking } from 'react-native';
import { RainbowLine } from '../../components/RainbowLine';
import { MaterialIcons } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useAuth } from '../../context/LoginContext';
import api from '../../services/api';

const ProfileScreen: React.FC = () => {
  const { user, login, logout } = useAuth();
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const loadInBrowser = (url: any) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

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

  useEffect(() => {

    getUserName();
   
  },[])
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
          <View>
            <Text style={{ color: 'black', fontSize: 24 }} >
              {name}
            </Text>
            <Text style={{ color: 'grey', fontSize: 14 }}>
              Nome do Cargo
            </Text>

          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
              onPress={() => { }}
            >
              <View style={{
                backgroundColor: '#D8D8D8', width: 66, height: 66,
                alignItems: 'center',
                justifyContent: 'center', borderRadius: 50
              }}>

                <Ionicons name="person-outline" size={35} color="black" />
              </View>

            </TouchableOpacity>
          </View>

        </View>

      </View>
      <View style={{ flexDirection: 'column' }}>

        <View style={{ paddingHorizontal: 40, gap: 15, marginBottom: 20 }} >
          <Text style={{ color: 'grey' }}  >
            Ajuda
          </Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => { navigation.navigate('ProfileConfig') }}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <Octicons name="gear" size={20} color="black" />
            </View>
            <Text>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => navigation.navigate('FAQ')}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <Ionicons name="chatbox-outline" size={20} color="black" />

            </View>
            <Text>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => navigation.navigate('ContactUs')}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <FontAwesome5 name="headset" size={20} color="black" />
            </View>
            <Text>Fale conosco</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => { loadInBrowser('https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult') }}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <Feather name="droplet" size={24} color="black" />
            </View>
            <Text>LubConsult</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => { loadInBrowser('https://totalenergies.pt/os-nossos-servicos/servicos/lubconsult') }}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>
              <View style={{ alignItems: 'center', width: 24, height: 12 }} >

                <Image source={require('../../assets/IconTotalEnergies.png')}
                  style={{ width: '100%', height: '100%' }} />
              </View>

            </View>
            <Text>Conheça Total Energies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => navigation.navigate('Distributors')}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <FontAwesome6 name="users" size={20} color="black" />
            </View>
            <Text>Distribuidores participantes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#D8D8D8', width: 120, padding: 5, borderRadius: 10 }} onPress={logout}>

            <Text style={{ fontWeight: '700' }} >Sair dessa conta</Text>

          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 40, gap: 15 }} >
          <Text style={{ color: 'grey' }}  >
            Termos de uso
          </Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => navigation.navigate('Rules')}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <Feather name="book" size={20} color="black" />
            </View>
            <Text>Regras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => navigation.navigate('Terms')}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <AntDesign name="bars" size={20} color="black" />
            </View>
            <Text>Políticas</Text>
          </TouchableOpacity>




        </View>

        <View>

        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },


  insideContainer: {

    width: '100%',
    padding: 50
  },


});

export default ProfileScreen;

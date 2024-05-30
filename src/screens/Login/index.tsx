import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { RainbowLine } from '../../components/RainbowLine';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../context/LoginContext';
import axios from 'axios';

const Login: React.FC = () => {
const { user, login, logout } = useAuth();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigation = useNavigation();

  const handleLogin = async () => {
  
    try {
      console.log('entrou')
      const {data} = await api.post('/users/system/login/v1', {
        email: email,
        password: password,
      });
      console.log(data)
  
      if (data.status === 200) {
        console.log(data)
      } else {
        // Exibir mensagem de erro
        Alert.alert('Erro de Login', 'Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      // Exibir mensagem de erro
      Alert.alert('Erro de Login', 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
      console.error(error);
    }
  };

  

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        
        <Text style={styles.title}>Acesso</Text>
        <View style={styles.inputContainer}>
          <TextInput
        style={styles.input}
        placeholder='Insira o e-mail cadastrado'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Insira sua senha'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.joinButton}>
          <Text style={styles.joinText}>Entrar</Text>
          <Ionicons name={'arrow-forward'} size={18} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.loginButton}>
          <Text style={styles.loginText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <MaterialIcons name={'headset-mic'} size={45} color={'tomato'} />
          <View>
            <Text style={styles.contactTextBlack}>Não consegue acessar?</Text>
            <Text style={styles.contactTextRed}>Entre em contato conosco</Text>
          </View>
        </TouchableOpacity>
        <Image source={require('../../assets/© TotalEnergies - 2023.png')} style={styles.image} />
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
  input: {
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10
  },
  inputContainer: {
    marginTop: 10
  },
  backContainer: {
    marginTop: 70
  },
  insideContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 50
  },
  image: {
    width: 101,
    height: 61,
    resizeMode: 'contain',
    marginTop: 60
  },
  title: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
  },
  imageBig: {
    width: '100%',
    resizeMode: 'cover',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  joinButton: {
    backgroundColor: '#85d151',
    marginTop: 40,
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
  loginButton: {
    marginTop: 10,
    width: 250,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
  },
  loginText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    gap: 10
  },
  contactTextBlack: {
    fontSize: 16,
    color: '#000',
    fontWeight: '800'
  },
  contactTextRed: {
    fontSize: 16,
    color: 'red',
    fontWeight: '800'
  },
  totalEnergies: {
    width: 210,
    height: 30,
    resizeMode: 'contain',
  },
  outline1: { color: '#000000', left: -1, top: -1 },
});

export default Login;

import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import axios from "axios";

export const Redeem:React.FC = () => {
    const [step,setStep] = useState(1);
    const navigation = useNavigation();
    const [pixTransferType, setPixTransferType] = useState('');
    const [pixKey, setPixKey] = useState('');
    const [totalBalanceAmount, setTotalBalanceAmount] = useState(0);
    const [name, setName] = useState('');
    const [amountToReclaim, setAmountToReclaim] = useState(0);

    



    const getBalance = async () => {
      const { data } = await api.get('/points/values/v1/');
  
      if(data.result.availableMonetayValue){
        setTotalBalanceAmount(data.result.availableMonetayValue.toFixed(2));
      }
    }

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
    getBalance();
    getUserName();
    
  },[]);
    return(
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá {name}</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      {step === 1 &&
        <View style={styles.cardBalance}>
          <Ionicons onPress={() => navigation.navigate('Home')} name={'arrow-back'} size={31} color={'#374649'} /> 
          <Text style={styles.text}>Como deseja transferir?</Text>
          <TouchableOpacity onPress={() => {
            setStep(2)
            setPixTransferType('CPF/CNPJ')
            }}  style={styles.loginButton}>
            <Text style={styles.loginText}>CPF/CNPJ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setStep(2)
            setPixTransferType('Celular')
            }} style={styles.loginButton}>
            <Text style={styles.loginText}>Celular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setStep(2)
            setPixTransferType('Email')
            }} style={styles.loginButton}>
            <Text style={styles.loginText}>E-mail</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setStep(2)
            setPixTransferType('Chave Aleatoria')
            }} style={styles.loginButton}>
            <Text style={styles.loginText}>Chave aleatória</Text>
          </TouchableOpacity>
        </View>
      }
      {step === 2 &&
        <View style={styles.cardBalance}>
          <Ionicons  onPress={() => setStep(1)} name={'arrow-back'} size={31} color={'#374649'} /> 
          <Text style={styles.text}>Informe os dados da transferência</Text>
          <TextInput
            style={styles.input}
            placeholder='Insira sua chave pix'
            onChangeText={(value) => {
              setPixKey(value)
            }}
          />
          <TouchableOpacity onPress={() => {
            if(pixKey.length > 5){
              setStep(3)
            }
           }}  style={styles.joinButton}>
            <Text style={styles.joinText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      }
      {step === 3 &&
        <View style={styles.cardBalance}>
          <Ionicons onPress={() => setStep(2)}  name={'arrow-back'} size={31} color={'#374649'} /> 
          <Text style={styles.text}>Qual o valor do resgate?</Text>
            <Text style={{ fontSize: 18, fontWeight: 400 }}>Saldo disponível par resgate em conta:</Text>
            <Text style={{ fontSize: 22, fontWeight: 600, marginTop: -20 }}>R$ {totalBalanceAmount}</Text>
          <TextInput
            style={styles.input}
            placeholder='R$ 0,00'
            onChangeText={(value) => {
              const valueNumber = parseFloat(value);
             setAmountToReclaim(valueNumber);
            }}
          />
          <TouchableOpacity onPress={() => {
            
              setStep(4)
            
           }}  style={styles.joinButton}>
            <Text style={styles.joinText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      }
      {step === 4 &&
        <View style={styles.cardBalance}>
          <Ionicons onPress={() => setStep(3)} name={'arrow-back'} size={31} color={'#374649'} /> 
          <Text style={styles.text}>Você está transferindo para:</Text>
          <View style={{ borderWidth: 1, borderColor: 'black', height: 200, width: '95%', borderRadius: 12, padding: 20}}>
            <Text style={{ fontSize: 22, fontWeight: 600 }}>Nome</Text>
            <Text style={{ fontSize: 14, color: '#a9a9a9', fontWeight: 600}}>Nome e sobrenome</Text>
            <Text style={{ fontSize: 22, fontWeight: 600, marginTop: 10 }}>Instituição bancária</Text>
            <Text style={{ fontSize: 14, color: '#a9a9a9', fontWeight: 600}}>Instituição bancária</Text>
            <Text style={{ fontSize: 22, fontWeight: 600, marginTop: 10 }}>Chave pix</Text>
            <Text style={{ fontSize: 14, color: '#a9a9a9', fontWeight: 600}}>Chave pix</Text>
          </View>
          <TouchableOpacity  style={styles.joinButton}>
            <Text style={styles.joinText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      }
      {step === 5 &&
        <View style={styles.cardBalance}>
          <Ionicons name={'arrow-back'} onPress={() => setStep(4)} size={31} color={'#374649'} /> 
          <Text style={styles.text}>Resgate realizado com sucesso</Text>
          <ScrollView style={{ borderWidth: 1, borderColor: '#a9a9a9', height: 300, width: '95%', borderRadius: 12, padding: 20}}>
            <Text style={{ fontSize: 14, color: '#a9a9a9', fontWeight: 600}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum tortor felis, id varius libero dapibus ut. Sed consequat felis felis, nec lacinia ante pharetra sed. Nulla et turpis vel tortor elementum malesuada. Nulla semper ornare lectus non dignissim. Donec rhoncus sollicitudin orci, in mattis libero convallis nec. Nunc vel posuere augue. Proin vulputate scelerisque elit, id sodales nulla lacinia eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dignissim vulputate dictum. Aliquam pulvinar aliquet dolor, at eleifend ante pretium ac.</Text>
            <Text style={{ fontSize: 14, color: '#a9a9a9', fontWeight: 600}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum tortor felis, id varius libero dapibus ut. Sed consequat felis felis, nec lacinia ante pharetra sed. Nulla et turpis vel tortor elementum malesuada. Nulla semper ornare lectus non dignissim. Donec rhoncus sollicitudin orci, in mattis libero convallis nec. Nunc vel posuere augue. Proin vulputate scelerisque elit, id sodales nulla lacinia eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dignissim vulputate dictum. Aliquam pulvinar aliquet dolor, at eleifend ante pretium ac.</Text>
          </ScrollView>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Feather name="send" size={18} color="red" />
            <Text style={{ fontSize: 16, fontWeight: 600, color: 'red', textDecorationColor: 'red', textDecorationLine: 'underline' }}>Compartilhar comprovante</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}  style={styles.joinButton}>
            <Text style={styles.joinText}>{step !== 5 ? 'Continuar' : 'Tela inicial'}</Text>
          </TouchableOpacity>
        </View>
      }
      {step !== 5 &&
        <View style={styles.cardWarning}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <AntDesign name="exclamationcircle" size={20} color={'red'} />
            <Text style={{ color: 'red', fontWeight: 700 }}>Atenção:</Text>
          </View>
          <Text style={{ paddingRight: 10 }}>Você só pode realizar transferências via PIX para sua conta pessoal. Não é permitido a transferência para terceiros pelo aplicativo do Clube Pro+.</Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F3F3'
  }, 
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
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
    padding: 20
  },
  text_subTitleSize: {
    fontSize: 14
  },
  text_subTitle: {
    marginTop: 10,
    fontWeight: "bold"
  },
  cardWarning: {
    width: '80%',
    backgroundColor: '#d9d9d9',
    height: 150,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 20,
    paddingLeft: 20,
    gap: 20,
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '95%'
  },
  loginButton: {
    width: '95%',
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
  joinButton: {
    backgroundColor: '#85d151',
    width: 150,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#85d151',
  },
  joinText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
})
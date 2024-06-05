import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import api from '../../services/api';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/LoginContext';


const ContactUsScreen: React.FC = () => {
  const { user, userName, login, logout } = useAuth();
  const [name, setName] = useState('');
  const [assunto, setAssunto] = useState('');
  const [descrição, setDescrição] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const aboutOptions = [
    'Acesso',
    'Elogio',
    'Reclamação',
    'Sugestão',
    'Dúvidas',
    'Redefinição de senha',
    'Outros'
  ]

  const sendEmail = async () => {

    try {
    
      const data = {
        email: name,
        title: assunto,
        description: descrição
      }

     
      const response = await api.post('/email/contactus/v1/', data);
      console.log(response)
      if(response){
        setShowConfirmModal(true);
      }

    } catch (error) {
      console.log('Erro ao tentar enviar email: ', error)
    }
  }
  const navigation = useNavigation();
  return (
    <>
      {showConfirmModal ?
      
      <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.insideContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => { }}
          >
            <AntDesign name="checkcircle" size={55} color="#85D151" />
          </TouchableOpacity>


        </View>
        <Text style={{fontWeight:'800', fontSize:30, color:"#85D151"}} >
          Boa!{'\n'}Sua mensagem foi enviada
        </Text>
        <Text style={{fontWeight:'500', fontSize:20, color:"black"}}>
         Recebemos seu recado e em breve, nossa equipe Pro+ entrará em contato com você!
        </Text>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
          }} style={styles.joinButton}>
            <Text style={styles.joinText}>Voltar para a home</Text>
          </TouchableOpacity>
         
      </View>


    </View>
      : 
      
      
      <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá {userName}</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      <View style={{ width: '100%', height: '100%', padding: 30 }}  >

        <View style={{ marginBottom:20}}>
          <Text style={{ color: 'red', fontWeight: '800', fontSize: 29 }} >Fale conosco</Text>
        </View>
        <View  >
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Email para contato"
            style={{ borderRadius: 50, marginBottom:20, 
              borderWidth: 2, borderColor: 'grey', padding: 5, paddingLeft: 30, width:'100%', 
              height:50 }}
          />
        </View>
        <View style={{ borderRadius: 50, marginBottom:20, borderWidth: 2, borderColor: 'grey', 
        padding: 5, width:'100%', height:50  }} >
          <Picker
            style={{bottom:10}}
            selectedValue={assunto}
            onValueChange={itemValue => setAssunto(itemValue)}

          >
            {aboutOptions.map((item, index) => (
              <Picker.Item label={item} value={index} key={index} />
            ))}
          </Picker>
        </View>
        <View style={{ borderTopStartRadius: 20, borderTopEndRadius: 20, borderBottomStartRadius: 20,  
        borderBottomEndRadius: 20, 
        marginBottom:20,borderWidth: 2, borderColor: 'grey', 
          width:'100%', height:180 }} >
          <TextInput
           style={{ 
            marginBottom:20,
              padding: 5, paddingLeft:8, width:'100%', height:180 }}
            value={descrição}
            onChangeText={text => setDescrição(text)}
            placeholder="Descrição"
            multiline
            numberOfLines={4}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => sendEmail()} style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
      
      }
    </>
    
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
    width: '100%',
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
  button: {
    alignItems: 'center',
    backgroundColor: '#85D151',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 200,
    width: 200
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  insideContainer: {

    width: '100%',
    padding: 50
  },
  joinButton: {
    backgroundColor: '#85d151',
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#85d151',
    marginTop:20
  },
  joinText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

});

export default ContactUsScreen;
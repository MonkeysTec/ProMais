import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { RainbowLine } from '../../components/RainbowLine';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';
import { ModalSMSConfirm } from '../../components/Modal/SmsConfirm';
import Moment from 'moment';

const SignUp: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [step, setStep] = useState(1)
  const [email1, setEmail1] = useState('')
  const [name, setName] = useState('')
  const [dataBirth, setData] = useState('')
  const [typeModal, setTypeModal] = useState<'EMAIL'|'SMS'>('EMAIL')

  const [modalSms, setModalSms] = useState(false)


  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [code, setCode] = useState('')
  const [company, setCompany] = useState('')


///api/tempcode/v1/toregister/email
  const handleCodeSms = async (code:string,company:string)=>{
    setCode(code)
    setCompany(company)
    setModalSms(false)
 
  }

const handleFinalRegister = async ()=>{
  if(password!==password2){
   return  Alert.alert('Senhas não são iguais,verifique')
  }
  const parts = name.trim().split(' ');
    const firstName = parts.shift();
    const lastName = parts.join(' ');
    let dateVar = Moment(dataBirth, 'DD/MM/YYYY');
    
  try {
    console.log(code)
    const {data} = await api.post('/users/v1',{
      email:email1, 
      firstName,
      lastName, 
      password:password, 
      primaryPhone:phone, 
      isReceivePush: true,
      isReceiveSMS: true,
      isReceiveEmail: true,
      companyUser: {
          company:company,                            
          dateBirth:dateVar.utc().format(), 
          document:cpf
      }
    },{
      headers:{
        'temp_auth_code':code
      }
    })
  } catch (error) {
    console.log(error)
  }
}



  const handleNext = async () => {

    if(step===1){
      setTypeModal('EMAIL')
      setModalSms(true)

    }
    if(step===2){
      setTypeModal('SMS')
      setModalSms(true)

    }
    setStep(step+1)
    
  };

  const handleBack = () => {
    setStep(step-1)
    
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        <TouchableOpacity onPress={handleBack} style={styles.backContainer}>
          {step === 4 ?
            <AntDesign name={'checkcircle'} size={50} color={'#85d151'} /> :
            <Ionicons name={'arrow-back'} size={31} color={'#d9d9d9'} /> 
          }
        </TouchableOpacity>
        {step === 1 && 
          <>
            <Text style={styles.counter}>{step}/3</Text>
            <Text style={styles.title}>Faça seu cadastro</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} onChangeText={(e)=>setEmail1(e)} placeholder='Insira seu e-mail'/>
            </View>
            <TouchableOpacity onPress={handleNext} style={styles.joinButton}>
              <Text style={styles.joinText}>Próximo</Text>
              <Ionicons name={'arrow-forward'} size={18} color={'#fff'} />
            </TouchableOpacity>
          </>
        }
        {step === 2 && 
          <>
            <Text style={styles.counter}>{step}/3</Text>
            <Text style={styles.title}>Continue seu cadastro</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} onChangeText={(e)=>setName(e)} placeholder='Nome completo'/>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} onChangeText={(e)=>setCpf(e)} placeholder='Insira seu CPF'/>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} onChangeText={(e)=>setData(e)} placeholder='Insira a data de nascimento'/>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} onChangeText={(e)=>setPhone(e)}  placeholder='Insira seu telefone'/>
            </View>
            <TouchableOpacity onPress={handleNext} style={styles.joinButton}>
              <Text style={styles.joinText}>Próximo</Text>
              <Ionicons name={'arrow-forward'} size={18} color={'#fff'} />
            </TouchableOpacity>
          </>
        }
        {step === 3 && 
          <>
            <Text style={styles.counter}>{step}/3</Text>
            <Text style={styles.title}>Finalize seu cadastro</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} onChangeText={(e)=>setPassword(e)}  placeholder='Insira uma senha'/>
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} onChangeText={(e)=>setPassword2(e)}  placeholder='Confirme sua senha'/>
            </View>
            <TouchableOpacity onPress={handleFinalRegister} style={styles.joinButton}>
              <Text style={styles.joinText}>Finalizar</Text>
              <Ionicons name={'arrow-forward'} size={18} color={'#fff'} />
            </TouchableOpacity>
          </>
        }
        {step === 4 &&
          <>
          <View>
              <Text style={styles.finishTitle}>Eba!</Text>
              <Text style={styles.contactTextBlack}>Sua conta foi criado com sucesso!</Text>
              <Text style={styles.contactTextBlack}>Acesse agora mesmo...</Text>
              <TouchableOpacity onPress={handleNext} style={styles.joinButton}>
              <Text style={styles.joinText}>Entrar</Text>
              <Ionicons name={'arrow-forward'} size={18} color={'#fff'} />
            </TouchableOpacity>
          </View>
          </>
        }
        <TouchableOpacity style={styles.contactContainer}>
          <MaterialIcons name={'headset-mic'} size={45} color={'tomato'} />
          <View>
            <Text style={styles.contactTextBlack}>Não consegue acessar?</Text>
            <Text style={styles.contactTextRed}>Entre em contato conosco</Text>
          </View>
        </TouchableOpacity>
        <Image source={require('../../assets/© TotalEnergies - 2023.png')} style={styles.image} />
      </View>
      {
        modalSms&&(
          <ModalSMSConfirm phone={phone} type={typeModal} email={email1} code={(code,company)=>handleCodeSms(code,company)}/>

        )
      }
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
    marginTop: 5
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
  counter: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
  },
  finishTitle: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#85d151',
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
    backgroundColor: '#fff',
  },
  loginText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 100,
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

export default SignUp;

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import api from '../../../services/api';
import { useAuth } from '../../../context/LoginContext';

interface ModalSms{
  email:string;
  code?:(code:string,company:string)=>void;
  type:'EMAIL'|'SMS'|'LOGIN',
  phone:string;
  password?:string
}
export const ModalSMSConfirm = ({email,password,code,type,phone}:ModalSms) => {
const { user, login, logout } = useAuth();

  const [modalVisible, setModalVisible] = useState(true);

  const [smscode, setSmsCode] = useState(['', '', '', '']);

  const [warningType, setWarningType] = useState('');
  const [company, setCompany] = useState('');
  const [codeResponse, setCodeResponse] = useState('');


  const [loading, setLoading] = useState(false);


  const [canSendSmsAgain, setCanSendSmsAgain] = useState(true);
  const handleCodeInvite = async()=>{
    setLoading(true)
    if(type==='EMAIL'){
      try {
        const response = await api.get(`/tempcode/v1/toregister/${email}`);
        setCompany(response.data.company)
        setCodeResponse(response.data.b)
        const {data} = await api.post(`/tempcode/check/email/v1/`,{
          toEmail:email
        })
        setLoading(false)

      } catch (error) {
        setLoading(false)

        return console.log(error)
      }
    }
    if(type==='SMS'){
      try {
        const {data} = await api.post(`/tempcode/check/number/v1/`,{
          toPhone:phone
        })
        setLoading(false)
        setModalVisible(false)

        return data
      } catch (error) {
        setLoading(false)

        return console.log(error)
      }
    }
    if(type==='LOGIN'){
      try {
        const {data} = await api.post('/users/system/login/v1', {
          email: email,
          password: password,
        });
        console.log(data)
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }
    
  }
  useEffect(() => {
    
    //handleCodeInvite()
  }, []);

  const handleConfirmSms = async ()=>{
    if(type==='EMAIL'){
      try {
        const {data} = await api.post(`/tempcode/check/v1/${smscode.join('')}`,{
          type:'CHECK_EMAIL',
          email:email
        })
        code?.(codeResponse,company);
      } catch (error: any) {
        if(error.response.data.message==='Código incorreto.'){
          return setWarningType('WrongCode')
        }
        if(error.response.data.message){
          return setWarningType('ManyTries')
        }else{
          return setWarningType('Block')
        }
      }
    }else if(type==='SMS'){
      
      try {
        console.log(phone)
        const {data} = await api.post(`/tempcode/check/v1/${smscode.join('')}`,{
          type:'CHECK_NUMBER',
          phone:phone
        })    
        setModalVisible(false)
      } catch (error) {
        console.log(error)
      }
    }else{
      try {
        const {data} = await api.post(`/users/system/login/validateotp/v1`,{
          email:email
        },{
          headers:{
             'temp_auth_code':smscode.join('')

          }
        })    
        const user = await api.get('/users/me/v1');
        login(user.data)
        setModalVisible(false)

      } catch (error) {
        console.log(error)
      }
    }
  }


  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{
            flexDirection: 'row',
            width: '100%', justifyContent: 'flex-end'
          }}>
            
          </View>
          <View style={{

            width: '100%', marginBottom: 20
          }}>
            <Text style={{ fontWeight: '700', fontSize: 26, color: 'red' }} >
              Confirmação
            </Text>
            <Text style={{ fontWeight: '400', fontSize: 17, color: 'black', maxWidth: '90%' }} >
              Digite o código de segurança {type==='SMS'?'enviado via SMS para o número de telefone informado':'enviado para o email informado'} 
            </Text>
            <View style={{ width: '100%', height: 150, marginTop: 15 }} >
              {warningType === 'ManyTries' ?
                <View style={{ backgroundColor: 'red', padding: 10, flexDirection: 'row', gap: 10 }} >
                  <FontAwesome6 name="x" size={16} color="white" />
                  <Text style={{ color: 'white' }} >
                    Você tentou 5 vezes.
                    Aguarde 30 minutos para tentar novamente
                  </Text>

                </View> : null}
              {warningType === 'WrongCode' ?
                <View style={{ backgroundColor: 'red', padding: 10, flexDirection: 'row', gap: 10 }} >
                  <FontAwesome6 name="x" size={16} color="white" />
                  <Text style={{ color: 'white' }} >
                    Código incorreto
                  </Text>

                </View> : null}
              {warningType === 'Block' ?
                <View style={{ backgroundColor: 'red', padding: 10, flexDirection: 'row', gap: 10 }} >
                  <FontAwesome6 name="x" size={16} color="white" />
                  <Text style={{ color: 'white' }} >
                    Você foi bloqueado por excesso de tentativas. Entre em contato com o Suporte do Programa.
                  </Text>

                </View> : null}

            </View>
            
            <View style={{
              borderColor: 'black', borderWidth: 2, width: '80%',
              height: 60, borderRadius: 50, marginTop: 0, flexDirection: 'row', gap: 10,
              justifyContent: 'center', alignItems: 'center'
            }} >
              <TextInput
                style={{
                  opacity: 0,
                  width: '100%',
                  position: 'absolute',
                  height: 80,
                  padding: 0,
                  margin: 0,
                  backgroundColor:'black',
                  zIndex:3
                }}
               
                placeholder="CODE"
                maxLength={4}
                onChangeText={(text) => {
                  const newSmsCode = [...smscode];
                  for (let i = 0; i < text.length; i++) {
                    newSmsCode[i] = text[i];
                  }
                  setSmsCode(newSmsCode);
                }}
              />
              <View style={{
                borderBottomColor: 'black', borderBottomWidth: 4,
                width: 34, alignItems: 'center', display: warningType ? 'none' : 'flex'
              }} >
                <Text style={{ fontSize: 24, bottom: 0, fontWeight: '700' }} >
                  {smscode[0]}
                </Text>
              </View>
              <View style={{
                borderBottomColor: 'black', borderBottomWidth: 4,
                width: 34, alignItems: 'center', display: warningType ? 'none' : 'flex'
              }} >
                <Text style={{ fontSize: 24, bottom: 0, fontWeight: '700' }} >
                  {smscode[1]}
                </Text>
              </View>
              <View style={{
                borderBottomColor: 'black', borderBottomWidth: 4,
                width: 34, alignItems: 'center', display: warningType ? 'none' : 'flex'
              }} >
                <Text style={{ fontSize: 24, bottom: 0, fontWeight: '700' }} >
                  {smscode[2]}
                </Text>
              </View>
              <View style={{
                borderBottomColor: 'black', borderBottomWidth: 4,
                width: 34, alignItems: 'center', display: warningType ? 'none' : 'flex'
              }} >
                <Text style={{ fontSize: 24, bottom: 0, fontWeight: '700' }} >
                  {smscode[3]}
                </Text>
              </View>
              <View style={{
                display: warningType ? 'flex' : 'none'
              }}>
                <MaterialCommunityIcons name="lock" size={24} color="grey" />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{ elevation: 2 }}
                onPress={() =>loading?{}: handleCodeInvite()}
              >
                <Text style={{
                  borderBottomColor: 'grey', borderBottomWidth: 2, width: 140,
                  marginTop: 20, fontSize: 16, color: 'grey', display:canSendSmsAgain ? 'flex' : 'none'
                }} >
                  {
                    loading?(<ActivityIndicator/>):'Enviar novamente'
                  }
                </Text>
              </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={handleConfirmSms} style={styles.joinButton}>
              <Text style={styles.joinText}>Próximo</Text>
              <Ionicons name={'arrow-forward'} size={18} color={'#fff'} />
            </TouchableOpacity>
          </View>

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
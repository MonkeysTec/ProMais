import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { RainbowLine } from '../../components/RainbowLine';
import { Dots } from '../../components/Dots';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

const StartScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };
  const handleContact = () => {
    navigation.navigate('ContactUs');
  };

  return (
    <S.Container>
      <SafeAreaView />
      <RainbowLine />
      <S.InsideContainer>
        <S.StyledImage source={require('../../assets/splashImg.png')} />
        <S.Title>Vem ser +, vem ser Pro+</S.Title>
        <S.ImageBig source={require('../../assets/home-img.png')} />
        <S.Text>Clube Pro+. O clube de fidelidade da Total Energies.</S.Text>
        <Dots />
        <S.JoinButton onPress={handleSignUp}>
          <S.JoinText>Quero me cadastrar</S.JoinText>
        </S.JoinButton>
        <S.LoginButton onPress={handleLogin}>
          <S.LoginText>Entrar</S.LoginText>
          <Ionicons name={'arrow-forward'} size={18} color={'#000'} />
        </S.LoginButton>
        <S.LoginButton onPress={handleContact}>
          <MaterialIcons name={'headset-mic'} size={32} color={'tomato'} />
          <View>
            <S.ContactTextBlack>Não consegue acessar?</S.ContactTextBlack>
            <S.ContactTextRed>Entre em contato conosco</S.ContactTextRed>
          </View>
        </S.LoginButton>
        <S.StyledImage source={require('../../assets/© TotalEnergies - 2023.png')} />
      </S.InsideContainer>
    </S.Container>
  );
};

export default StartScreen;

import React, { useState } from 'react';
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

const ProfileConfigScreen: React.FC = () => {
  const navigation = useNavigation();
  const loadInBrowser = (url: any) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
          <View>
            <Text style={{ color: 'black', fontSize: 24 }} >
              Maxwell
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

          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => { }}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <MaterialIcons name="lock" size={20} color="black" />
            </View>
            <Text>Redefinir senha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            onPress={() => { }}
          >
            <View style={{
              backgroundColor: '#D8D8D8', width: 32, height: 32,
              alignItems: 'center',
              justifyContent: 'center', borderRadius: 50
            }}>

              <MaterialIcons name="person-off" size={20} color="black" />

            </View>
            <Text>Desativar minha conta</Text>
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

export default ProfileConfigScreen;

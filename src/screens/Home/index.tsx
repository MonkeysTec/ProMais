import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const menuItems = [
  { title: 'Extrato', icon: 'filetext1' },
  { title: 'Codigo escaneado', icon: 'scan1' },
  { title: 'Indique um "bipador"', icon: 'user' },
  { title: 'Conheça Total Energies', icon: 'bolt' },
  { title: 'LubConsult', icon: 'tool' },
  { title: 'Como funciona', icon: 'questioncircleo' },
  { title: 'FAQ', icon: 'infocirlceo' },
];

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá Max</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      <View style={styles.cardBalance}>
        <Text style={{ color: 'black', fontWeight: '600' }}>Saldo</Text>
        <Text style={{ color: 'black', fontWeight: '600', fontSize: 30 }}>R$420,00</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="filetext1" size={24} color="#A6A6A6" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver extrato</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.greenButton}>
          <FontAwesome name="dollar" size={20} color="white" style={styles.icon} />
          <Text style={styles.greenButtonText}>Resgatar agora</Text>
       </TouchableOpacity>
      </View>
      <Image source={require('../../assets/home-img.png')} style={[styles.outline1, styles.imageBig]} />
      <Text style={styles.text}>Clube Pro+. O clube de fidelidade da Total Energies.</Text>

      <ScrollView style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <AntDesign name={item.icon} size={24} color="#000" />
            <Text style={styles.menuItemText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={24} color="#000" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#F3F3F3'
  },  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    width:'80%'
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
    height: 230,
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
  },
  text_subTitleSize:{
        fontSize: 14
    },
      text_subTitle: {
        marginTop: 10,
        fontWeight: "bold"
    },
  button: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  buttonText: {
    color: '#A6A6A6',
    fontSize: 16,
  },
  underline: {
    height: 1,
    backgroundColor: '#A6A6A6',
    width: '100%',
    marginTop: 4,
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#85D151',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 200,
    width:200
  },
  icon: {
    marginRight: 10,
  },
  greenButtonText: {
    color: 'white',
    fontSize: 16,
  },
  menu: {
    width: '90%',
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  menuItemIcon: {
    marginRight: 10,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  outline1: { color: '#000000', left: -1, top: -1 },
  imageBig: {
    width: '80%',
    resizeMode: 'cover',
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8
  },
});

export default HomeScreen;

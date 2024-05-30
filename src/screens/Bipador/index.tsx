import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Bipador: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [bipadoresSample, setBipadoresSample] = useState([
    {
      name: 'Mariana',
      Status: 'Yes',
    },
    {
      name: 'Roberto',
      Status: 'No',
    },
    {
      name: 'Juliana',
      Status: 'Yes',
    },
    {
      name: 'Carlos',
      Status: 'Yes',
    },
    {
      name: 'Pedro',
      Status: 'Pending',
    },
    {
      name: 'Matheus',
      Status: 'Pending',
    },

  ]);

  const handleBipChange = (index: number, newStatus: string) => {
    setBipadoresSample(prevState => {
      const updatedBipadoresSample = [...prevState];
      updatedBipadoresSample[index].Status = newStatus;
      return updatedBipadoresSample;
    });
  };
  const handleDelete = (index: number) => {
    setBipadoresSample(prevState => {
      const updatedBipadoresSample = [...prevState];
      updatedBipadoresSample.splice(index, 1);
      return updatedBipadoresSample;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={{ color: 'white', fontWeight: '800' }}>Olá Max</Text>
        <Ionicons name="reload" size={24} color="white" />
      </View>
      
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', 
        gap: 10, width: '100%', 
        marginLeft: 80 }} onPress={() => navigation.replace('Start')} >

          <Feather style={{ top: 10 }} name="arrow-left" size={24} color="black" />
          <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>
      
      <View style={{

        marginLeft: 10,
        marginBottom: 20,
        width: '85%',
        height: '60%'
      }}>
        <View style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          borderRadius: 10, padding: 15
        }} >

          <TouchableOpacity >
            <View style={{
              backgroundColor: 'red', borderRadius: 40, width: 200, justifyContent: 'center',
              height: 25, alignItems: 'center', flexDirection: 'row', marginTop: 20
            }} >
              <AntDesign name="adduser" size={24} color="white" />
              <Text style={{ fontSize: 14, color: 'white', fontWeight: '700', marginLeft: 10 }}>
                Indique um bipador</Text>

            </View>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'column', marginTop: 20
          }} >

            <Text style={{ fontSize: 16, color: 'red', fontWeight: '700', marginLeft: 10 }}>
              Cadastrados</Text>
            <Text style={{ fontSize: 16, color: 'grey', fontWeight: '700', marginLeft: 10 }}>
              Gerencie os bipadores indicados</Text>

          </View>
          <View style={{
            flexDirection: 'column', marginTop: 20
          }} >

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }} >
              <Text style={{ marginRight: 70, fontSize: 16, color: 'red', fontWeight: '600' }} >
                Nome
              </Text>
              <Text style={{ fontSize: 16, color: 'red', fontWeight: '600' }}>
                Status
              </Text>
              <Text style={{ fontSize: 16, color: 'red', fontWeight: '600' }}>
                Excluir
              </Text>

            </View>
            {bipadoresSample.map((bip, index) => (
              <View key={index} style={{
                flexDirection: 'row', width: '100%',
                justifyContent: 'flex-start', marginTop: 10
              }} >
                <Text style={{
                  marginRight: 70, fontSize: 16, color: 'grey',
                  fontWeight: '600', width: 100
                }} >
                  {bip.name}
                </Text>
                <View style={{ width: 80 }} >

                  {bip.Status === 'Yes' ?
                    <TouchableOpacity onPress={() => handleBipChange(index, 'No')} >

                      <MaterialIcons style={{ margin: -15 }} name="toggle-on" size={60} color="#85D151" />
                    </TouchableOpacity>
                    :
                    null
                  }
                  {bip.Status === 'No' ?
                    <TouchableOpacity onPress={() => handleBipChange(index, 'Yes')}>

                      <MaterialIcons style={{ margin: -15 }} name="toggle-off" size={60} color="grey" />
                    </TouchableOpacity>

                    :
                    null
                  }
                  {bip.Status === 'Pending' ?
                    <View style={{ flexDirection: 'row', marginLeft: -25 }} >
                      <AntDesign style={{ top: 2 }} name="exclamationcircle" size={16} color="#D7D711" />
                      <Text style={{ color: '#D7D711' }} > Pendente</Text>
                    </View>
                    :
                    null
                  }
                </View>
                <View style={{ width: 28, height: 28, borderRadius: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }} >
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <View style={{ width: 28, height: 28, borderRadius: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }} >
                      <AntDesign name="delete" size={20} color="white" />
                    </View>
                  </TouchableOpacity>


                </View>
              </View>
            ))}

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
    height: 150,
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 20,

    marginTop: 20,
  },


});

export default Bipador;

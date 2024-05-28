import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';
interface CardNewsProps{
    image:string;
    date:string;
    title:string;
    description:string
}
const CardNews = ({date,description,image,title}:CardNewsProps) => {
  return(
    <View style={styles.card}>
    <Image source={require('../../assets/home-img.png')} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardDate}>{date}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity style={styles.cardButton} onPress={() => console.log('Saiba mais pressed')}>
      <Text style={styles.cardButtonText}>Saiba mais</Text>
    </TouchableOpacity>
    </View>
    
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      backgroundColor: '#d32f2f',
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    greeting: {
      color: '#fff',
      fontSize: 20,
    },
    refreshText: {
      color: '#fff',
      fontSize: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 16,
    },
    card: {
        width:'90%',
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: 16,
      overflow: 'hidden',
      flexDirection:'row',
    },
    cardImage: {
      width:150,
      height: 200,
    },
    cardContent: {
      padding: 16,
      flexDirection:'column'

    },
    cardDate: {
      fontSize: 12,
      color: '#999',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    cardDescription: {
      fontSize: 14,
      color: '#333',
      height:80
    },
    cardButton: {
      padding: 12,
      color:'red'
    },
    cardButtonText: {
      color: '#FC0103',
      fontWeight: 'bold',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
    },
    footerButtonText: {
      fontSize: 16,
      color: '#d32f2f',
    },
  });
export default CardNews;
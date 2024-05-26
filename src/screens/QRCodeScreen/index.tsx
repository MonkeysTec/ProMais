import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
      .then(response => setUserData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <View>
          <Text>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;

import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Axios } from 'axios';
import api from '../services/api';

interface User {
  username: string;
  id: number;

  // Adicione outros campos do usuário, se necessário
}

interface AuthContextType {
  user: User | null;
  userName: string | null;
  login: (userData: User) => void;
  logout: () => void;
}
interface AuthProviderType {
   children :any
  }
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider =  ({children}:AuthProviderType) => {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Verifica o localStorage ao iniciar o aplicativo
    async function loadUserFromLocalStorage() {
      const storedUser = await AsyncStorage.getItem('user');
      const storedUserName = await AsyncStorage.getItem('userName');
      if (storedUser) {
        setUser(JSON.parse(storedUser));

      }
      if (storedUserName) {
        setUserName(JSON.parse(storedUserName));
      }else{
        
        if(user){

          getNameUser();
        }
      }
      
    }
    loadUserFromLocalStorage();
  }, []);

  const getNameUser = async () => {

    const { data } = await api.get('/users/me/v1/');

    if (data) {
      let nameUser = '';
      nameUser += data.token.user.firstName;
      nameUser += ' ';
      nameUser += data.token.user.lastName;
      setUserName(nameUser);
      AsyncStorage.setItem('userName', JSON.stringify(nameUser));
      console.log('userName, retrieved')
    }
  }

  const login = (userData: User) => {
    // Lógica para autenticar o usuário (por exemplo, fazer uma chamada à API)
    setUser(userData);
    // Armazena o usuário no localStorage
    AsyncStorage.setItem('user', JSON.stringify(userData));
    
    getNameUser();
    
  };

  const logout = async () => {
    // Lógica para fazer logout (por exemplo, limpar o usuário da sessão)
    setUser(null);
    // Remove o usuário do localStorage
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('userName');
    try {
      const {data} = await api.post('/users/system/logout/v1');
  
     
   
    } catch (error) {
      // Exibir mensagem de erro
     
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user,userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

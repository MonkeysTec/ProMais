import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

const SelectStorePdv: React.FC = () => {
  const { user, userName, selectPdvStore, pdvSelectedStore } = useAuth();
  const navigation = useNavigation();
  const [storesToBeep, setStoresToBeep] = useState([
    {
      name: "Loja Um",
      id: "1",
    },
    {
      name: "Loja Dois",
      id: "2",
    },
    {
      name: "Loja Três",
      id: "3",
    },
    {
      name: "Loja Quatro",
      id: "4",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: -50,
          flexDirection: "column",
          padding: 20,
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            width: "100%",
            height: "auto",
            borderRadius: 10,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ScrollView style={{ width: '100%', height: 'auto' }} >
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 24,
                color: "red",
                fontWeight: "600",
                marginBottom: 30
              }}
            >
              Escolha seu PDV
            </Text>

            {storesToBeep.map((store, index) => (
              <TouchableOpacity onPress={() => {
                selectPdvStore(store.name)
                navigation.navigate("Home");
              }} activeOpacity={1}>
                <View style={styles.menuItem}  >
                  <Text style={{ fontWeight: '600', fontSize: 20 }}>{store.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F3F3F3",
  },

  homeText: {
    fontSize: 20,

    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 4,
  },
});

export default SelectStorePdv;

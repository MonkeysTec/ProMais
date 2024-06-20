import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";
import * as S from './styles';

const SelectTypeAccount: React.FC = () => {
  const { userName, selectTypeAccount, selectPdvStore } = useAuth();
  const navigation = useNavigation();

  return (
    <S.Container>
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView style={{ width: "100%", height: "auto" }}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 24,
                color: "red",
                fontWeight: "600",
                marginBottom: 30,
              }}
            >
              Escolha seu tipo de conta
            </Text>
            <S.MenuItem
              onPress={() => {
                selectTypeAccount("Rede");
                navigation.navigate("SelectPdvStore");
              }}
              activeOpacity={1}
            >
              <Text style={{ fontWeight: "600", fontSize: 20 }}>
                Rede
              </Text>
              <View
                style={
                  stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
                }
              >
                <Ionicons name="chevron-forward" size={24} color="white" />
              </View>
            </S.MenuItem>
            <S.MenuItem
              onPress={() => {
                selectTypeAccount("Filho");
                selectPdvStore("FilhoAccount");
                navigation.navigate("Home");
              }}
              activeOpacity={1}
            >
              <Text style={{ fontWeight: "600", fontSize: 20 }}>
                Filho
              </Text>
              <View
                style={
                  stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
                }
              >
                <Ionicons name="chevron-forward" size={24} color="white" />
              </View>
            </S.MenuItem>
          </ScrollView>
        </View>
      </View>
    </S.Container>
  );
};

export default SelectTypeAccount;
import React, { useState } from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/LoginContext";
import * as S from './styles';

const SelectStorePdv: React.FC = () => {
  const { userName, selectPdvStore } = useAuth();
  const navigation = useNavigation();
  const [storesToBeep, setStoresToBeep] = useState([
    { name: "Loja Um", id: "1" },
    { name: "Loja Dois", id: "2" },
    { name: "Loja Três", id: "3" },
    { name: "Loja Quatro", id: "4" },
  ]);

  return (
    <S.Container>
      <S.RedViewHeaderContainer>
        <S.RedViewFirstText>Olá</S.RedViewFirstText>
        <S.RedViewSecondText>{userName}</S.RedViewSecondText>
      </S.RedViewHeaderContainer>
      <S.ViewWrapper>
        <S.InnerView>
          <S.ScrollContainer>
            <S.HeaderText>Escolha seu PDV</S.HeaderText>
            {storesToBeep.map((store, index) => (
              <S.MenuItem
                key={index}
                onPress={() => {
                  selectPdvStore(store.name);
                  navigation.navigate("Home");
                }}
                activeOpacity={1}
              >
                <S.MenuItemText>{store.name}</S.MenuItemText>
                <S.ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
                  <Ionicons name="chevron-forward" size={24} color="white" />
                </S.ViewHCenterW30H30BorderRadius50BackgroundColor85d151>
              </S.MenuItem>
            ))}
          </S.ScrollContainer>
        </S.InnerView>
      </S.ViewWrapper>
    </S.Container>
  );
};

export default SelectStorePdv;
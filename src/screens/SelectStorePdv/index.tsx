import React, {  useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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
    <View style={stylesDefault.container}>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
      </View>
      <View style={stylesDefault.viewContainer}>
        <View style={stylesDefault.viewInnerContainer}>
          <ScrollView style={stylesDefault.scrollViewFull}>
            <Text style={stylesDefault.headerText}>Escolha seu PDV</Text>
            {storesToBeep.map((store, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  selectPdvStore(store.name);
                  navigation.navigate("Home");
                }}
                activeOpacity={1}
              >
                <View style={stylesDefault.menuItem}>
                  <Text style={stylesDefault.menuItemTextBold}>
                    {store.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SelectStorePdv;

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
                key={index}
              >
                <View style={stylesDefault.menuItem}>
                  <Text style={stylesDefault.menuItemTextBold}>
                    {store.name}
                  </Text>
                  <View
                    style={
                      stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151
                    }
                  >
                    <Ionicons name="chevron-forward" size={24} color="white" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

<<<<<<< HEAD
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
    justifyContent: "space-between",
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

=======
>>>>>>> febad1486d3fa65d98a5a276e7e7700576a8e286
export default SelectStorePdv;

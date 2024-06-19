import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";
import Feather from "@expo/vector-icons/Feather";

const HowWorks: React.FC = () => {
  const { userName } = useAuth();

  return (
    <View style={stylesDefault.container}>
    <View style={stylesDefault.RedViewHeaderContainer}>
      <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
        <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
        <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
      </View>
    </View>
    <View style={stylesDefault.ViewBody}>
      <View style={stylesDefault.infoContainer}>
        <Text style={stylesDefault.SmallText_Black_600}>Como funciona?</Text>
        <Image
          source={require("../../assets/home-img.png")}
          style={stylesDefault.Image_W100_H100_Tint_Red}
        />
        <View>
          <Text style={stylesDefault.SmallText_Black_30_600}>Muito + Simples</Text>
          <Text style={stylesDefault.SmallText_Black_30_600}>
            Muito + Fácil de ganhar!
          </Text>
        </View>
      </View>
      <ScrollView style={stylesDefault.scrollView}>
        <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
          <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
            <View style={stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151}>
              <MaterialCommunityIcons name="cellphone" size={40} color="white" />
            </View>
            <View style={stylesDefault.View_Row_VCenter_W24_H12} />
            <View>
              <Text style={stylesDefault.SmallText_Black_30_600}>Cadastre-se no programa</Text>
              <Text style={stylesDefault.SmallText_Black_18_600}>
                Faça parte do nosso clube de fidelidade e tenha muitos benefícios.
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
          <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
            <View style={stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151}>
              <Feather name="shopping-cart" size={36} color="white" />
            </View>
            <View style={stylesDefault.View_Row_VCenter_W24_H12} />
            <View>
              <Text style={stylesDefault.SmallText_Black_30_600}>Compre produtos TE</Text>
              <Text style={stylesDefault.SmallText_Black_18_600}>
                Escaneie os códigos das caixas e aumente suas recompensas. {"\n"}
                + Compras {"\n"}
                + Recompensas.
              </Text>
            </View>
          </View>
        </View>
        <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
          <View style={stylesDefault.View_Row_HSpaceBetween_VCenter_W100}>
            <View style={stylesDefault.View_HCenter_W30_H30_BorderRadius50_BackgroundColor_85d151}>
              <AntDesign name="Trophy" size={40} color="white" />
            </View>
            <View style={stylesDefault.View_Row_VCenter_W24_H12} />
            <View>
              <Text style={stylesDefault.SmallText_Black_30_600}>
                Resgate seus prêmios {"\n"}+ SIMPLES {"\n"}+ PRÁTICO
              </Text>
              <Text style={stylesDefault.SmallText_Black_18_600}>
                Recompensas = PIX. É isso mesmo. Seus benefícios a um clique de
                resgate. Basta informar sua chave PIX e aproveitar.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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

  containerRed: {
    backgroundColor: "red",
    height: 100,
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HowWorks;

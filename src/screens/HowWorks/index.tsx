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
    <View style={styles.container}>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
      </View>
      <View style={stylesDefault.ViewBody}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            bottom: 30,
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: 20, alignSelf: "flex-start" }}
          >
            Como funciona?
          </Text>
          <Image
            source={require("../../assets/home-img.png")}
            style={{
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 10,
              marginTop: 10,
              width: "100%",
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                color: "red",
                marginTop: 10,
              }}
            >
              Muito + Simples
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 20, color: "red" }}>
              Muito + Facil de ganhar!
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          paddingHorizontal: 20,
          marginTop: -10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            gap: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          >
            <MaterialCommunityIcons name="cellphone" size={40} color="white" />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              height: "auto",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 16,
                color: "red",
              }}
            >
              Cadastre-se no programa
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 14 }}>
              Faça parte do nosso clube de fidelidade e tenha muitos benefícios.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            gap: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 20,
            marginTop: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          >
            <Feather
              style={{ right: 1, top: 2 }}
              name="shopping-cart"
              size={36}
              color="white"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 16,
                color: "red",
              }}
            >
              Compre produtos TE
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 14 }}>
              Escaneie os códigos das caixas e aumente suas recompensas. {"\n"}+
              Compras {"\n"}+ Recompensas.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            gap: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 20,
            marginTop: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
          >
            <AntDesign name="Trophy" size={40} color="white" />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 16,
                color: "red",
              }}
            >
              Resgate seus prêmios{"\n"}+ SIMPLES{"\n"}+ PRÁTICO
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 14 }}>
              Recompensas = PIX. É isso mesmo. Seus benefícios a um clique de
              resgate. Basta informar sua chave PIX e aproveitar.
            </Text>
          </View>
        </View>
      </ScrollView>
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

import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { RainbowLine } from "../../components/RainbowLine";
import { Dots } from "../../components/Dots";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StartScreen: React.FC = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <RainbowLine />
      <View style={styles.insideContainer}>
        <Image
          source={require("../../assets/splashImg.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Vem ser +, vem ser Pro+</Text>
        <Image
          source={require("../../assets/home-img.png")}
          style={[styles.outline1, styles.imageBig]}
        />
        <Text style={styles.text}>
          Clube Pro+. O clube de fidelidade da Total Energies.
        </Text>
        <Dots />
        <TouchableOpacity onPress={handleSignUp} style={styles.joinButton}>
          <Text style={styles.joinText}>Quero me cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginText}>Entrar</Text>
          <Ionicons name={"arrow-forward"} size={18} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactContainer}>
          <MaterialIcons name={"headset-mic"} size={32} color={"tomato"} />
          <View>
            <Text style={styles.contactTextBlack}>Não consegue acessar?</Text>
            <Text style={styles.contactTextRed}>Entre em contato conosco</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/© TotalEnergies - 2023.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  insideContainer: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 50,
  },
  image: {
    width: 101,
    height: 61,
    resizeMode: "contain",
    marginTop: 60,
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  imageBig: {
    width: "100%",
    resizeMode: "cover",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  joinButton: {
    backgroundColor: "#85d151",
    marginTop: 100,
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  joinText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 10,
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    gap: 10,
  },
  loginText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  contactContainer: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height:50,
    borderColor:'black',
    borderWidth:1,
    borderRadius:25
  },
  contactTextBlack: {
    fontSize: 14,
    color: "#000",
    fontWeight: "800",
  },
  contactTextRed: {
    fontSize: 14,
    color: "red",
    fontWeight: "800",
  },
  totalEnergies: {
    width: 210,
    height: 30,
    resizeMode: "contain",
  },
  outline1: { color: "#000000", left: -1, top: -1 },
});

export default StartScreen;

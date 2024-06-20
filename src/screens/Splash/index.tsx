import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const SplashScreenComponent: React.FC<{ navigation: any }> = ({
  navigation,
}) => {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      navigation.replace("Start");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/splashImg.png")}
        style={styles.image}
      />
      <View style={styles.smallContainer}>
        <Image
          source={require("../../assets/logo-total.png")}
          style={styles.logo}
        />
        <Image
          source={require("../../assets/© TotalEnergies - 2023.png")}
          style={styles.copyLogo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "60%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  smallContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: 210,
    height: 127,
    resizeMode: "contain",
  },
  logo: {
    width: 144,
    height: 81,
    resizeMode: "contain",
    marginTop: 150,
  },
  copyLogo: {
    width: 114,
    height: 12,
    resizeMode: "contain",
  },
});

export default SplashScreenComponent;

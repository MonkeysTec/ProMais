import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

const Bipador: React.FC = () => {
  const { user, userName, login, logout } = useAuth();
  const navigation = useNavigation();
  const [bipadoresSample, setBipadoresSample] = useState([]);
  const [name, setName] = useState("");

  const getBipadores = async () => {
    const { data } = await api.get(
      "/tempcode/register/status/v1/?subtypeUser=PDV_BEEPER"
    );
    if (data) {
      setBipadoresSample(data.results);
    }
  };

  const inviteNewBeeper = async () => {
    try {
      const { data } = await api.get("/users/gen/jwe/v1");
      if (data) {
        console.log("JWE token found, can invite a beeper!");
        const jweToken = data.jwe;
        try {
          const { data } = await api.get(
            "/tempcode/register/status/v1/?subtypeUser=PDV_BEEPER"
          );
          if (data) {
            console.log(
              "Url to invitation found!, trying to prepare invite url"
            );
            let urlInvite = data.urlToInvite;
            urlInvite += jweToken;
            Linking.openURL(urlInvite).catch((err) =>
              console.error("Couldn't load page", err)
            );
            console.log("Invite created! Opening browser");
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBipadores();
  }, []);

  const handleBipChange = async (
    index: number,
    newStatus: string,
    bipId: string
  ) => {
    let bipadoresNew = [...bipadoresSample];
    if (newStatus === "NOT_ACTIVE") {
      bipadoresNew[index].registrationStatus = "SUSPENDED";
      setBipadoresSample(bipadoresNew);
      try {
        const { data } = await api.put(`/users/system/suspend/v1/${bipId}`);
        if (data.message === "success") {
          getBipadores();
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (newStatus === "ACTIVE") {
      bipadoresNew[index].registrationStatus = "ACTIVE";
      setBipadoresSample(bipadoresNew);
      try {
        const { data } = await api.put(`/users/system/activate/v1/${bipId}`);
        if (data.message === "success") {
          getBipadores();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleDelete = (index: number) => {
    setBipadoresSample((prevState) => {
      const updatedBipadoresSample = [...prevState];
      updatedBipadoresSample.splice(index, 1);
      return updatedBipadoresSample;
    });
  };

  return (
    <View style={styles.container}>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
      </View>

      {/* <TouchableOpacity style={{
        flexDirection: 'row', alignItems: 'center',
        gap: 10, width: '100%',
        marginLeft: 80, marginTop:-40
      }} onPress={() => navigation.navigate('Home')} >

        <Feather style={{ top: 10 }} name="arrow-left" size={24} color="black" />
        <Text style={styles.homeText}>Home</Text>
      </TouchableOpacity> */}

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
          }}
        >
          <TouchableOpacity onPress={() => inviteNewBeeper()}>
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 40,
                width: "100%",
                justifyContent: "center",
                height: 50,
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <AntDesign name="adduser" size={24} color="white" />
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  fontWeight: "700",
                  marginLeft: 10,
                }}
              >
                Indique um bipador
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 16, color: "red", fontWeight: "700" }}>
              Cadastrados
            </Text>
            <Text style={{ fontSize: 16, color: "grey", fontWeight: "700" }}>
              Gerencie os bipadores indicados
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginTop: 20,
              height: "auto",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  marginRight: 70,
                  fontSize: 16,
                  color: "red",
                  fontWeight: "600",
                }}
              >
                Nome
              </Text>
              <Text style={{ fontSize: 16, color: "red", fontWeight: "600" }}>
                Status
              </Text>
              <Text style={{ fontSize: 16, color: "red", fontWeight: "600" }}>
                Excluir
              </Text>
            </View>

            {bipadoresSample.length > 0 ? (
              bipadoresSample.map((bip, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "flex-start",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      marginRight: 70,
                      fontSize: 16,
                      color: "grey",
                      fontWeight: "600",
                      width: 100,
                    }}
                  >
                    {bip.nameUser}
                  </Text>
                  <View style={{ width: 80 }}>
                    {bip.registrationStatus === "ACTIVE" ? (
                      <TouchableOpacity
                        onPress={() =>
                          handleBipChange(index, "NOT_ACTIVE", bip.systemUserID)
                        }
                      >
                        <MaterialIcons
                          style={{ margin: -15 }}
                          name="toggle-on"
                          size={60}
                          color="#85D151"
                        />
                      </TouchableOpacity>
                    ) : null}
                    {bip.registrationStatus !== "INVITE_NOT_ACCEPT" &&
                    bip.registrationStatus !== "ACTIVE" ? (
                      <TouchableOpacity
                        onPress={() =>
                          handleBipChange(index, "ACTIVE", bip.systemUserID)
                        }
                      >
                        <MaterialIcons
                          style={{ margin: -15 }}
                          name="toggle-off"
                          size={60}
                          color="grey"
                        />
                      </TouchableOpacity>
                    ) : null}
                    {bip.registrationStatus === "INVITE_NOT_ACCEPT" ? (
                      <View style={{ flexDirection: "row", marginLeft: -25 }}>
                        <AntDesign
                          style={{ top: 2 }}
                          name="exclamationcircle"
                          size={16}
                          color="#D7D711"
                        />
                        <Text style={{ color: "#D7D711" }}> Pendente</Text>
                      </View>
                    ) : null}
                  </View>
                  <View
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 50,
                      backgroundColor: "red",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity onPress={() => handleDelete(index)}>
                      <View
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 50,
                          backgroundColor: "red",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <AntDesign name="delete" size={20} color="white" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  alignSelf: "flex-start",
                  color: "grey",
                }}
              >
                Você ainda não indicou nenhum bipador
              </Text>
            )}
          </View>
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
});

export default Bipador;

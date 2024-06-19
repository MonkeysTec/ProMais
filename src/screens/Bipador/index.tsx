import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

import * as S from "./styles";

const Bipador: React.FC = () => {
  const { userName } = useAuth();

  const [bipadoresSample, setBipadoresSample] = useState([]);

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
        const jweToken = data.jwe;
        try {
          const { data } = await api.get(
            "/tempcode/register/status/v1/?subtypeUser=PDV_BEEPER"
          );
          if (data) {
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
    <S.Container>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </View>
      </View>

      <View style={stylesDefault.BipView}>
        <View style={stylesDefault.innerBipView}>
          <TouchableOpacity onPress={() => inviteNewBeeper()}>
            <View style={stylesDefault.InviteBeeperButton}>
              <AntDesign name="adduser" size={24} color="white" />
              <Text style={stylesDefault.InviteBeeperButtonText}>
                Indique um bipador
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 20, flexDirection: "column" }}>
            <Text style={stylesDefault.BipadoresTitle}>Cadastrados</Text>
            <Text style={stylesDefault.BipadoresSubtitle}>
              Gerencie os bipadores indicados
            </Text>
          </View>
          <View style={{ marginTop: 20, flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Text style={stylesDefault.BipNameHeader}>Nome</Text>
              <Text style={stylesDefault.BipStatusHeader}>Status</Text>
              <Text style={stylesDefault.BipDeleteHeader}>Excluir</Text>
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
                  <Text style={stylesDefault.BipName}>{bip.nameUser}</Text>
                  <View style={{ width: 80 }}>
                    {bip.registrationStatus === "ACTIVE" ? (
                      <TouchableOpacity
                        onPress={() =>
                          handleBipChange(index, "NOT_ACTIVE", bip.systemUserID)
                        }
                      >
                        <MaterialIcons
                          style={stylesDefault.ToggleIcon}
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
                          style={stylesDefault.ToggleIcon}
                          name="toggle-off"
                          size={60}
                          color="grey"
                        />
                      </TouchableOpacity>
                    ) : null}
                    {bip.registrationStatus === "INVITE_NOT_ACCEPT" ? (
                      <View style={stylesDefault.PendingContainer}>
                        <AntDesign
                          style={stylesDefault.PendingIcon}
                          name="exclamationcircle"
                          size={16}
                          color="#D7D711"
                        />
                        <Text style={stylesDefault.PendingText}>Pendente</Text>
                      </View>
                    ) : null}
                  </View>
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <View style={stylesDefault.DeleteButton}>
                      <AntDesign name="delete" size={20} color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text style={stylesDefault.NoBipadoresText}>
                Você ainda não indicou nenhum bipador
              </Text>
            )}
          </View>
        </View>
      </View>
    </S.Container>
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

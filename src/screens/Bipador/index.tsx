import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";
import * as S from './styles';

const Bipador: React.FC = () => {
  const { userName } = useAuth();
  const navigation = useNavigation();
  const [bipadoresSample, setBipadoresSample] = useState([]);
  const [name, setName] = useState("");

  const getBipadores = async () => {
    const { data } = await api.get("/tempcode/register/status/v1/?subtypeUser=PDV_BEEPER");
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
          const { data } = await api.get("/tempcode/register/status/v1/?subtypeUser=PDV_BEEPER");
          if (data) {
            console.log("Url to invitation found!, trying to prepare invite url");
            let urlInvite = data.urlToInvite;
            urlInvite += jweToken;
            Linking.openURL(urlInvite).catch((err) =>
              console.error("Couldn't load page", err),
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
    bipId: string,
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
      <S.RedViewHeaderContainer>
        <View style={{ flexDirection: "row", alignItems: "flex-end", paddingTop:15 }}>
          <S.RedViewFirstText>Olá</S.RedViewFirstText>
          <S.RedViewSecondText>{userName}</S.RedViewSecondText>
        </View>
      </S.RedViewHeaderContainer>

      <S.ContentContainer>
        <S.InviteButton onPress={() => inviteNewBeeper()}>
          <AntDesign name="adduser" size={24} color="white" />
          <S.InviteButtonText>Indique um bipador</S.InviteButtonText>
        </S.InviteButton>
        <S.SectionTitleContainer>
          <S.SectionTitleText>Cadastrados</S.SectionTitleText>
          <S.SectionSubtitleText>Gerencie os bipadores indicados</S.SectionSubtitleText>
        </S.SectionTitleContainer>
        <S.BeeperListContainer>
          <S.BeeperListHeader>
            <S.BeeperListHeaderText>Nome</S.BeeperListHeaderText>
            <S.BeeperListHeaderText>Status</S.BeeperListHeaderText>
            <S.BeeperListHeaderText>Excluir</S.BeeperListHeaderText>
          </S.BeeperListHeader>

          {bipadoresSample.length > 0 ? (
            bipadoresSample.map((bip, index) => (
              <S.BeeperItem key={index}>
                <S.BeeperItemText>{bip.nameUser}</S.BeeperItemText>
                <S.BeeperStatusContainer>
                  {bip.registrationStatus === "ACTIVE" ? (
                    <TouchableOpacity
                      onPress={() => handleBipChange(index, "NOT_ACTIVE", bip.systemUserID)}
                    >
                      <MaterialIcons name="toggle-on" size={60} color="#85D151" />
                    </TouchableOpacity>
                  ) : null}
                  {bip.registrationStatus !== "INVITE_NOT_ACCEPT" &&
                  bip.registrationStatus !== "ACTIVE" ? (
                    <TouchableOpacity
                      onPress={() => handleBipChange(index, "ACTIVE", bip.systemUserID)}
                    >
                      <MaterialIcons name="toggle-off" size={60} color="grey" />
                    </TouchableOpacity>
                  ) : null}
                  {bip.registrationStatus === "INVITE_NOT_ACCEPT" ? (
                    <S.PendingContainer>
                      <AntDesign name="exclamationcircle" size={16} color="#D7D711" />
                      <S.PendingText>Pendente</S.PendingText>
                    </S.PendingContainer>
                  ) : null}
                </S.BeeperStatusContainer>
                <S.DeleteButton onPress={() => handleDelete(index)}>
                  <AntDesign name="delete" size={20} color="white" />
                </S.DeleteButton>
              </S.BeeperItem>
            ))
          ) : (
            <S.NoBeeperText>Você ainda não indicou nenhum bipador</S.NoBeeperText>
          )}
        </S.BeeperListContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Bipador;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import * as S from './styles';  // Importe os componentes estilizados

interface DistributorsModel {
  _id: string;
  fantasyName: string;
  socialName: string;
  document: string;
  logo: string;
  email: string;
  primaryPhone: string;
  company: string;
  created_at: string;
  update_at: string;
  status: string;
  address: string;
  address_number: string;
  address_neighborhood: string;
  address_postal_code: string;
  address_complement: string;
  address_city: string;
  address_state: string;
  type: string;
  pixKeyType: string;
  pixKey: string | null;
  subtype: string | null;
  regionalRepresentative: string;
  regionalManager: string;
  regionalExecutive: string;
  responsibleSeller: string | null;
  mainCompFantasyName: string;
  mainCompSocialName: string;
}

const DistributorsScreen: React.FC = () => {
  const [distributorsNew, setDistributorsNew] = useState<DistributorsModel[]>([]);
  const { userName } = useAuth();

  const getDistributors = async () => {
    const { data } = await api.get("/distributor/v1/?status=ACTIVE");
    setDistributorsNew(data.results);
  };

  useEffect(() => {
    getDistributors();
  }, []);

  return (
    <S.Container>
      <S.ContainerRed>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <S.RedViewFirstText>Olá</S.RedViewFirstText>
          <S.RedViewSecondText>{userName}</S.RedViewSecondText>
        </View>
      </S.ContainerRed>
      <S.ViewBody style={{ padding: 20, marginBottom: 50 }}>
        <S.DistributorCard>
          <Text style={{ color: "red", fontSize: 20, fontWeight: "600", marginBottom: 20 }}>
            Distribuidor
          </Text>
          <ScrollView style={{ width: "100%", height: "100%" }}>
            {distributorsNew.map((dist, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: "row",
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: "#F3F3F3",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Text style={{ color: "black", fontSize: 14, fontWeight: "600" }}>
                      {dist.fantasyName.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </S.DistributorCard>
      </S.ViewBody>
    </S.Container>
  );
};

export default DistributorsScreen;
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";

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
  const [distributorsNew, setDistributorsNew] = useState<DistributorsModel[]>(
    [],
  );
  const { user, userName, login, logout } = useAuth();

  const getDistributors = async () => {
    const { data } = await api.get("/distributor/v1/?status=ACTIVE");

    setDistributorsNew(data.results);
  };
  useEffect(() => {
    getDistributors();
  }, []);
  const distributors = [
    {
      firstName: "Rodrigo",
      lastName: "Farias",
    },
    {
      firstName: "Pedro",
      lastName: "Lima",
    },
    {
      firstName: "João",
      lastName: "Farias",
    },
    {
      firstName: "Mariana",
      lastName: "Oliveira",
    },
    {
      firstName: "Julia",
      lastName: "Ferreira",
    },
    {
      firstName: "João",
      lastName: "Farias",
    },
    {
      firstName: "Mariana",
      lastName: "Oliveira",
    },
    {
      firstName: "Julia",
      lastName: "Ferreira",
    },
    {
      firstName: "João",
      lastName: "Farias",
    },
    {
      firstName: "Mariana",
      lastName: "Oliveira",
    },
    {
      firstName: "Julia",
      lastName: "Ferreira",
    },
  ];
  return (
    <View style={styles.container}>
    <View style={stylesDefault.RedViewHeaderContainer}>
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
        <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
      </View>
      {/* <Ionicons name="reload" size={24} color="white" /> */}
    </View>
    <View style={stylesDefault.contentContainer}>
      <View style={stylesDefault.formContainer}>
        <Text style={stylesDefault.formTitle}>Distribuidor</Text>
        <ScrollView style={{ width: "100%", height: "100%" }}>
          {distributorsNew.map((dist, index) => (
            <TouchableOpacity
              key={index}
              style={[
                stylesDefault.row,
                {
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: "#F3F3F3",
                },
              ]}
            >
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                      fontWeight: "600",
                    }}
                  >
                    {dist.fantasyName.toUpperCase()}
                  </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F3F3F3",
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    width: "80%",
  },
  containerRed: {
    backgroundColor: "red",
    height: 150,
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    borderBottomLeftRadius: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DistributorsScreen;

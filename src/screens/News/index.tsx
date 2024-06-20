import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CardNews from "../../components/CardNews";
import api from "../../services/api";
import { useAuth } from "../../context/LoginContext";
import * as S from './styles';
import { Text } from "react-native";

interface NewInfoModel {
  id: string;
  created_at: string;
  title: string;
  shortDescription: string;
  expiresOn: string;
  update_at: string;
  imageURL: string;
  status: string;
  type: string;
  urlToMore: string;
}

const News: React.FC = () => {
  const [newsData, setNewsData] = useState<NewInfoModel[]>([]);
  const { userName } = useAuth();

  const newsGet = async () => {
    const { data } = await api.get(
      "/news/v1/?onlyNotExpired=true&status=ACTIVE",
    );

    setNewsData(data.results);
  };

  useEffect(() => {
    newsGet();
  }, []);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
  };

  return (
    <S.Container>
      <S.RedContainer>
        <Text style={{ color: "white", fontWeight: "800" }}>
          Olá {userName}
        </Text>
        <Ionicons name="reload" size={24} color="white" />
      </S.RedContainer>
      {newsData.map((item, index) => (
        <CardNews
          key={index}
          date={formatDate(item.created_at)}
          title={item.title}
          description={item.shortDescription.substring(0, 100)}
          image={item.imageURL}
        />
      ))}
    </S.Container>
  );
};

export default News;
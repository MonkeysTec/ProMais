import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useAuth } from "../../context/LoginContext";
import { stylesDefault } from "../../components/Styled";
import api from "../../services/api";
import * as S from './styles';

interface Product {
  amountBox: number;
  company: string | null;
  created_at: string;
  description: string;
  gamma: string;
  isOnCampaign: number;
  monetaryValue: number;
  name: string;
  photoURL: string;
  points: number;
  short_name: string;
  sku: number;
  status: string;
  update_at: string;
  _id: string;
}

const ProductsScreen: React.FC = () => {
  const { userName } = useAuth();
  const [productsNew, setProductsNew] = useState<Product[]>([]);

  const getProducts = async () => {
    const { data } = await api.get("/product/v1/?isOnCampaign=1&status=ACTIVE");
    setProductsNew(data.results);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <S.Container>
      <View style={stylesDefault.RedViewHeaderContainer}>
        <S.Header>
          <Text style={stylesDefault.RedViewFirstText}>Olá</Text>
          <Text style={stylesDefault.RedViewSecondText}>{userName}</Text>
        </S.Header>
      </View>
      <S.ContentContainer>
        <S.Title>Produtos participantes</S.Title>
        <S.ProductContainer>
          {productsNew.map((prod, index) => (
            <S.ProductTouchable key={index}>
              <View style={{ flexDirection: "row" }}>
                <S.ProductImageContainer>
                  {prod.photoURL && (
                    <Image
                      source={{ uri: prod.photoURL }}
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </S.ProductImageContainer>
                <S.ProductDetails>
                  <S.ProductCategory>{prod.gamma}</S.ProductCategory>
                  <S.ProductName>{prod.name}</S.ProductName>
                  <S.ProductPoints>{prod.points} Pontos</S.ProductPoints>
                </S.ProductDetails>
              </View>
            </S.ProductTouchable>
          ))}
        </S.ProductContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default ProductsScreen;
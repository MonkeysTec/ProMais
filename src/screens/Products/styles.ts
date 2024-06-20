import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F3F3F3;
`;

export const ContentContainer = styled.View`
  padding: 20px;
  margin-top: -30px;
  margin-horizontal: 20px;
  gap: 20px;
  background-color: white;
  border-radius: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: red;
  font-size: 22px;
`;

export const ProductContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const ProductTouchable = styled.TouchableOpacity`
  flex-direction: row;
  padding-vertical: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #F3F3F3;
`;

export const ProductImageContainer = styled.View`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  margin-left: 20px;
`;

export const ProductCategory = styled.Text`
  color: black;
  font-size: 12px;
  font-weight: 400;
`;

export const ProductName = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: 700;
  width: 70%;
`;

export const ProductPoints = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-top: 5px;
`;
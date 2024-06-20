import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F3F3F3;
`;

export const RedViewHeaderContainer = styled.View`
  background-color: red;
  height: 100px;
  width: 100%;
  padding-horizontal: 30px;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  flex-direction: row;
  align-items: center;
`;

export const ViewBody = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 30px;
`;

export const SectionTitle = styled.Text`
  font-weight: 600;
  font-size: 20px;
  align-self: flex-start;
`;

export const ImageStyled = styled.Image`
  border-width: 2px;
  border-color: white;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const RedText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: red;
  margin-top: 10px;
`;

export const ScrollViewStyled = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding-horizontal: 20px;
  margin-top: -10px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  margin-top: 5px;
`;

export const IconContainer = styled.View`
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const InfoTextContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  height: auto;
`;

export const InfoTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: red;
`;

export const InfoDescription = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;
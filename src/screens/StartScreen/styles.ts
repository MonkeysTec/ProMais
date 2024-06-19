import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  width: 100%;
`;

export const InsideContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  width: 100%;
  padding-horizontal: 50px;
`;

export const ImageSmall = styled.Image`
  width: 101px;
  height: 61px;
  resize-mode: contain;
  margin-top: 60px;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  color: red;
  text-shadow-color: black;
  text-shadow-offset: {width: 1px; height: 1px};
  text-shadow-radius: 1px;
`;

export const ImageBig = styled.Image`
  width: 100%;
  resize-mode: cover;
  margin-top: 30px;
  border-width: 1px;
  border-radius: 8px;
`;

export const TextStyled = styled.Text`
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  text-shadow-color: #000;
  text-shadow-offset: {width: 1px; height: 1px};
  text-shadow-radius: 1px;
`;

export const JoinButton = styled.TouchableOpacity`
  background-color: #85d151;
  margin-top: 100px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const JoinText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const LoginButton = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  flex-direction: row;
  border-width: 1px;
  border-color: #000;
  gap: 10px;
`;

export const LoginText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const ContactContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ContactTextBlack = styled.Text`
  font-size: 12px;
  color: #000;
  font-weight: 800;
`;

export const ContactTextRed = styled.Text`
  font-size: 12px;
  color: red;
  font-weight: 800;
`;

export const TotalEnergiesImage = styled.Image`
  width: 120px;
  height: 30px;
  resize-mode: contain;
  align-self:center;
`;

export const Outline1 = styled.View`
  color: #000000;
  left: -1px;
  top: -1px;
`;
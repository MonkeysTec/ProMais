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

export const BackContainer = styled.TouchableOpacity`
  margin-top: 70px;
`;

export const Counter = styled.Text`
  margin-top: 50px;
  font-size: 28px;
  font-weight: bold;
  color: #000;
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-size: 28px;
  font-weight: bold;
  color: red;
`;

export const FinishTitle = styled.Text`
  margin-top: 30px;
  font-size: 28px;
  font-weight: bold;
  color: #85d151;
`;

export const InputContainer = styled.View`
  margin-top: 5px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: 50px;
  padding-horizontal: 20px;
  border-radius: 25px;
  margin-top: 10px;
`;

export const JoinButton = styled.TouchableOpacity`
  background-color: #85d151;
  margin-top: 30px;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  flex-direction: row;
  border-width: 1px;
  border-color: #85d151;
  gap: 10px;
`;

export const JoinText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ContactContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 100px;
  align-items: center;
  gap: 10px;
`;

export const ContactTextBlack = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 800;
`;

export const ContactTextRed = styled.Text`
  font-size: 16px;
  color: red;
  font-weight: 800;
`;

export const ImageStyled = styled.Image`
  width: 101px;
  height: 61px;
  resize-mode: contain;
  margin-top: 60px;
`;
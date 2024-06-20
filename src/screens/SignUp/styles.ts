import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  width: 100%;
`;

export const InsideContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding-horizontal: 40px;
`;

export const StyledImage = styled.Image`
  width: 101px;
  height: 61px;
  resize-mode: contain;
  align-self: center;
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

export const TextStyled = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-shadow-color: #000;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 1px;
`;

export const JoinButton = styled.TouchableOpacity`
  background-color: #85d151;
  margin-top: 30px;
  width: 100%;
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

export const LoginButton = styled.TouchableOpacity`
  margin-top: 10px;
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  flex-direction: row;
  border-width: 1px;
  border-color: #000;
  background-color: #fff;
`;

export const LoginText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const ContactContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 50px;
  border-color: black;
  border-width: 1px;
  border-radius: 25px;
`;

export const ContactTextBlack = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: 800;
`;

export const ContactTextRed = styled.Text`
  font-size: 14px;
  color: red;
  font-weight: 800;
`;

export const Outline1 = styled.Text`
  color: #000;
  left: -1px;
  top: -1px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: 50px;
  padding-horizontal: 20px;
  border-radius: 25px;
  margin-top: 10px;
`;

export const InputContainer = styled.View`
  margin-top: 5px;
`;

export const BackContainer = styled.TouchableOpacity`
  margin-top: 70px;
  flex-direction: row;
`;

export const ColumnView = styled.View`
  flex-direction: column;
  justify-content: space-between;
  height: auto;
`;
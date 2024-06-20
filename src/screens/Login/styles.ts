import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: 50px;
  padding-horizontal: 20px;
  padding-right: 40px;
  border-radius: 25px;
  margin-top: 10px;
`;

export const InputPass = styled.TextInput`

  height: 50px;
  max-width: 80%;
`;

export const InputContainer = styled.View`
  height: auto;
  gap: 10px;
`;

export const BackContainer = styled.View`
  margin-top: 70px;
`;

export const InsideContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding-horizontal: 50px;
  height: 100%;
  gap: 20px;
`;

export const StyledImage = styled.Image`
  width: 101px;
  height: 61px;
  resize-mode: contain;
  margin-top: 30px;
`;

export const Title = styled.Text`
  margin-top: 0px;
  font-size: 28px;
  font-weight: bold;
  color: red;
`;

export const ImageBig = styled(StyledImage)`
  width: 100%;
  resize-mode: cover;
  margin-top: 30px;
  border-width: 1px;
  border-radius: 8px;
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
  margin-top: 40px;
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
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  flex-direction: row;
  border-width: 1px;
  border-color: #000;
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

export const TotalEnergies = styled.Image`
  width: 210px;
  height: 30px;
  resize-mode: contain;
`;

export const Outline1 = styled.Text`
  color: #000;
  left: -1px;
  top: -1px;
`;
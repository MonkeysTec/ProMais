import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  width: 100%;
`;

export const InsideContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const ImageSmall = styled.Image`
  width: 101px;
  height: 61px;
  resize-mode: contain;
  margin-top: 60px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
  height:50px;
`;

export const Title = styled.Text`
  margin-top: 30px;
  font-size: 28px;
  font-weight: bold;
  color: red;
  text-align: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-width: 1px;
  border-color: #000;
  height: 50px;
  padding-horizontal: 20px;
  border-radius: 25px;
  margin-top: 10px;
  width:100%;
  justify-content:center;
 
`;

export const CodeInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #000;
  height: 50px;
  border-radius: 25px;
  margin-top: 10px;
  padding-horizontal: 20px;
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
  background-color: #fff;
`;

export const LoginText = styled.Text`
  font-size: 18px;
  color: #000;
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

export const BottomContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  top: 0;
`;

export const ImageTotalEnergies = styled.Image`
  width: 120px;
  height: 30px;
  resize-mode: contain;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackContainer = styled.TouchableOpacity`
  margin-top: 70px;
  flex-direction: row;
`;

export const Counter = styled.Text`
  margin-top: 50px;
  font-size: 28px;
  font-weight: bold;
  color: #000;
`;

export const StepContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width:100%;
`;

export const FinishTitle = styled.Text`
  margin-top: 30px;
  font-size: 28px;
  font-weight: bold;
  color: #85d151;
`;

export const Image = styled.Image`
  width: 101px;
  height: 61px;
  resize-mode: contain;
`;
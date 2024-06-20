import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F3F3F3;
`;

export const TextStyled = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-shadow-color: #000;
  text-shadow-offset: 1px 1px;
  text-shadow-radius: 1px;
  width: 100%;
`;

export const ContainerRed = styled.View`
  background-color: red;
  height: 150px;
  width: 100%;
  padding-horizontal: 30px;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #85D151;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 200px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

export const InsideContainer = styled.View`
  width: 100%;
  padding: 50px;
`;

export const JoinButton = styled.TouchableOpacity`
  background-color: #85d151;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  flex-direction: row;
  border-width: 1px;
  border-color: #85d151;
  margin-top: 20px;
`;

export const JoinText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border-radius: 50px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: grey;
  padding: 5px;
  padding-left: 30px;
  width: 100%;
  height: 50px;
`;

export const PickerContainer = styled.View`
  border-radius: 50px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: grey;
  padding: 5px;
  width: 100%;
  height: 50px;
`;

export const DescriptionInput = styled.TextInput`
  border-top-start-radius: 20px;
  border-top-end-radius: 20px;
  border-bottom-start-radius: 20px;
  border-bottom-end-radius: 20px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: grey;
  border-radius: 20px;
  width: 100%;
  height: 180px;
  padding: 20px;
  text-align-vertical: top;
  

`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
`;
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
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
  width: 80%;
`;

export const ContainerRed = styled.View`
  background-color: red;
  height: 120px;
  width: 100%;
  padding-horizontal: 30px;
  margin-bottom: 40px;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  flex-direction: row;
  align-items: center;
`;

export const CardBalance = styled.View`
  width: 100%;
  background-color: white;
  height: auto;
  border-radius: 8px;
  margin-top: -30px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 25px;
  elevation: 10;
  padding-horizontal: 20px;
  padding-vertical: 30px;
  gap: 20px;
`;

export const GreenButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #85D151;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 200px;
  width: auto;
`;

export const GreenButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Menu = styled.ScrollView`
  width: 100%;
  margin-top: 20px;
  padding-horizontal: 20px;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 15px;
  padding-horizontal: 10px;
  background-color: white;
  border-radius: 8px;
  margin-vertical: 5px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3.84px;
  elevation: 2;
`;

export const MenuItemIcon = styled.View`
  margin-right: 10px;
`;

export const MenuItemText = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
`;

export const ModalCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  top: 240px;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  width: 100%;
  height: 40%;
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export const ButtonModal = styled.TouchableOpacity`
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
`;

export const ButtonClose = styled.TouchableOpacity`
  background-color: #2196F3;
`;

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const SelectedExtractButton = styled.TouchableOpacity`
  padding: 10px;
  border-top-color: grey;
  border-top-width: 1px;
  border-left-color: grey;
  border-left-width: 1px;
  border-right-color: grey;
  border-right-width: 1px;
  border-bottom-color: white;
  border-bottom-width: 4px;
  top: 4px;
  border-radius: 5px;
`;

export const SelectedExtractButtonText = styled.Text`
  color: red;
  font-weight: bold;
  text-align: center;
  border-bottom-color: white;
  border-bottom-width: 3px;
  border-top-color: black;
  border-top-width: 1px;
  border-left-color: black;
  border-left-width: 1px;
  border-right-color: black;
  border-right-width: 1px;
  margin-bottom: -2px;
  padding:5px;
`;

export const NotSelectedExtractButtonText = styled.Text`
  color: grey;
  font-weight: bold;
  text-align: center;
   margin-bottom: -2px;
   padding:5px;
`;

export const NotSelectedExtractButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const ModalSmallGreyText = styled.Text`
  color: #a1a1a1;
  font-size: 12px;
`;

export const ModalDarkMainText = styled.Text`
  color: black;
  font-size: 16px;
  max-width: 200px;
`;

export const ModalGreenText = styled.Text`
  color: #85D151;
  font-size: 16px;
  font-weight: 800;
  right: 15%;
  text-align: left;
  width: 100%;
  
`;

export const ModalViewColumnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 1px;
  padding: 10px;
`;

export const EyeViewStyles = styled.View`
  position: absolute;
  top: 0px;
  right: 40px;
`;

export const ModalViewContainer = styled.View`
  flex-direction: column;
  gap: 10px;
`;

export const ScrollViewContainer = styled.ScrollView`
  max-height: auto;
  margin-bottom: 50px;
`;

export const ModalExtractView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;
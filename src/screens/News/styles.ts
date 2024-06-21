import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F3F3F3;
`;

export const RedContainer = styled.View`
  background-color: red;
  height: 150px;
  width: 100%;
  padding-horizontal: 30px;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
`;

export const TextStyled = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  text-shadow-color: #000;
  text-shadow-offset: { width: 1px, height: 1px };
  text-shadow-radius: 1px;
  width: 80%;
`;

export const CardBalance = styled.View`
  width: 80%;
  background-color: white;
  height: 230px;
  border-radius: 8px;
  margin-top: -70px;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2px };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  padding-top: 30px;
  padding-left: 20px;
  gap: 20px;
`;

export const SubtitleText = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
`;

export const ButtonStyled = styled.TouchableOpacity`
  align-items: center;
  padding-left: 10px;
`;

export const ButtonText = styled.Text`
  color: #A6A6A6;
  font-size: 16px;
`;

export const Underline = styled.View`
  height: 1px;
  background-color: #A6A6A6;
  width: 100%;
  margin-top: 4px;
`;

export const GreenButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #85D151;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 200px;
  width: 200px;
`;

export const IconStyled = styled.View`
  margin-right: 10px;
`;

export const GreenButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Menu = styled.View`
  width: 90%;
  margin-top: 20px;
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
  shadow-offset: { width: 0, height: 2px };
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

export const ImageBig = styled.Image`
  width: 80%;
  resize-mode: cover;
  margin-top: 30px;
  border-width: 1px;
  border-radius: 8px;
`;

export const Outline = styled.Text`
  color: #000000;
  left: -1px;
  top: -1px;
`;
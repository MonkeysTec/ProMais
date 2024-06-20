import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #f3f3f3;
`;

export const ContainerRed = styled.View`
  background-color: red;
  height: 120px;
  width: 100%;
  padding-horizontal: 30px;
  margin-bottom: -50px;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  flex-direction: row;
  align-items: center;
`;

export const ViewBody = styled.ScrollView`
  padding-horizontal: 20px;
  width: 100%;
  height: auto;
`;

export const Menu = styled.View`
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 15px;
  padding-horizontal: 10px;
  background-color: white;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3.84px;
  elevation: 2;
`;

export const MenuItemText = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
`;

export const AnswerContainer = styled.View`
  padding: 10px;
  background-color: #f5f5f5;
  height: auto;
`;

export const Answer = styled.Text`
  font-size: 16px;
  color: #333;
`;
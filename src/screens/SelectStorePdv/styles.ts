import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F3F3F3;
`;

export const ViewWrapper = styled.View`
  margin-top: -50px;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const InnerView = styled.View`
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: auto;
`;

export const HeaderText = styled.Text`
  align-self: center;
  font-size: 24px;
  color: red;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const RedViewHeaderContainer = styled.View`
  background-color: red;
  height: 120px;
  width: 100%;
  padding-horizontal: 30px;
  justify-content: flex-start;
  border-bottom-left-radius: 40px;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
`;

export const RedViewFirstText = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 18px;
`;

export const RedViewSecondText = styled.Text`
  color: white;
  font-weight: 800;
  margin-left: 5px;
  font-size: 18px;
`;

export const ViewHCenterW30H30BorderRadius50BackgroundColor85d151 = styled.View`
  background-color: #85d151;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 30px;
  width: 30px;
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
  margin-horizontal: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3.84px;
  elevation: 4;
`;

export const MenuItemText = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;
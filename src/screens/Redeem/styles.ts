import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F3F3F3;
`;

export const CardBalance = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  gap: 20px;
  padding: 20px;
`;

export const CardWarning = styled.View`
  width: 100%;
  background-color: white;
  height: auto;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  padding-top: 20px;
  padding-left: 20px;
  gap: 20px;
  margin-top:10px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #000;
  height: 50px;
  padding-horizontal: 40px;
  border-radius: 25px;
  width: 95%;
  font-size: 20px;
  font-weight: 700;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  flex-direction: row;
  border-width: 1px;
  padding-horizontal: 20px;
  border-color: #000;
`;

export const LoginText = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

export const JoinButton = styled.TouchableOpacity`
  background-color: #85d151;
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

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  width: 100%;
`;

export const SubTitleText = styled.Text`
  font-size: 14px;
`;

export const SubTitleTextBold = styled.Text`
  margin-top: 10px;
  font-weight: bold;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const AmountText = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;

export const HighlightText = styled.Text`
  font-size: 22px;
  font-weight: 600;
  margin-top: -20px;
`;

export const WarningText = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;
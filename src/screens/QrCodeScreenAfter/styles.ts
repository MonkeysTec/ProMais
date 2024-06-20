import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  width: 100%;
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

export const CheckIconContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const CongratulationsText = styled.Text`
  font-weight: 800;
  font-size: 35px;
  color: #85d151;
`;

export const SuccessText = styled.Text`
  font-weight: 600;
  font-size: 26px;
  color: #85d151;
`;
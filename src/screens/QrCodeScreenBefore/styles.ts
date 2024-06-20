import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  top: 28px;
`;

export const InsideContainer = styled.View`
  width: 100%;
  padding: 50px;
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
  margin-top: 20px;
`;

export const JoinText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HomeButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const HomeButtonText = styled.Text`
  font-weight: 700;
  color: black;
  font-size: 20px;
`;

export const TutorialContainer = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  align-items: center;
  gap: 20px;
`;

export const TutorialText = styled.Text`
  font-size: 16px;
`;

export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  gap: 10px;
`;
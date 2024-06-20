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

export const TouchableBody = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const HeaderProfile = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
`;

export const IconView = styled.View`
  background-color: #85d151;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const SectionTitle = styled.Text`
  color: black;
  font-weight: 600;
`;

export const UserNameText = styled.Text`
  color: red;
  font-size: 24px;
  font-weight: 600;
`;

export const AvatarButton = styled.TouchableOpacity`
  background-color: #85d151;
  width: 66px;
  height: 66px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #85d151;
  width: 100%;
  margin-top: 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const LogoutButtonText = styled.Text`
  font-weight: 700;
  color: white;
`;

export const OptionText = styled.Text`
  font-size: 16px;
`;
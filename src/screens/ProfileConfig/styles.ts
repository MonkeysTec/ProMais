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

export const BackContainer = styled.TouchableOpacity`
  margin-bottom: 30px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserNameText = styled.Text`
  color: red;
  font-size: 24px;
  font-weight: 600;
`;

export const AvatarButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const AvatarContainer = styled.View`
  background-color: #85d151;
  width: 66px;
  height: 66px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const OptionsContainer = styled.View`
  flex-direction: column;
  padding-horizontal: 40px;
  gap: 20px;
  margin-bottom: 20px;
`;

export const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const OptionIconContainer = styled.View`
  background-color: #85d151;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const OptionText = styled.Text`
  font-size: 20px;
`;
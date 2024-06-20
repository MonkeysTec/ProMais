import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #F3F3F3;
`;

export const RedViewHeaderContainer = styled.View`
  background-color: red;
  height: 120px;
  width: 100%;
  padding-horizontal: 30px;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  flex-direction: row;
  align-items: center;
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

export const ContentContainer = styled.View`
  margin-top: -50px;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const InviteButton = styled.TouchableOpacity`
  background-color: red;
  border-radius: 40px;
  width: 100%;
  justify-content: center;
  height: 50px;
  align-items: center;
  flex-direction: row;
`;

export const InviteButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 700;
  margin-left: 10px;
`;

export const SectionTitleContainer = styled.View`
  flex-direction: column;
  margin-top: 20px;
`;

export const SectionTitleText = styled.Text`
  font-size: 16px;
  color: red;
  font-weight: 700;
`;

export const SectionSubtitleText = styled.Text`
  font-size: 16px;
  color: grey;
  font-weight: 700;
`;

export const BeeperListContainer = styled.View`
  flex-direction: column;
  margin-top: 20px;
  height: auto;
`;

export const BeeperListHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const BeeperListHeaderText = styled.Text`
  font-size: 16px;
  color: red;
  font-weight: 600;
`;

export const BeeperItem = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const BeeperItemText = styled.Text`
  margin-right: 70px;
  font-size: 16px;
  color: grey;
  font-weight: 600;
  width: 100px;
`;

export const BeeperStatusContainer = styled.View`
  width: 80px;
`;

export const PendingContainer = styled.View`
  flex-direction: row;
  margin-left: -25px;
`;

export const PendingText = styled.Text`
  color: #D7D711;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  border-radius: 50px;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export const NoBeeperText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  align-self: flex-start;
  color: grey;
`;
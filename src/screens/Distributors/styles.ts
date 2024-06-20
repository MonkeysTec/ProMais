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

export const ViewBody = styled.View`
  padding-horizontal: 20px;
  width: 100%;
  height: auto;
`;

export const DistributorCard = styled.View`
  background-color: white;
  border-radius: 15px;
  padding: 25px;
  height: 100%;
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
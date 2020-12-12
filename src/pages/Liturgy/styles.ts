import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const LiturgyList = styled(FlatList as new () => FlatList<Warn>)`
  margin: 32px 18px 10px;
`;
export const LiturgyContainer = styled.View`
  background: #C2C2C2;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;

  align-items: center;
`;
export const LiturgyText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-top: 8px;
  font-size: 18px;

  text-align: center;
`;

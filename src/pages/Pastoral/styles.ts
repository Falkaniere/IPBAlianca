import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Pastoral } from './index';

export const PastoralList = styled(FlatList as new () => FlatList<any>)`
  margin: 10px 18px 5px;
`;
export const PastoralContainer = styled.View`
  background: #C2C2C2;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;

  align-items: center;
`;
export const PastoralText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-top: 8px;
  font-size: 18px;

  text-align: center;
`;

import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const PastoralList = styled.View`
  margin: 10px 18px 5px;
`;
export const PastoralContainer = styled.View`
  background: #C2C2C2;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;

  align-items: center;
`;

export const PastoralTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin-bottom: 8px;
`;

export const PastoralSubtitle = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  margin-bottom: 12px;
`;

export const PastoralText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-top: 8px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

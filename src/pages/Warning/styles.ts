import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View``;

export const WarnList = styled(FlatList as new () => FlatList<Warn>)`
  margin: 32px 18px 10px;
`;

export const WarnContainer = styled.View`
  background: #C2C2C2;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;

  align-items: center;
`;

export const TitleContainer = styled.View`
  align-self: stretch;
  text-align: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: #878787;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 18px;
`;

export const WarnText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-top: 8px;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
`;

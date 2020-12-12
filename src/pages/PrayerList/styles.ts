import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Order } from './index';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const OrderList = styled(FlatList as new () => FlatList<Order>)``;

export const OrderContainer = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #C2C2C2;

  flex-direction: row;
  align-items: center;
`;

export const OrderText = styled.Text`
  width: 300px;
  height: 59px;
  margin-left: 32px;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  line-height: 28px;
`;

import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Order } from './index';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const OrderList = styled(FlatList as new () => FlatList<Order>)`
  padding: 32px 18px;
`;

export const OrderContainer = styled.View`
  flex-direction: row;
`;

export const OrderText = styled.Text``;

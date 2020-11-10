import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Event } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const EventsList = styled(FlatList as new () => FlatList<Event>)`
  padding: 32px 18px;
`;

export const EventContainer = styled.View`
  width: 380px;
  height: 170px;
  background: #C2C2C2;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: column;
  align-items: center;
`;

export const EventTitle = styled.Text`
  /* font-family: 'RobotoSlab-Medium'; */
  font-weight: 500;
  font-size: 24px;
`;

export const EventDate = styled.Text`
  /* font-family: 'RobotoSlab-Medium'; */
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
`;
export const EventSchedule = styled.Text`
  /* font-family: 'RobotoSlab-Medium'; */
  margin-top: 12px;
  font-weight: 400;
  font-size: 16px;
`;

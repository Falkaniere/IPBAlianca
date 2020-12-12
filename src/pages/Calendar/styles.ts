import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Event } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const EventsList = styled(FlatList as new () => FlatList<Event>)`
  /* padding: 32px 18px; */
  margin: 32px 18px 5px;
`;

export const EventContainer = styled.View`
  background: #C2C2C2;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EventTitle = styled.Text`
  font-family: 'RobotoSlab-Normal';
  font-size: 24px;
  line-height: 28px;
`;

export const EventDate = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-top: 24px;
  font-size: 16px;
  line-height: 18px;
`;
export const EventSchedule = styled.Text`
  font-family: 'RobotoSlab-Regular';
  margin-top: 13px;
  font-size: 16px;
  line-height: 18px;
`;

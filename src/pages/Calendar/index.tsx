import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  EventsList,
  EventTitle,
  EventContainer,
  EventDate,
EventSchedule
} from './styles';
import Header from '../../components/Header'

export interface Event {
  id: number;
  date: string;
  details: string;
  schedule: string;
  title: string;
}

const Calendar: React.FC = () => {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.get('/events.json').then(response => {
      const dataObj: any = Object.values(response.data);
      setEvents(dataObj);
    });
  }, []);

  return (
    <Container>
      <Header children='Agenda'/>
      <ScrollView>
        <EventsList
          data={events}
          keyExtractor={(event) => event.title}
          renderItem={({ item: event }) => (
            <EventContainer>
              <EventTitle>{event.title}</EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventSchedule>{event.schedule}</EventSchedule>
            </EventContainer>
          )}
        />
      </ScrollView>
    </Container>
  );
}

export default Calendar;

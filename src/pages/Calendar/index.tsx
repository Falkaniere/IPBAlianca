import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  Container,
  EventsList,
  EventTitle,
  EventContainer,
  EventDate,
  EventSchedule
} from './styles';
import Header from '../../components/Header'
import { ScrollView } from 'react-native-gesture-handler';

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
    const events: any = [
      {
        id: 1,
        title: 'Santa Ceita',
        date: '11/12/2020',
        schedule: '19:00',
      },
      {
        id: 2,
        title: 'Culto para crianças',
        date: '11/12/2020',
        schedule: '19:00',
      },
      {
        id: 3,
        title: 'Páscoa 221',
        date: '11/12/2020',
        schedule: '19:00',
      },
      {
        id: 4,
        title: 'TESTE TESTE',
        date: '11/12/2020',
        schedule: '19:00',
      },
      {
        id: 5,
        title: 'TESTE TESTE TESTE',
        date: '11/12/2020',
        schedule: '19:00',
      }
    ];

    setEvents(events);

  }, []);

  return (
    <Container>
      <Header children='Agenda' arrowGoBack={false}/>
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
    </Container>
  );
}

export default Calendar;

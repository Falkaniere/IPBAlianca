import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  Container,
  EventsList,
  EventTitle,
  EventContainer
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

  const teste = [];

  teste.push(events);

  console.log(teste);

  useEffect(() => {
    api.get('/events.json').then(response => {
      setEvents(response.data);
    });
  }, []);

  return (
    <Container>
      <Header children='Agenda'/>
      <EventsList
        data={events}
        keyExtractor={teste => teste.title}
        renderItem={({ item: teste }) => (
          <EventContainer>
            <EventTitle>{teste.title}</EventTitle>
          </EventContainer>
        )}
      />
    </Container>
  );
}

export default Calendar;

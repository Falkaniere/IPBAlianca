import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

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
  id: string;
  date: string;
  description: string;
  schedule: string;
  title: string;
}

const Calendar: React.FC = () => {

  const [events, setEvents] = useState<Event[]>([]);

  const getAllEvents: any = () => {
    firestore()
      .collection('events')
      .get()
      .then((querySnapshot) => {
        const Listevent: any = [];
        querySnapshot.forEach((response) => {
          const event: Event = {
            id: response.id,
            date: response.data().date,
            description: response.data().description,
            schedule: response.data().schedule,
            title: response.data().title,
          };
          Listevent.push(event);
        });
        setEvents(Listevent)
      });
  }

  useEffect(() => {
    getAllEvents();
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

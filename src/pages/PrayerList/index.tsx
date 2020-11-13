import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, OrderList, OrderContainer, OrderText } from './styles';

import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

export interface Order {
  reason: string;
}

const Calendar: React.FC = () => {

  const [order, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    api.get('prayerList.json').then(response => {
      const dataObj: any = Object.values(response.data);
      setOrder(dataObj);
    })
  })


  return (
    <Container>
      <Header children='Lista de Oração' />
      <ScrollView>
        <OrderList
          data={order}
          keyExtractor={(order) => order.reason}
          renderItem={({ item: order }) => (
            <OrderContainer>
              <OrderText>{order.reason}</OrderText>
            </OrderContainer>
          )}
        />
      </ScrollView>
    </Container>

  );
}

export default Calendar;

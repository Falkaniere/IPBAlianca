import React, { useState, useEffect, useCallback } from 'react';
import firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';

import CheckBox from '@react-native-community/checkbox';
import { Container, OrderList, OrderContainer, OrderText } from './styles';
import Header from '../../components/Header';

export interface Order {
  id: string;
  reason: string;
  isCheck: boolean;
  updatedAt: Date;
}

const PrayerList: React.FC = () => {
  const [orders, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    firestore()
    .collection('orders')
    .get()
    .then((orders) => {
      const arrOfOrders: any = [];
      orders.forEach((order) => {
        const oneOrder: Order = {
          id: order.id,
          reason: order.data().title,
          isCheck: order.data().isCheck,
          updatedAt: order.data().updatedAt,
        }
        arrOfOrders.push(oneOrder);
      });
      setOrder(arrOfOrders);
    })

    verifyIfIsAnotherDay();
  },[]);

  const verifyIfIsAnotherDay = () => {
    orders.forEach((order) => {
      if(dayjs().isBefore(dayjs(order.updatedAt))){
        firestore()
        .collection('orders')
        .doc(order.id)
        .update({
          isCheck: false,
        })
      }
    })
  };

  const setCheckOnPrayer = (value: boolean, orderId: string) => {
    firestore()
    .collection('orders')
    .doc(orderId)
    .update({
      isCheck: true,
      updateAt: new Date(),
    })
  };

  return (
    <Container>
      <Header children='Lista de Oração' arrowGoBack={false} />
      <OrderList
        data={orders}
        keyExtractor={(order) => order.id}
        renderItem={({ item: order }) => (
          <OrderContainer>
            <CheckBox
              value={order.isCheck}
              onValueChange={(value) => setCheckOnPrayer(value, order.id)}
              disabled={order.isCheck ? true : false}
            />
            <OrderText>{order.reason}</OrderText>
          </OrderContainer>
        )}
      />
    </Container>
  );
}

export default PrayerList;

import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import dayjs, { Dayjs } from 'dayjs';

import CheckBox from '@react-native-community/checkbox';
import { Container, OrderList, OrderContainer, OrderText } from './styles';
import Header from '../../components/Header';

export interface Order {
  id: string;
  reason: string;
}
interface ReasonChecked{
  value: boolean;
  time: Dayjs;
}

const PrayerList: React.FC = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const [listCheck, setCheck] = useState<ReasonChecked>();

  const verifyIfIsAnotherDay = useCallback(() => {
    if(listCheck?.time.isBefore(dayjs())){
      setCheckOnPrayer(false);
    }
  }, []);

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
        }
        arrOfOrders.push(oneOrder);
      });
      setOrder(arrOfOrders);
    })

    verifyIfIsAnotherDay();
  },[]);

  const setCheckOnPrayer = useCallback(async(value: boolean) => {
    if(value){
      const time = dayjs();
      const reasonChecked: ReasonChecked = {value, time};
      await AsyncStorage.setItem('@IPBMorungaba:reason', reasonChecked.toString());
      setCheck(reasonChecked);
    }
  },[]);

  return (
    <Container>
      <Header children='Lista de Oração' arrowGoBack={false} />
      <OrderList
        data={order}
        keyExtractor={(order) => order.id}
        renderItem={({ item: order }) => (
          <OrderContainer>
            <CheckBox
              onValueChange={(value) => setCheckOnPrayer(value)}
            />
            <OrderText>{order.reason}</OrderText>
          </OrderContainer>
        )}
      />
    </Container>
  );
}

export default PrayerList;

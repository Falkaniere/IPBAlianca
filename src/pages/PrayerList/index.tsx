import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import CheckBox from '@react-native-community/checkbox';
import { Container, OrderList, OrderContainer, OrderText } from './styles';
import Header from '../../components/Header';

export interface Order {
  reason: string;
}
interface ReasonChecked{
  value: boolean;
  time: Date;
}

const Calendar: React.FC = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const [listCheck, setCheck] = useState<ReasonChecked | null>(null);

  useEffect(() => {
    api.get('prayerList.json').then(response => {
      const dataObj: any = Object.values(response.data);
      setOrder(dataObj);
    });

    async function loadStoragedData(): Promise<void>{
      const info = await AsyncStorage.getItem('@IPBMorungaba:reason');
      console.log(info);
    }
    loadStoragedData();
  },[]);

  const setCheckOnPrayer = useCallback(async(value: boolean) => {
    const time = new Date();
    const reasonChecked: ReasonChecked = {value, time};
    await AsyncStorage.setItem('@IPBMorungaba:reason', reasonChecked.toString());
    setCheck(reasonChecked);
    console.log(reasonChecked);
  },[]);

  return (
    <Container>
      <Header children='Lista de Oração' />
        <OrderList
          data={order}
          keyExtractor={(order) => order.reason}
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

export default Calendar;

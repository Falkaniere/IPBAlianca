import React, { useState, useEffect, useCallback } from 'react';
import firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';
import { useAuth } from '../../hooks/auth';
import CheckBox from '@react-native-community/checkbox';
import { Container, OrderList, OrderContainer, OrderText } from './styles';
import Header from '../../components/Header';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface Order {
  id: string;
  reason: string;
  isCheck: boolean;
  updatedAt: Date;
}

const PrayerList: React.FC = () => {
  const [orders, setOrder] = useState<Order[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const getAllOrders = () => {
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
      });
    }

    getAllOrders();
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

  if(!user){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="hand-stop-o" size={70} color='#666' />
        <Text style={{ marginTop: 15, paddingHorizontal: 5 ,fontSize: 16, color: '#666', textAlign: 'center' }}>Acesso negado, favor realizar login para acessar a página</Text>
      </View>
    )
  }

  return (
    <Container>
      <Header children='Lista de Oração' arrowGoBack={false} logoutButton={false}/>
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

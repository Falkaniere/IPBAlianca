import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  OpenLiturgy,
  OpenLiturgyText,
  OpenPastoral,
  OpenPastoralText,
} from './styles';

const Church: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header children='Igreja' arrowGoBack={false} />
      <View>
        <OpenPastoral onPress={() => navigation.navigate('Pastoral')}>
          <OpenPastoralText>PASTORAL</OpenPastoralText>
        </OpenPastoral>
        <OpenLiturgy onPress={() => navigation.navigate('Liturgy')}>
          <OpenLiturgyText>LITURGIA</OpenLiturgyText>
        </OpenLiturgy>
      </View>
    </Container>

  );
}

export default Church;

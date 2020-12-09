import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import {
  Container,
  OpenLiturgy,
  OpenLiturgyText,
  OpenPastoral,
  OpenPastoralText,
} from './styles';

const Calendar: React.FC = () => {
  return (
    <Container>
      <Header children='Igreja' />
      <View>
        <OpenPastoral onPress={() => {console.log("liturgy")}}>
          <OpenPastoralText>PASTORAL</OpenPastoralText>
        </OpenPastoral>
        <OpenLiturgy onPress={() => {console.log("liturgy")}}>
          <OpenLiturgyText>LITURGIA</OpenLiturgyText>
        </OpenLiturgy>
      </View>
    </Container>

  );
}

export default Calendar;

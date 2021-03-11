import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import firestore from '@react-native-firebase/firestore'

import { useNavigation } from '@react-navigation/native';

export interface Pastoral {
  id: string,
  text: string,
}

import {
  PastoralList,
  PastoralContainer,
  PastoralText
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Pastoral: React.FC = () => {
  const navigation = useNavigation();
  const [pastoral, setPastoral] = useState<Pastoral | null>();

  useEffect(() => {
    firestore()
    .collection('pastoral')
    .get()
    .then((pastoral) => {
      const insertPastoral = {
        id: pastoral.docs[0].id,
        text: pastoral.docs[0].data().text
      }
      setPastoral(insertPastoral);
    })

    console.log(pastoral)
  },[]);

  return (
    <ScrollView>
      <Header children='Pastoral' arrowGoBack={true}/>
        <PastoralList >
          <PastoralContainer>
            <PastoralText>{pastoral?.text}</PastoralText>
          </PastoralContainer>
        </PastoralList>
    </ ScrollView>
  );
}

export default Pastoral;

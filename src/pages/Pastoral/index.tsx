import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  PastoralList,
  PastoralContainer,
  PastoralTitle,
  PastoralSubtitle,
  PastoralText
} from './styles';

interface Pastoral {
  id: string,
  title: string,
  subtitle: string,
  text: string,
}

const Pastoral: React.FC = () => {
  const navigation = useNavigation();
  const [pastoral, setPastoral] = useState<Pastoral | null>();

  useEffect(() => {
    firestore()
    .collection('pastoral')
    .get()
    .then((pastoral) => {
      const insertPastoral: Pastoral = {
        id: pastoral.docs[0].id,
        title: pastoral.docs[0].data().title,
        subtitle: pastoral.docs[0].data().subtitle,
        text: pastoral.docs[0].data().text
      }
      setPastoral(insertPastoral);
    })

    console.log(pastoral)
  },[]);

  return (
    <ScrollView>
      <Header children='Pastoral' arrowGoBack={true} logoutButton={false}/>
        <PastoralList >
          <PastoralContainer>
            <PastoralTitle>{pastoral?.title}</PastoralTitle>
            <PastoralSubtitle>{pastoral?.subtitle}</PastoralSubtitle>
            <PastoralText>{pastoral?.text}</PastoralText>
          </PastoralContainer>
        </PastoralList>
    </ ScrollView>
  );
}

export default Pastoral;

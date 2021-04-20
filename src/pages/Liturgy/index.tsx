import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

import {
  LiturgyList,
  LiturgyContainer,
  LiturgyTitle
} from './styles';

export interface Liturgy {
  id: string,
  title: string,
  song: string;
  letterSong: string;
  bibleText: string;
}

const Liturgy: React.FC = () => {
  const [liturgy, setLiturgy] = useState<Liturgy>();

  const getLiturgy = () => {
    firestore()
      .collection('liturgy')
      .get()
      .then((liturgy) => {
        const liturgyObject: Liturgy = {
          id: liturgy.docs[0].id,
          title: liturgy.docs[0].data().title,
          bibleText: liturgy.docs[0].data().bibleText,
          song: liturgy.docs[0].data().song,
          letterSong: liturgy.docs[0].data().letterSong,
        }
        setLiturgy(liturgyObject);
      });
  }

  useEffect(() => {
    getLiturgy();
  },[])

  return (
    <ScrollView>
      <Header children='Liturgia' arrowGoBack={true} logoutButton={false}/>
      <LiturgyList>
        <LiturgyContainer>
          <LiturgyTitle>{liturgy?.title}</LiturgyTitle>
        </LiturgyContainer>
      </LiturgyList>
    </ScrollView>
  );
}

export default Liturgy;

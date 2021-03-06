import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import firestore from '@react-native-firebase/firestore';

import { useNavigation } from '@react-navigation/native';

export interface Liturgy {
  id: string,
  text: string,
}

import {
  LiturgyList,
  LiturgyContainer,
  LiturgyText
} from './styles';

const Liturgy: React.FC = () => {
  const navigation = useNavigation();
  const [liturgy, setLiturgy] = useState<Liturgy>();

  const getLiturgy = () => {
    firestore()
      .collection('liturgy')
      .get()
      .then((querySnapshot) => {
        const arrOfLiturgy: any = [];
        querySnapshot.forEach((response) => {
          const getOneLiturgy: Liturgy = {
            id: response.id,
            text: response.data().text,
          };
          arrOfLiturgy.push(getOneLiturgy);
        });
        setLiturgy(arrOfLiturgy);
      });
  }

  useEffect(() => {
    getLiturgy();
  },[])

  return (
<>
      <Header children='Liturgia' arrowGoBack={true}/>
        <LiturgyList
          data={liturgy}
          keyExtractor={(liturgy) => liturgy.id}
          renderItem={({ item: liturgy }) => (
            <LiturgyContainer>
              <LiturgyText>{liturgy.text}</LiturgyText>
            </LiturgyContainer>
          )}
        />
    </>
  );
}

export default Liturgy;

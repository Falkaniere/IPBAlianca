import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';

export interface Liturgy {
  id: number,
  text: string,
}

import {
  LiturgyList,
  LiturgyContainer,
  LiturgyText
} from './styles';

const Calendar: React.FC = () => {
  const navigation = useNavigation();
  const [liturgy, setLiturgy] = useState<Liturgy>();

  useEffect(() => {
    const liturgy: any = [
      {
        id: 1,
        text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with'
      },
    ];

    setLiturgy(liturgy)
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

export default Calendar;

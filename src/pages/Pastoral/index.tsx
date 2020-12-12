import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import { useNavigation } from '@react-navigation/native';

export interface Pastoral {
  id: number,
  text: string,
}

import {
  PastoralList,
  PastoralContainer,
  PastoralText
} from './styles';

const Pastoral: React.FC = () => {
  const navigation = useNavigation();
  const [pastoral, setpastoral] = useState<Pastoral>();

  useEffect(() => {
    const pastoral: any = [
      {
        id: 1,
        text: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins withLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with'
      },
    ];

    setpastoral(pastoral)
  },[])

  return (
<>
      <Header children='Pastoral' arrowGoBack={true}/>
        <PastoralList
          data={pastoral}
          keyExtractor={(pastoral) => pastoral.id}
          renderItem={({ item: pastoral }) => (
            <PastoralContainer>
              <PastoralText>{pastoral.text}</PastoralText>
            </PastoralContainer>
          )}
        />
    </>
  );
}

export default Pastoral;

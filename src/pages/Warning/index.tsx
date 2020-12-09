import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import { Container, WarnContainer, WarnList, WarnText, TitleContainer, Title } from './styles';

interface warns {
  id: number;
  title: string;
  warn: string;
}

const Calendar: React.FC = () => {
  const [warn, setWarn] = useState<warns>();

  useEffect(() => {
    const warnings: any = [
      {
        id: 1,
        title: 'AVISO 1',
        warn: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
      },
      {
        id: 2,
        title: 'AVISO 2',
        warn: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
      },
      {
        id: 3,
        title: 'AVISO 3',
        warn: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
      },
      {
        id: 4,
        title: 'AVISO 4',
        warn: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:'
      }
    ];

    setWarn(warnings)
  },[])

  return (
    <>
      <Header children='Avisos' />
        <WarnList
          data={warn}
          keyExtractor={(warn) => warn.id}
          renderItem={({ item: warn }) => (
            <WarnContainer>
              <TitleContainer>
                <Title>{warn.title}</Title>
              </TitleContainer>
              <WarnText>{warn.warn}</WarnText>
            </WarnContainer>
          )}
        />
    </>
  );
}

export default Calendar;

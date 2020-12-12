import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps extends RectButtonProperties {
  children: string;
  arrowGoBack: boolean;
}

import { Header, HeaderTitle, IconBack } from './styles';

const HeaderApp: React.FC<HeaderProps> = ({ children, arrowGoBack, ...rest }) => {

  const navigation = useNavigation();

  return (
    <Header>
      {arrowGoBack && (
        <IconBack name="arrow-left" size={28} color="#999" onPress={navigation.goBack}/>
      )}
      <HeaderTitle>{children}</HeaderTitle>
    </Header>
  );
}

export default HeaderApp;

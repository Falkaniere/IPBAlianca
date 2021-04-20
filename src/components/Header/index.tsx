import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth'

interface HeaderProps extends RectButtonProperties {
  children: string;
  arrowGoBack: boolean;
  logoutButton: boolean;
}

import {
  Header,
  HeaderTitle,
  IconBack,
  LogoutButton,
  HeaderProfile
 } from './styles';

const HeaderApp: React.FC<HeaderProps> = ({ children, arrowGoBack, logoutButton, ...rest }) => {
  const navigation = useNavigation();
  const { SignOut } = useAuth();

  return (
    <>
      {logoutButton ?
          <HeaderProfile>
            <HeaderTitle>{children}</HeaderTitle>
            <LogoutButton onPress={() => SignOut()}>SAIR</LogoutButton>
          </HeaderProfile>
        :
          <Header>
            {arrowGoBack && (
              <IconBack name="arrow-left" size={28} color="#999" onPress={navigation.goBack}/>
            )}
            <HeaderTitle>{children}</HeaderTitle>
          </Header>
      }
    </>
  );
}

export default HeaderApp;

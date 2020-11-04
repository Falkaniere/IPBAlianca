import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface HeaderProps extends RectButtonProperties {
  children: string;
}
import { Header, HeaderTitle } from './styles';

const HeaderApp: React.FC<HeaderProps> = ({ children, ...rest }) => {
  return (
    <Header>
      <HeaderTitle>{children}</HeaderTitle>
    </Header>
  );
}

export default HeaderApp;

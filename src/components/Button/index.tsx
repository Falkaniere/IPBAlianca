import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText, IconButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({ icon, children, ...rest }) => (
  <Container {...rest} >
    <IconButton name={icon} size={28}  color="#FFF" />
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;

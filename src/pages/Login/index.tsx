import React from 'react';
import { Image } from 'react-native';
import { Container, LoginText } from './styles';
import ButtonGoogle from '../../components/Button/index'
import logoImg from '../../assets/logo.png'

const Login: React.FC = () => {

  return (
    <>
      <Container>
        <Image source={logoImg} width={50} />
        <LoginText>Faca seu Login</LoginText>
        <ButtonGoogle onPress={() => {console.log('dDEDEDEUEUEUUE')}}
          icon='google'>
            Login com Google
        </ButtonGoogle>
      </Container>
    </>
  )
}

export default Login;

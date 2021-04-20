import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import logoImg from '../../assets/logo.png';
import ButtonGoogle from '../../components/Button/index';
import { Container, LoginText } from './styles';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const { loginWithGoogle, loading } = useAuth();

  if(loading){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: 0.5}}>
        <ActivityIndicator size="large" color="#666"/>
      </View>
    )
  }

  return (
    <>
      <Container>
        <Image source={logoImg} width={50} />
        <LoginText>Faça seu Login</LoginText>
        <ButtonGoogle
          icon='google'
          onPress={() => {loginWithGoogle() }} >
            Login com Google
          </ButtonGoogle>
      </Container>
    </>
  )
}

export default Login;

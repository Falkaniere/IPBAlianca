import React, { useEffect, useState, useCallback} from 'react';
import { Button, Image } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../../utils/keys';
import { StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/firestore';

import logoImg from '../../assets/logo.png';
import ButtonGoogle from '../../components/Button/index';
import { Container, LoginText } from './styles';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const { loginWithGoogle, SignOut, user } = useAuth();

  useEffect(() => {
    const configureGoogleSignIn = () => {
      GoogleSignin.configure({
        webClientId: WEB_CLIENT_ID,
        offlineAccess: false,
      });
    }

    configureGoogleSignIn();
  }, []);

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
        <Button onPress={() => { SignOut() }} title='SAIR'/>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    width: 208,
    height: 60
  }
})

export default Login;

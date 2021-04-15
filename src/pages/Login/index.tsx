import React, { useEffect, useState } from 'react';
import { Alert, Button, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../../utils/keys';
import logoImg from '../../assets/logo.png';
import ButtonGoogle from '../../components/Button/index';
import auth from '@react-native-firebase/auth';


import { Container, LoginText } from './styles';
import { firebase } from '@react-native-firebase/firestore';
import { StyleSheet } from 'react-native';

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const configureGoogleSignIn = () => {
      GoogleSignin.configure({
        webClientId: WEB_CLIENT_ID,
        offlineAccess: false,
      })
    }

    configureGoogleSignIn();
  })



  const loginWithGoogle = async () => {

    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const user = await auth().signInWithCredential(googleCredential);
    console.log(user);
  }

  const SignOut = async () => {
    try {
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setIsLoggedIn(false)
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString())
    }
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
        {/* <Button onPress={() => { SignOut() }} title='SAIR'/> */}
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

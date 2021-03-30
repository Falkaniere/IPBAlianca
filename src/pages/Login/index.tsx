import React, { useEffect, useState } from 'react';
import { Alert, Image } from 'react-native';
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
    configureGoogleSignIn();
  })

  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: false,
    })
  }

  const loginWithGoogle = async () => {
    try{
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      console.log(userInfo);
      setUserInfo(userInfo);
      setError(null);
      setIsLoggedIn(true);
    } catch (error){
      if(error.code === statusCodes.SIGN_IN_CANCELLED){
        Alert.alert('Cancelado')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
        Alert.alert('Play services is not abailable')
      } else {
        Alert.alert('Algo ocorreu de errado ... ', error.toString())
        setError(error)
      }
    }
  }

  return (
    <>
      <Container>
        <Image source={logoImg} width={50} />
        <LoginText>Faça seu Login</LoginText>
        <GoogleSigninButton
          style={styles.signInButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {loginWithGoogle() }} />
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

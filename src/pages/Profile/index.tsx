import React from 'react';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth'

import { Container, ImageProfile, NameProfile, EmailProfile } from './styles';

const Profile: React.FC = () => {
  const { user }: any = useAuth();

  return (
    <>
      <Header children='Perfil' arrowGoBack={false} logoutButton={true}/>
      <Container>
        <ImageProfile source={{ uri: user.photoURL}} />
        <NameProfile >{user.displayName}</NameProfile>
        <EmailProfile >{user.email}</EmailProfile>
      </Container>
    </>
  )
}

export default Profile;

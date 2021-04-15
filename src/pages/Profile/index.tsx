import React from 'react';
import { View } from 'react-native';
import imageProfile from '../../assets/profile.jpg';
import { Container, ImageProfile, NameProfile } from './styles';
import Header from '../../components/Header';
// import

const Profile: React.FC = () => {
  return (
    <>
      <Header children='Perfil' arrowGoBack={false}/>
      <Container>
        <ImageProfile source={imageProfile} />
        <NameProfile>TESTE</NameProfile>
      </Container>
    </>
  )
}

export default Profile;

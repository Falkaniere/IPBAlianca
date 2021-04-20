import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  align-items: center;
`;

export const ImageProfile = styled(Image)`
  width: 180px;
  height: 180px;
  border-radius: 98px;
  margin: 24px 0;
  align-self: center;
`;

export const NameProfile = styled.Text`
  text-transform: uppercase;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
`;

export const EmailProfile = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-top: 10px;
`;

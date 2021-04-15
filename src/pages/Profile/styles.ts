import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;

  align-items: center;
  /* justify-content: center; */
`;

export const ImageProfile = styled(Image)`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  margin: 24px 0;
`;

export const NameProfile = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
`;

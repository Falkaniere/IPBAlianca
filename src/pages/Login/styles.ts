import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${ Platform.OS === 'android' ? 150 : 40 }px;
`;

export const LoginText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  padding: 48px 0px 16px 0px;
`;

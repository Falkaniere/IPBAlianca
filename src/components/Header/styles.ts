import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Header = styled.View`
  width: 100%;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  flex-direction: row;
  align-items: flex-start;

  border-bottom-width: 1;
  border-bottom-color: #C2C2C2;
`;

export const HeaderTitle = styled.Text`
  /* font-family: 'RobotoSlab-Medium'; */
  font-size: 24px;
  line-height: 28px;
`;

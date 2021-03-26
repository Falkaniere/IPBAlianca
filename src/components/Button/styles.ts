import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #4885ed;
  border-radius: 10px;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #FFF;
  font-size: 18px;
`;

export const IconButton = styled(AntDesign)`
  margin-right: 16px;
`
